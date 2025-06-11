const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcryptjs');
const path = require('path');

const app = express();
const port = 3000;

// Conecta ao banco de dados SQLite
const db = new sqlite3.Database('./users.db', (err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err.message);
    } else {
        console.log('Conectado ao banco de dados SQLite.');
        // Cria a tabela de usuários se não existir (garante que está lá)
        db.run(`CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            senha TEXT NOT NULL
        )`, (createErr) => {
            if (createErr) {
                console.error('Erro ao criar tabela users:', createErr.message);
            } else {
                console.log('Tabela "users" criada ou já existe.');
                // Exemplo: Cadastrar um usuário de teste (remova em produção)
                const testEmail = 'test@test.com';
                const testSenha = 'senha123';
                const testNome = 'Usuário Teste';

                db.get('SELECT * FROM users WHERE email = ?', [testEmail], (err, row) => {
                    if (err) {
                        console.error('Erro ao verificar usuário existente:', err.message);
                        return;
                    }
                    if (!row) {
                        bcrypt.hash(testSenha, 10, (hashErr, hash) => {
                            if (hashErr) {
                                console.error('Erro ao hashear senha:', hashErr.message);
                                return;
                            }
                            db.run(`INSERT INTO users (nome, email, senha) VALUES (?, ?, ?)`,
                                [testNome, testEmail, hash],
                                function (insertErr) {
                                    if (insertErr) {
                                        console.error('Erro ao inserir usuário de teste:', insertErr.message);
                                    } else {
                                        console.log(`Usuário de teste '${testEmail}' inserido com sucesso (ID: ${this.lastID}).`);
                                    }
                                });
                        });
                    } else {
                        console.log(`Usuário de teste '${testEmail}' já existe.`);
                    }
                });
            }
        });
    }
});

// Middleware para servir arquivos estáticos (HTML, CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para processar corpos de requisição JSON e URL-encoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rota para a página de cadastro
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'register.html'));
});

// Rota para o login
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send('Email e senha são obrigatórios.');
    }

    db.get('SELECT * FROM users WHERE email = ?', [email], (err, user) => {
        if (err) {
            console.error('Erro ao buscar usuário:', err.message);
            return res.status(500).send('Erro interno do servidor.');
        }

        if (!user) {
            return res.status(401).send('Email ou senha inválidos.');
        }

        bcrypt.compare(password, user.senha, (compareErr, result) => {
            if (compareErr) {
                console.error('Erro ao comparar senhas:', compareErr.message);
                return res.status(500).send('Erro interno do servidor.');
            }

            if (result) {
                res.status(200).send('Login bem-sucedido! Bem-vindo, ' + user.nome);
            } else {
                res.status(401).send('Email ou senha inválidos.');
            }
        });
    });
});

// --- Nova Rota para Cadastro ---
app.post('/register', (req, res) => {
    const { nome, email, senha } = req.body;

    // Validação básica dos campos
    if (!nome || !email || !senha) {
        return res.status(400).send('Todos os campos (Nome, Email, Senha) são obrigatórios.');
    }

    // Verifica se o email já está cadastrado
    db.get('SELECT * FROM users WHERE email = ?', [email], (err, row) => {
        if (err) {
            console.error('Erro ao verificar email existente:', err.message);
            return res.status(500).send('Erro interno do servidor.');
        }

        if (row) {
            // Email já existe
            return res.status(409).send('Este email já está cadastrado. Tente outro.');
        }

        // Se o email não existe, hasheia a senha e insere o novo usuário
        bcrypt.hash(senha, 10, (hashErr, hash) => {
            if (hashErr) {
                console.error('Erro ao hashear senha:', hashErr.message);
                return res.status(500).send('Erro ao processar senha.');
            }

            db.run(`INSERT INTO users (nome, email, senha) VALUES (?, ?, ?)`,
                [nome, email, hash],
                function (insertErr) {
                    if (insertErr) {
                        console.error('Erro ao inserir novo usuário:', insertErr.message);
                        return res.status(500).send('Erro ao cadastrar usuário.');
                    }
                    console.log(`Usuário '${nome}' (${email}) cadastrado com sucesso. ID: ${this.lastID}`);
                    res.status(201).send('Usuário cadastrado com sucesso! Você pode fazer login agora.');
                    // Opcional: Redirecionar para a página de login
                    // res.redirect('/');
                });
        });
    });
});
// --- Fim da Nova Rota para Cadastro ---
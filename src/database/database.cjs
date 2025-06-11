const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./users.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Conectado ao banco de dados SQLite.');
});

db.serialize(() => {
    // 1. Criação da tabela de usuários
    db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        senha TEXT NOT NULL
    )`, (err) => {
        if (err) {
            console.error(err.message);
            // Se houver um erro na criação da tabela, feche a conexão aqui também.
            db.close((closeErr) => {
                if (closeErr) { console.error(closeErr.message); }
                console.log('Conexão com o banco de dados fechada devido a erro na criação da tabela.');
            });
            return; // Interrompe a execução para não tentar inserir dados
        }
        console.log('Tabela "users" criada ou já existe.');

        // 2. Definição dos dados para inserção
        const nome = 'Usuário Teste'; // Certifique-se de fornecer um nome, pois é NOT NULL
        const email = 'test@test.com';
        const senha = 'senha123';

        // 3. Instrução SQL para inserção de dados
        const sql = `INSERT INTO users (nome, email, senha) VALUES (?, ?, ?)`;

        // 4. Executa a instrução SQL de inserção
        db.run(sql, [nome, email, senha], function(insertErr) {
            if (insertErr) {
                // Tratamento de erro específico para e-mail duplicado
                if (insertErr.message.includes('UNIQUE constraint failed')) {
                    console.error(`Erro: O e-mail '${email}' já está cadastrado.`);
                } else {
                    console.error('Erro ao inserir dados:', insertErr.message);
                }
            } else {
                console.log(`Linha adicionada com ID: ${this.lastID}`);
            }

            // 5. Fechando a conexão com o banco de dados APÓS a operação de inserção ser concluída.
            // Esta é a parte CRÍTICA para resolver o erro.
            db.close((closeErr) => {
                if (closeErr) {
                    console.error('Erro ao fechar conexão:', closeErr.message);
                }
                console.log('Conexão com o banco de dados fechada.');
            });
        });
    });
});
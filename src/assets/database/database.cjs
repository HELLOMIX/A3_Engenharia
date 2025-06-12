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

    db.run(`CREATE TABLE IF NOT EXISTS vagas (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        titulo TEXT NOT NULL,
        descricao TEXT NOT NULL,
        localizacao TEXT NOT NULL,
        salario REAL NOT NULL,
        tipo_contrato TEXT NOT NULL,
        tipo_carga_horaria TEXT NOT NULL,
        tipo_funcao TEXT NOT NULL,
        empresa TEXT NOT NULL
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
        console.log('Tabela "vagas" criada ou já existe.');
        // 2. Definição dos dados para inserção
        const titulo = 'Desenvolvedor Full Stack';
        const descricao = 'Desenvolvedor Full Stack com experiência em React e Node.js.';
        const localizacao = 'São Paulo, SP';
        const salario = 1000.00;
        const tipo_contrato = 'Estágio';
        const tipo_carga_horaria = 'Híbrido';
        const tipo_funcao = 'Desenvolvimento';
        const empresa = 'Empresa Teste';

        // 3. Instrução SQL para inserção de dados
        const sqlVaga = `INSERT INTO vagas (titulo, descricao, localizacao, salario, tipo_contrato, tipo_carga_horaria, tipo_funcao, empresa) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

        // 4. Executa a instrução SQL de inserção
        db.run(sqlVaga, [titulo, descricao, localizacao, salario, tipo_contrato, tipo_carga_horaria, tipo_funcao, empresa], function(insertErr) {
            if (insertErr) {
                // Tratamento de erro específico para e-mail duplicado
                if (insertErr.message.includes('UNIQUE constraint failed')) {
                    console.error(`Erro: A vaga '${titulo}' já está cadastrada.`);
                } else {
                    console.error('Erro ao inserir dados:', insertErr.message);
                }
            } else {
                console.log(`Linha adicionada com ID: ${this.lastID}`);
            }
        });
        // Fechando a conexão com o banco de dados APÓS todas as operações serem concluídas.
        db.close((closeErr) => {
            if (closeErr) {
                console.error('Erro ao fechar conexão:', closeErr.message);
            } else {
                console.log('Conexão com o banco de dados fechada.');
            }
        });
    });

    
});
const sqlite3 = require('sqlite3').verbose();

// Caminho para o seu arquivo de banco de dados SQLite
const dbPath = './users.db'; // SUBSTITUA PELO SEU CAMINHO REAL

// Abrir o banco de dados
let db = new sqlite3.Database(dbPath, sqlite3.OPEN_READONLY, (err) => {
    if (err) {
        console.error(`Erro ao abrir o banco de dados: '${err.message}'`);
        return;
    }
    console.log('Conectado ao banco de dados SQLite.');
});

// Exemplo 1: Selecionar todos os dados de uma tabela
const tableName = 'vagas'; // SUBSTITUA PELO NOME DA SUA TABELA

db.all(`SELECT * FROM ${tableName}`, [], (err, rows) => {
    if (err) {
        console.error(`Erro ao executar a consulta: '${err.message}'`);
        return;
    }
    console.log(`Dados da tabela '${tableName}':`);
    rows.forEach((row) => {
        console.log(row);
        // AQUI É ONDE VOCÊ PROCESSARIA CADA LINHA DOS DADOS
        // Por exemplo, você pode:
        // - Inserir em outro banco de dados (MongoDB, PostgreSQL, etc.)
        // - Adicionar a um array para processamento posterior
        // - Gravar em um arquivo JSON
        // - Fazer alguma lógica de negócio com os dados
    });
});

// Exemplo 2: Selecionar dados com uma condição (opcional)
const specificTableName = 'outra_tabela'; // SUBSTITUA PELO NOME DA SUA TABELA
const conditionValue = 'algum_valor'; // SUBSTITUA PELO SEU VALOR

db.get(`SELECT * FROM '${specificTableName}' WHERE coluna = ?`, [conditionValue], (err, row) => {
    if (err) {
        console.error(`Erro ao executar a consulta com condição: '${err.message}'`);
        return;
    }
    if (row) {
        console.log(`\nDado da tabela '${specificTableName}' com condição:`);
        console.log(row);
        // Processar o dado específico
    } else {
        console.log(`\nNenhum dado encontrado na tabela '${specificTableName}' com a condição.`);
    }
});


// Fechar o banco de dados quando terminar (é importante!)
// Geralmente, você fecharia a conexão depois de todas as suas operações.
// Neste exemplo simples, estou fechando após algumas consultas.
// Em um aplicativo real, você pode ter um gerenciador de conexão.
db.close((err) => {
    if (err) {
        console.error(`Erro ao fechar o banco de dados: '${err.message}'`);
    }
    console.log('\nConexão com o banco de dados SQLite fechada.');
});
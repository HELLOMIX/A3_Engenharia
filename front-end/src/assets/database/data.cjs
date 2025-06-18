const sqlite3 = require('sqlite3').verbose();

const dbPath = __dirname + '/users.db';

function getRowsFromTable(tableName, callback) {
    let db = new sqlite3.Database(dbPath, sqlite3.OPEN_READONLY, (err) => {
        if (err) {
            return callback(err);
        }
    });

    db.all(`SELECT * FROM ${tableName}`, [], (err, rows) => {
        db.close();
        if (err) {
            return callback(err);
        }
        // rows é um array de objetos, cada objeto é uma linha
        callback(null, rows);
    });
}

function getRowById(tableName, id, callback) {
    let db = new sqlite3.Database(dbPath, sqlite3.OPEN_READONLY, (err) => {
        if (err) {
            return callback(err);
        }
    });

    db.get(`SELECT * FROM ${tableName} WHERE id = ?`, [id], (err, row) => {
        db.close();
        if (err) {
            return callback(err);
        }
        callback(null, row);
    });
}

module.exports = { getRowsFromTable, getRowById };
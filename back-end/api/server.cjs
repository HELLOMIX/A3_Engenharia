const express = require('express');
const cors = require('cors');
const { getRowsFromTable, getRowById } = require('../../front-end/src/assets/database/data.cjs');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    getRowsFromTable('vagas', (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

app.get('/vaga/:id', (req, res) => {
    const id = req.params.id;
    getRowById('vagas', id, (err, row) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(row);
    });
});

app.get('/favicon.ico', (req, res) => res.status(204).end());

app.listen(3001, () => console.log('API rodando na porta 3001'));
const express = require('express');
const app = express();
const port = 3000;
const {getStats} = require('./metodoOS.js');

app.get('/', (req, res) =>{
        res.send('<h1>Olá Mundo</h1>')
});

app.get('/stats', (req, res) => {
    res.json(getStats());
});

app.listen(port, () =>{
    console.log(`Servidor rodando em http://localhost:${port}`)
});
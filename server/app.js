const express = require('express');
const bodyParser = require('body-parser');

const server = express();

server.use(bodyParser.json());

server.get('/', (req, res) => {
    res.send({message: 'Funciona!'});
});

module.exports = server;
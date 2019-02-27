const {winston} = require('./config');
const express = require('express');
const bodyParser = require('body-parser');
const morgan =require('morgan');
const routes = require('./routes');

const server = express();

server.use(bodyParser.json());
server.use(morgan('combined', { stream: winston.stream }));
server.use(routes);



module.exports = server;
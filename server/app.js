const {winston} = require('./config');
const express = require('express');
const bodyParser = require('body-parser');
const morgan =require('morgan');
const routes = require('./routes');

const server = express();

server.use(bodyParser.json());
server.use(morgan('combined', { stream: winston.stream }));

server.use('/public' , express.static(`&{__dirname}/public)`));
server.post("/upload", multer.single('file'), (req, res) =>{
    if(!req.file) return res.status(500).send('Error')
    res.send('Se ha añadido el archivo')
});
server.use(routes);



module.exports = server;
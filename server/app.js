require('./config');
const express = require('express');
const bodyParser = require('body-parser');

const CityModel = require('./models/City');

const server = express();

server.use(bodyParser.json());

server.get('/', (req, res) => {
    res.send({message: 'Funciona!'});
});

server.post("./city", async (req, res) => {
    // res.status( 201).send()
    // new Cities({...req.body})
    //     .save()
    //     .then(city => {
    //         res.status(201).send(city);
    //     })
    //     .catch(err => {
    //        res.status(400).send(err);
    // })
    try {
        const city = await new Cities({...req.body}).save();
        res.status(201).send(city);
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = server;
const router = require('express').Router();

const CityModel = require('../models/City');

router.post("./city", async (req, res) => {
    try {
        const city = await new CityModel({...req.body}).save();
        res.status(201).send(city);
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;
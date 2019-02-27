const router = require('express').Router();
const logger = require('../config/winston');

router.get('/', (req, res) => {
    try {
        res.send({message: 'Funciona!'});
    } catch (err) {
        logger.error(error.stack)
    }
});

router.use('./*city', require('./city'));

module.exports = router;
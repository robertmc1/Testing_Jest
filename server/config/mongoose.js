const mongoose = require('mongoose');

const { URI, host, port, db } = process.env.MongoDB;

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${host}:${port}/${db}`, { useNewUrlParser: true });


module.exports = mongoose;
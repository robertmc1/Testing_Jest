const mongoose = require ('mongoose');
const validator = require ('validator');

const CitySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    },
    address: {
        type: String,
        trim: true,
        required: true
    },
    telephone: {
        type: String,
        trim: true,
        validate: {
            isAsync: true,
            validator: (phone) => validator.isMobilePhone(phone),
            message: '{VALUE} is not a valid phone'
        }
    },
    users: [{
        id:String
    }]
});

const Cities =  mongoose.model('city', CitySchema);

module.exports = Cities;
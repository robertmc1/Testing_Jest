const {ObjectID} = require ('mongodb');
const Cities = require ('../../../models/City');

const data = [
    {
        _id: new ObjectID().toHexString(),
        name: 'Madrid',
        address: 'C/ Huertas 11',
        phone: '624683333',
        users: []
    },
    {
        _id: new ObjectID().toHexString(),
        name: 'Valencia',
        address: 'C/ Colon 1',
        phone: '644624222',
        users: []
    },
    {
        _id: new ObjectID().toHexString(),
        name: 'Barcelona',
        address: 'C/ Marina 511',
        phone: '634684111',
        users: []
    }
];

const populateCities = async () => {

    try{
        await Cities.deleteMany({});
        await Cities.insertMany(data);
    }catch (err) {
        console.error(new Error(err));
    }
};

module.exports = {
    populateCities,
    citiesData: data
};
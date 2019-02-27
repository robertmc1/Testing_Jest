const request = require('supertest');
const {ObjectID} = require ('mongodb');
const server = require('../../../app');
const Cities = require('../../../models/City');
const {citiesData, populateCities} = require ('./City.seed');

const baseURL = '/city';

beforeEach( populateCities);

describe('/city', () => {
    describe('POST /', () => {
        it('should return 201 body has right format', (done) => {
            const newCity = {
                ...citiesData[0],
                _id: new ObjectID().toHexString(),
                name: 'Zaragoza'
            };

           request(server)
               .post(baseURL)
               .set('Authorization', 'token')
               .send({
                   ...newCity
               })
               .expect(201)
               .expect(
                   res => {
                       expect(res.body).toMachObject(newCity);
                   })
               .end(async (err, res) => {
                   if(err)
                       return done(err);

                   const city = await Cities.findById(res.body._id);
                   expect({
                       ...city.toObject(),
                       _id: new ObjectID(city._id).toHexString()
                   }).toMachObject(newCity);

                   done();
               })
        });

        it('should return 400 without address', (done) => {
            const newCity = {
                _id: new ObjectID().toHexString(),
                name: 'Zaragoza'
            };

            request(server)
                .post(baseURL)
                .set('Authorization', 'token')
                .send({...newCity})
                .expect(400)
                .end(async (err, res) => {
                    if(err)
                        return done(err);

                    const city = await Cities.findById(newCity._id);
                    expect(city).toBe(null);

                    done();
                })
        });

        it('should return 400 without name', (done) => {
            const newCity = {
                _id: new ObjectID().toHexString(),
                address:'C/ Ppim Pam Pum'
            };

            request(server)
                .post(baseURL)
                .set('Authorization', 'token')
                .send({...newCity})
                .expect(400)
                .end(async (err, res) => {
                    if(err)
                        return done(err);

                    const city = await Cities.findById(newCity._id);
                    expect(city).toBe(null);

                    done();
                })
        });

        it('should return 400 without data', (done) => {
            request(server)
                .post(baseURL)
                .set('Authorization', 'token')
                .expect(400)
                .end(done)
        });

        it.skip('should return 400 without token', (done) => {
            request(server)
                .post(baseURL)
                .expect(401)
                .end(done)
        });

    });
});
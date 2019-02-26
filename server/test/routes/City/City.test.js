const request = require('supertest');
const server = require('../../../app');
const {citiesData, populateCities} = require ('./City.seed');

// populateCities();

describe('/city', () => {

    const baseURL = '/city';

    describe('POST /', () => {
        it('should return 403 without token', () => {

        });

        it('should return 401 without data', () => {

        });

        it('should return 201 w/data', (done) => {
           request(server)
               .post(baseURL)
               .set('Authorization', 'token')
               .send({
                   //... body que le enviamos
               })
               .expect(201)
               .expect(res => {
                   //... expect sobre el response.body (res.data en axios)
               })
               .end((err, res) => {
                   //... preguntamos a la base de datos si todo ha ido bien
                   done(err)
               })
        });
    });
});
const request = require('supertest');
const server = require('../app');

describe('GET / -> Comprobamos que el servidor fucniona', () => {
    test('deberia de enviar "Funciona"', (done) => {
        expect(1).toBe(1);

        request(server)
            .get('/')
            .expect(200) //comprobamos estatus de la peticion
            .expect(res => { //comprobamos la respuesta del servidor
                const {message} = res.body;
                expect(message).toBe('Funciona!')
            })
            .end((err, res) =>{
                //compruebo los estados del server o la base de datos
                done(err);
            });
    });
});

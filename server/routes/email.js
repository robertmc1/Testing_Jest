const router = require('express').Router();
const Email = require('../config/nodemailer');

router.get('/', (req, res) => {
   // res.send('Funciona el mail')
   //creamos un mensaje
   const message = {
       to:`robert.mc@hotmail.es`,
       subject:`Probando Email Clase progr.`,
       html:`Texto de pruebas`
   };

   Email.transporter.sendMail(message).
   then(info => {
       Email.transporter.close();

       res.send(info);
   }).catch(err=>{
       res.status(500).send(err);
   })
});

module.exports = router;
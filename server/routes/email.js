const router = require('express').Router();
const Email = require('../config/nodemailer');
const appRoot = require('app-root-path');

router.get('/', (req, res) => {
   // res.send('Funciona el mail')
   //creamos un mensaje
   const message = {
       to:`robert.mc@hotmail.es`,
       subject:`Probando Email Clase progr. Hola ${name}`,
       attachements: [
           {
               filname,
               path: `${appRoot}/server/uploadas${filname}`    //aqui podemos mandar pdf, jpg, etc...
           }
       ],
       html:
`
<head>
    <style> 
    p {
    background-color: red;
    }
    </style>
</head>

<div>
    <h1>Hola ${name}</h1>
    <p>Este es el cuerpo del correo</p>
</div>

`
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
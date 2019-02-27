const nodemailer = require('nodemailer');

const Email = {
    transporter: nodemailer.createTransport({
        service:'Gmail',
        auth: {
            user:'ghnodemailer@gmail.com',
            pass:'nodemailer',
        },
        tls:{rejectUnauthorized: false}
    },{
        //este es opcional
        from: 'ghnodemailer@gmail.com',
        headers:{}
    })
};

module.exports = Email;
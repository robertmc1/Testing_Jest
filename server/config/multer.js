const multer = require('multer');
const appRout = require('app-root-path');


const Multer = multer.diskStorage({
    destination:(req, file, calback) => {
        callback(null,`{${appRoot}/server/uploads/`);
    },
    filname:(req, file, calback) => {
        callback(null,file.originalname);
    }
});

const upload = multer({storage});
module.exports = upload;
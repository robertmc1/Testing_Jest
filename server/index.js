const server = require('./app'); //siempre en la linea 1
const PORT = process.env.PORT;

server.listen(PORT, () => {
    console.log(`Server listening http://localhost:${PORT}/`);
});


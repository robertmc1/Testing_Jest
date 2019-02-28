const   path = require('path'),
        http = require('http'),
        express =  require('express'),
        socketIO =  require('socket.io');

const publicPath = path.join(__dirname, './public'),
      PORT = 8080,
      app = express(),
      server = http.createServer(app),
      io = socketIO(server);


app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('Usuario conectado');

    socket.on('join', (data, callback) => {
        console.log(data);

        if(typeof data.room !== 'string'){
            callback('La sala debe de ser una string')
        }else{
            socket.join(data.root);

            io.to(data.room).emit('newMessageFromServer', {
                text: `Se ha unido el usuario ${socket.id} usuario a la sala`  +data.root,
                from: 'Admin',
                createdAt: Date.now()
            });

            callback();
        }
    });

    socket.on('mensajePrivado', (data) => {
        io.to(data.to).emit('', data.message)
    });

    socket.emit('newMessageFromServer', {
        text: 'Bienvenido al servidor',
        from: 'Admin',
        createdAt: Date.now()
    },function (data) {
        console.log(data)
    });

    socket.broadcast.emit('newMessageFromServere' , {
        text: 'Un nuevo usuario se ha conectado',
        from: 'Admin',
        createdAt: Date.now()
    });

    socket.on('newMessageFromClient', (data) => {
        io.emit('newMessageFromServere', {
            ...data,
            createdAt: Date.now()
        });
    });

    socket.on('disconnect',() => {
        console.log('Usuario desconectado')
    })
});

server.listen(PORT, () => {
    console.log(`server listening at http://127.0.0.1:${PORT}`)
});


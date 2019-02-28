
var socket = io();

socket.on('connect', function (){
    console.log('Te has conectado (Referiendose al cliente)')

    var room = 'bootcamp';
    socket.emit('join', {
        room
    }, function (err){
        if(err)
            return console.log(new Error(err));
        console.log('te has unido a la sala')
    })
});

socket.on('disconnect', function () {
    console.log('Te has deconectado del servidor (Referiendose al cliente)')
});

socket.on('newMessageFromServer', function (data, cb) {
    console.log({
        ...data,
        createdAt: new Date(data.now).toString()
    });
    if(cb){
        cb('VERIFICADO')
    }
});
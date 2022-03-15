const socketio = require('socket.io');
function socketIO(server) {
    const sio = socketio(server);
    sio.on('connection', function(socket) {
        console.log("接続しました");
        socket.on('chat message', (msg) => {
            console.log('message: ' + msg);
            sio.emit('chat message', msg);
        });
        socket.on("disconnect", function() {
            console.log('user disconnected');
        });
    });
};
module.exports = socketIO;
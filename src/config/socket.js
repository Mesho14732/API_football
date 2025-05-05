const socketio = require('socket.io');

module.exports = (server) => {
  const io = socketio(server, {
    cors: {
      origin: '*'
    }
  });

  io.on('connection', (socket) => {
    console.log('New WebSocket connection:', socket.id);
    require('../sockets/predictionSocket')(socket);
  });

  return io;
};

const predictionSocket = require('./predictionSocket');

module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('⚽ New socket connection:', socket.id);


    predictionSocket(socket);

    socket.on('disconnect', () => {
      console.log('🚪 Socket disconnected:', socket.id);
    });
  });
};

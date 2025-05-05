module.exports = (socket) => {
    
    socket.on('submitPrediction', async (data) => {
      try {
        
        socket.emit('predictionConfirmed', {
          message: 'Prediction received!',
          data,
        });
  
        socket.broadcast.emit('predictionUpdate', data);
      } catch (err) {
        socket.emit('error', { message: 'Prediction error occurred' });
      }
    });
  
  };
  
const errorMiddleware = (err, req, res, next) => {
    console.error('Error:', err.message || err);
  
    const status = res.statusCode !== 200 ? res.statusCode : 500;
    res.status(status).json({
      message: err.message || 'Server Error',
      stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack,
    });
  };
  
  module.exports = errorMiddleware;
  
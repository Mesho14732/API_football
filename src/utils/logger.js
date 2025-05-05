const log = (message, data = null) => {
    if (data) {
      console.log(`[LOG]: ${message}`, data);
    } else {
      console.log(`[LOG]: ${message}`);
    }
  };
  
  const error = (message, err = null) => {
    if (err) {
      console.error(`[ERROR]: ${message}`, err);
    } else {
      console.error(`[ERROR]: ${message}`);
    }
  };
  
  const info = (message) => {
    console.info(`[INFO]: ${message}`);
  };
  
  module.exports = {
    log,
    error,
    info,
  };
  
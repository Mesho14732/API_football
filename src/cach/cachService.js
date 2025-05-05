const redisClient = require('../config/redis');

const DEFAULT_EXPIRATION = 3600; 

/**
 
 * @param {string} key 
 * @param {Object} 
 * @param {number} [expirationInSec] 
 */
const setCache = async (key, value, expirationInSec = DEFAULT_EXPIRATION) => {
  try {
    await redisClient.setEx(key, expirationInSec, JSON.stringify(value));
  } catch (err) {
    console.error('Redis setCache error:', err);
  }
};

/**

 * @param {string} key 
 * @returns {Promise<Object|null>}
 */
const getCache = async (key) => {
  try {
    const data = await redisClient.get(key);
    return data ? JSON.parse(data) : null;
  } catch (err) {
    console.error('Redis getCache error:', err);
    return null;
  }
};

/**

 * @param {string} key 
 */
const deleteCache = async (key) => {
  try {
    await redisClient.del(key);
  } catch (err) {
    console.error('Redis deleteCache error:', err);
  }
};

module.exports = {
  setCache,
  getCache,
  deleteCache,
};

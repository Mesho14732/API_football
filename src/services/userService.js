const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.createUser = async ({ username, email, password }) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return User.create({ username, email, password: hashedPassword });
};

exports.findUserByEmail = async (email) => {
  return User.findOne({ email });
};

exports.comparePassword = async (inputPassword, storedHash) => {
  return bcrypt.compare(inputPassword, storedHash);
};

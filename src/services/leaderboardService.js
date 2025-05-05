const Leaderboard = require('../models/leaderboard');

exports.getTopLeaderboard = async (limit = 10) => {
  return Leaderboard.find().sort({ points: -1 }).limit(limit).populate('user');
};

exports.addPoints = async (userId, points) => {
  return Leaderboard.findOneAndUpdate(
    { user: userId },
    { $inc: { points } },
    { upsert: true, new: true }
  );
};

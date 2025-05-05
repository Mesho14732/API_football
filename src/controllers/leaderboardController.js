const Leaderboard = require('../models/leaderboard');
const User = require('../models/User');

exports.getLeaderboard = async (req, res, next) => {
  try {
    const leaderboard = await Leaderboard.find().sort({ points: -1 }).limit(10).populate('user', 'username');
    res.json(leaderboard);
  } catch (err) {
    next(err);
  }
};

exports.getUserRank = async (req, res, next) => {
  try {
    const userLeaderboard = await Leaderboard.findOne({ user: req.user.id });
    if (!userLeaderboard) return res.status(404).json({ message: 'User not ranked yet' });

    const betterScores = await Leaderboard.countDocuments({ points: { $gt: userLeaderboard.points } });
    res.json({ rank: betterScores + 1, points: userLeaderboard.points });
  } catch (err) {
    next(err);
  }
};

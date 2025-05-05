const Match = require('../models/match');

exports.getUpcomingMatches = async (req, res, next) => {
  try {
    const matches = await Match.find({ date: { $gte: new Date() } }).sort({ date: 1 });
    res.json(matches);
  } catch (err) {
    next(err);
  }
};

exports.getHistoricalMatches = async (req, res, next) => {
  try {
    const matches = await Match.find({ date: { $lt: new Date() } }).sort({ date: -1 });
    res.json(matches);
  } catch (err) {
    next(err);
  }
};

exports.createMatch = async (req, res, next) => {
  try {
    const match = await Match.create(req.body);
    res.status(201).json(match);
  } catch (err) {
    next(err);
  }
};

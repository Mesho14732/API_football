const Prediction = require('../models/prediction');

exports.submitPrediction = async (req, res, next) => {
  try {
    const { matchId, prediction } = req.body;
    const existing = await Prediction.findOne({ user: req.user.id, match: matchId });
    if (existing) {
      return res.status(400).json({ message: 'Prediction already submitted for this match.' });
    }

    const newPrediction = await Prediction.create({
      user: req.user.id,
      match: matchId,
      prediction,
    });

    res.status(201).json(newPrediction);
  } catch (err) {
    next(err);
  }
};

exports.getUserPredictions = async (req, res, next) => {
  try {
    const predictions = await Prediction.find({ user: req.user.id }).populate('match');
    res.json(predictions);
  } catch (err) {
    next(err);
  }
};

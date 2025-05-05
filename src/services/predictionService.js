const Prediction = require('../models/prediction');

exports.createPrediction = async ({ userId, matchId, prediction }) => {
  return Prediction.create({
    user: userId,
    match: matchId,
    prediction,
  });
};

exports.getPredictionsByUser = async (userId) => {
  return Prediction.find({ user: userId }).populate('match');
};

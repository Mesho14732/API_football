const Prediction = require('../models/prediction');
const Match = require('../models/match');
const Leaderboard = require('../models/leaderboard');

exports.processMatchResults = async (matchId, actualResult) => {
  const predictions = await Prediction.find({ match: matchId });

  for (let pred of predictions) {
    if (pred.prediction === actualResult) {
      await Leaderboard.findOneAndUpdate(
        { user: pred.user },
        { $inc: { points: 3 } },
        { upsert: true, new: true }
      );
    }
  }

  await Match.findByIdAndUpdate(matchId, { result: actualResult });
};

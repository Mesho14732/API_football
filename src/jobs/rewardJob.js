const cron = require('node-cron');
const Prediction = require('../models/prediction');
const Match = require('../models/match');
const User = require('../models/User');
const Leaderboard = require('../models/leaderboard');

// Reward constants
const CORRECT_PREDICTION_POINTS = 3;

// Scheduled job to run every day at 1:00 AM
cron.schedule('0 1 * * *', async () => {
  console.log('🎯 Running reward job...');

  try {
    // Get all finished matches with unprocessed predictions
    const matches = await Match.find({
      date: { $lt: new Date() },
      result: { $ne: null }
    });

    for (const match of matches) {
      // Get all predictions for this match
      const predictions = await Prediction.find({ match: match._id, rewarded: { $ne: true } });

      for (const prediction of predictions) {
        // Check if prediction is correct
        const isCorrect = prediction.prediction === match.result;

        if (isCorrect) {
          // Reward user
          const user = await User.findById(prediction.user);
          user.points = (user.points || 0) + CORRECT_PREDICTION_POINTS;
          await user.save();

          // Update leaderboard
          const entry = await Leaderboard.findOneAndUpdate(
            { user: user._id },
            { $inc: { points: CORRECT_PREDICTION_POINTS } },
            { upsert: true, new: true }
          );
        }

        // Mark prediction as rewarded
        prediction.rewarded = true;
        await prediction.save();
      }
    }

    console.log('✅ Reward job completed');
  } catch (error) {
    console.error('❌ Error in reward job:', error);
  }
});

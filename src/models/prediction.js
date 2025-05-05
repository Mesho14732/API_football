const mongoose = require('mongoose');

const predictionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    match: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Match',
      required: true,
    },
    prediction: {
      type: String, 
      required: true,
    },
    isCorrect: {
      type: Boolean,
      default: null,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Prediction', predictionSchema);

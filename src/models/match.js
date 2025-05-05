const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema(
  {
    homeTeam: {
      type: String,
      required: true,
    },
    awayTeam: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    result: {
      type: String, 
      default: null,
    },
    league: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'League',
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Match', matchSchema);

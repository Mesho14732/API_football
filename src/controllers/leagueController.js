const League = require('../models/league');

exports.createLeague = async (req, res, next) => {
  try {
    const { name } = req.body;
    const league = await League.create({ name, creator: req.user.id, members: [req.user.id] });
    res.status(201).json(league);
  } catch (err) {
    next(err);
  }
};

exports.joinLeague = async (req, res, next) => {
  try {
    const league = await League.findById(req.params.leagueId);
    if (!league) return res.status(404).json({ message: 'League not found' });

    if (!league.members.includes(req.user.id)) {
      league.members.push(req.user.id);
      await league.save();
    }

    res.json({ message: 'Joined league successfully', league });
  } catch (err) {
    next(err);
  }
};

exports.getUserLeagues = async (req, res, next) => {
  try {
    const leagues = await League.find({ members: req.user.id });
    res.json(leagues);
  } catch (err) {
    next(err);
  }
};

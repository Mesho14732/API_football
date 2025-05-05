const express = require('express');
const { getUpcomingMatches, getHistoricalMatches } = require('../controllers/matchController');
const router = express.Router();

router.get('/upcoming', getUpcomingMatches);
router.get('/historical', getHistoricalMatches);

module.exports = router;

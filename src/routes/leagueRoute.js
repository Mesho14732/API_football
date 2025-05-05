const express = require('express');
const { createLeague, getLeagues } = require('../controllers/leagueController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, createLeague);
router.get('/', getLeagues);

module.exports = router;

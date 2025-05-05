const express = require('express');
const { submitPrediction, getUserPredictions } = require('../controllers/predictionController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, submitPrediction);
router.get('/', authMiddleware, getUserPredictions);

module.exports = router;

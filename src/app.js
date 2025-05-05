const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const errorMiddleware = require('./middlewares/errorMiddleware');

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/users', require('./routes/userRoute'));
app.use('/api/matches', require('./routes/matchRoute'));
app.use('/api/predictions', require('./routes/predictionRoute'));
app.use('/api/leagues', require('./routes/leagueRoute'));
app.use('/api/leaderboards', require('./routes/leaderboardRoute'));

// Error Middleware
app.use(errorMiddleware);

module.exports = app;

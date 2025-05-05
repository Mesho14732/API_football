// Format ISO date to readable format
const formatDate = (date) => {
    return new Date(date).toLocaleString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };
  
  // Standard API response formatter
  const formatResponse = (success, data, message = '') => {
    return {
      success,
      message,
      data,
    };
  };
  
  // Format leaderboard entry
  const formatLeaderboardEntry = (user, points) => {
    return {
      user: {
        id: user._id,
        username: user.username,
      },
      points,
    };
  };
  
  module.exports = {
    formatDate,
    formatResponse,
    formatLeaderboardEntry,
  };
  
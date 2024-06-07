const Tweet = require("../models/Tweet");

async function postTweet(userId, text) {
  const tweet = new Tweet({ userId, text });
  await tweet.save();
  return tweet;
}

async function getUserTimeline(userId, cursor, limit = 10) {
  const query = { userId };
  if (cursor) {
    query._id = { $lt: cursor };
  }

  return await Tweet.find(query)
    .sort({ _id: -1 })
    .limit(limit)
    .populate("userId", "username");
}

module.exports = {
  postTweet,
  getUserTimeline,
};

const { postTweet, getUserTimeline } = require("../services/tweetService");

async function createTweet(req, res) {
  try {
    const tweet = await postTweet(req.user.userId, req.body.text);
    res.status(201).send(tweet);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
}

async function getTimeline(req, res) {
  try {
    const cursor = req.query.cursor;
    const limit = parseInt(req.query.limit, 10) || 10;
    const timeline = await getUserTimeline(req.params.userId, cursor, limit);
    res.send(timeline);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

module.exports = {
  createTweet,
  getTimeline,
};

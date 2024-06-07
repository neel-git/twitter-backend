const express = require("express");
const { createTweet, getTimeline } = require("../controllers/tweetController");
const { verifyToken } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", verifyToken, createTweet);
router.get("/:userId/timeline", getTimeline);

module.exports = router;

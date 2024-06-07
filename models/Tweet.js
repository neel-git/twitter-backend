const mongoose = require("mongoose");

const tweetSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  creaedAt: {
    type: Date,
    default: Date.now,
  },
});

tweetSchema.index({ createdAt: -1 }); //Indexing for efficient search result

const Tweet = mongoose.model("Tweet", tweetSchema);

module.exports = Tweet;

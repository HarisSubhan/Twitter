const AsyncHandler = require("express-async-handler");
const tweet = require("../model/tweetModel");

const uploadTweet = AsyncHandler(async (req, res) => {
  // get the value from the frontend
  const { caption, content } = req.body;
  try {
    const newTweet = await tweet.create({
      user: req.user._id,
      caption,
      content,
    });
    console.log(newTweet);
    res.send(newTweet);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
});

module.exports = {
  uploadTweet,
};

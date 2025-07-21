const User = require("../models/User");
const Video = require("../models/Video");

exports.getFeed = async (req, res) => {
  const { userId } = req.query;

  try {
    const user = await User.findById(userId).populate("following");
    const followingIds = user.following.map((u) => u._id);

    const videos = await Video.find({ user: { $in: followingIds } })
      .populate("user")
      .sort({ createdAt: -1 });

    res.json(videos);
  } catch (error) {
    res.status(500).json({ error });
  }
};

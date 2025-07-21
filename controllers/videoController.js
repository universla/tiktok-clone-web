const Video = require("../models/Video");
const User = require("../models/User");

exports.uploadVideo = async (req, res) => {
  const { userId } = req.body;
  const videoUrl = `/uploads/${req.file.filename}`;

  try {
    const newVideo = new Video({ url: videoUrl, user: userId });
    await newVideo.save();

    await User.findByIdAndUpdate(userId, {
      $push: { videos: newVideo._id },
    });

    res.json(newVideo);
  } catch (error) {
    res.status(500).json({ error });
  }
};

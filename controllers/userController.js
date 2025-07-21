
exports.followUser = async (req, res) => {
  const { followerId, followingId } = req.body;

  try {
    await User.findByIdAndUpdate(followerId, {
      $addToSet: { following: followingId },
    });

    await User.findByIdAndUpdate(followingId, {
      $addToSet: { followers: followerId },
    });

    res.json({ msg: "Follow actualizado" });
  } catch (error) {
    res.status(500).json({ error });
  }
};

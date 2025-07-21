const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/feed", userController.getFeed);

module.exports = router;

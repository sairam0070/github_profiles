const express = require("express");

const router = express.Router();

const {
  analyzeProfile,
  getProfiles,
  getProfile
} = require("../controllers/githubcontrollers");

router.get(
  "/github/:username",
  analyzeProfile
);

router.get(
  "/profiles",
  getProfiles
);

router.get(
  "/profiles/:username",
  getProfile
);

module.exports = router;
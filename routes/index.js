const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const signUp = require("./customSignUp/userSignUp");

// API Routes
router.use("/api", apiRoutes);

// Auth0 Route
router.use("/auth", signUp);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;

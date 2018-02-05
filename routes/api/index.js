const router = require("express").Router();
const userRoutes = require("./users");
const propertyRoutes = require("./properties");

// User routes
router.use("/api/users", userRoutes);
// Property routes
router.use("/api/properties", propertyRoutes);

module.exports = router;

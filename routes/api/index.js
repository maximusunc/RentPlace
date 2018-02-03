const router = require("express").Router();
const userRoutes = require("./users");
const propertyRoutes = require("./properties");

// User routes
router.use("/users", userRoutes);
// Property routes
router.use("/properties", propertyRoutes);

module.exports = router;

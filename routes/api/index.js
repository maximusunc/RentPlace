const router = require("express").Router();
const userRoutes = require("./users");
const propertyRoutes = require("./properties");
const serviceRoutes = require("./servicereqs");

// User routes
router.use("/users", userRoutes);

// Property routes
router.use("/properties", propertyRoutes);

// Service Reqs routes
router.use("/servicereqs", serviceRoutes);

module.exports = router;

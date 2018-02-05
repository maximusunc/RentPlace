const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const propertiesController = require("../../controllers/propertiesController");

// Matches with "/api/users"
router.route("/api/users")
  .get(usersController.findAll)
  .post(usersController.create);

// Matches with "/api/users/:id"
router.route("/api/users/:id")
  .get(propertiesController.findById)
  .put(propertiesController.update)
  .delete(propertiesController.remove);

module.exports = router;

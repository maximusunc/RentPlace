const router = require("express").Router();
const serviceController = require("../../controllers/serviceController");

// Matches with "/api/servicereqs"
router.route("/")
  .get(serviceController.findAll)
  .post(serviceController.create);

// Matches with "/api/servicereqs/:id"
router.route("/:id")
  .get(serviceController.findById)
  .put(serviceController.update)
  .delete(serviceController.remove);

module.exports = router;
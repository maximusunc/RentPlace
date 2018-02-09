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

  // Matches with "/api/servicereqs/findbylandlord/:id"
router.route("/findbylandlord/:id")
  .get(serviceController.findByLandlord);

// Matches with "/api/servicereqs/findbytenant/:id"
router.route("/findbylandlord/:id")
  .get(serviceController.findByTenant);

// Matches with "/api/servicereqs/findbypropid/:id"
router.route("/findbylandlord/:id")
  .get(serviceController.findByPropId)

module.exports = router;
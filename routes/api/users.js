const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router.route("/")
  .get(usersController.findAll)
  .post(usersController.create);

  // Matches with "/api/users/allTenants"
router.route("/findunassignedtenants")
  .get(usersController.findUnassignedTenants)

// Matches with "/api/users/:id or email"
router.route("/:email")
  .get(usersController.findByEmail)
  .put(usersController.updateUser);

router.route("/update/:id")
  .get(usersController.findById);

module.exports = router;

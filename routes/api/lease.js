const router = require("express").Router();
const leaseController = require("../../controllers/leaseController");


// Matches with "/api/users"
router.route("/lease")
    .post(leaseController.create);

// Matches with "/api/users/:id or email"
// router.route("/:id")
//   .get(leaseController.findById);

module.exports = router;
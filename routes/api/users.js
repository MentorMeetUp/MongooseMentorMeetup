const router = require("express").Router();
const usersController = require("../../controllers/usersController");


// Matches with "/api/users/:skill"
router
  .route("/:skill")
  .get(usersController.findAll)

// matches with "api/users/signIn/:email"
router
	.route("/signIn/:email")
	.get(usersController.findByEmail)

//matches "api/users/posts"
router
  .route("/posts/")
  .post(usersController.createForm)


module.exports = router;
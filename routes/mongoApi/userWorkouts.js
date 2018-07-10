const router = require("express").Router();
const userWorkoutsControllers = require("../../controllers/userWorkoutsControllers");

router.route("/")
  .get(userWorkoutsControllers.findAll)
  .post(userWorkoutsControllers.create);

//   router.route("/workout")
//   .post(userWorkoutsControllers.findById);

router
  .route("/:id")
  .get(userWorkoutsControllers.findById)
  .put(userWorkoutsControllers.update)
  .delete(userWorkoutsControllers.remove);

module.exports = router;

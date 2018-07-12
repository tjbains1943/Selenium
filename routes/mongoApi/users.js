const router = require("express").Router();
const userControllers = require("../../controllers/userControllers");

router.route("/").post(userControllers.findLogin);

router.route("/newUser").post(userControllers.create);

router.route("/auth").post(userControllers.findAuth);

router.route("/workouts").get(userControllers.findById)
router
  .route("/:id")
  .get(userControllers.findById)


  .put(userControllers.update)
  .delete(userControllers.remove);

module.exports = router;

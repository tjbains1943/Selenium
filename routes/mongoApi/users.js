const router = require("express").Router();
const userControllers = require("../../controllers/userControllers");

router
  .route("/")
  .post(userControllers.findLogin)
  .get(userControllers.create);

router
  .route("/:id")
  .get(userControllers.findById)
  .put(userControllers.update)
  .delete(userControllers.remove);

module.exports = router;

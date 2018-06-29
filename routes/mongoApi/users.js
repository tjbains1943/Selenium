const router = require("express").Router();
const userControllers = require("../../controllers/userControllers");

router.route("/")
  .get(userControllers.findLogin)
  .post(userControllers.create);

router
  .route("/:id")
  .get(userControllers.findById)
  .put(userControllers.update)
  .delete(userControllers.remove);

  

module.exports = router;
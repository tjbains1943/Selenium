const router = require("express").Router();
const dailyTrainersControllers = require("../../controllers/dailyTrainersControllers");

router.route("/")
  .get(dailyTrainersControllers.findAll)
  .post(dailyTrainersControllers.create);

router
  .route("/:id")
  .get(dailyTrainersControllers.findById)
  .put(dailyTrainersControllers.update)
  .delete(dailyTrainersControllers.remove);

module.exports = router;

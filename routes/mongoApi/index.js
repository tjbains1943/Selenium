const router = require("express").Router();
const userRoutes = require("./users");
const dTRoutes = require("./dailyTrainers")
// Article routes
router.use("/users", userRoutes);
router.use("/dailyTrainer", dTRoutes);

module.exports = router;
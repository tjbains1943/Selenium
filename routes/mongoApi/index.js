const router = require("express").Router();
const userRoutes = require("./users");
const dTRoutes = require("./dailyTrainer");
const userWorkoutRoutes = require("./userWorkouts")

router.use("/users", userRoutes);
router.use("/dailyTrainer", dTRoutes);
router.use("/userWorkouts", userWorkoutRoutes);

module.exports = router;
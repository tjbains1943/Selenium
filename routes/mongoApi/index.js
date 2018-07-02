const router = require("express").Router();
const userRoutes = require("./users");
const dTRoutes = require("./dailyTrainers")
// Article routes
router.use("/users", userRoutes);
router.use("/users", dTRoutes);

module.exports = router;
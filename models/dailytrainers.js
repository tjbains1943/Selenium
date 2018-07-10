const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DailyTrainer = new Schema({
    trainerType: {type: String, required: false},
    weekStart: { type: String, required: false },
    day: {type: String},
    exercise: { type: [{}], required: false},
});

const DailyTrainers = mongoose.model("DailyTrainers", DailyTrainer);

module.exports = DailyTrainers;

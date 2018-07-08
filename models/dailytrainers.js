const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dailyTrainers = new Schema({
    trainerType: {type: String, required: false},
    weekStart: { type: String, required: false },
    day: {type: String},
    exercise: { type: [{}], required: false},
});

const DailyTrainers = mongoose.model("DailyTrainer", dailyTrainers);

module.exports = {DailyTrainers};

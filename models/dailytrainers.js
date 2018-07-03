const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dailyTrainers = new Schema({
    date: { type: Date, required: false },
    monday: { type: [{}], required: false},
    tuesday: { type: [{}], required: false},
    wednesday: { type: [{}], required: false},
    thursday: { type: [{}], required: false},
    friday: { type: [{}], required: false},
    saturday: { type: [{}], required: false},
    sunday: { type: [{}], required: false},
});

const DailyTrainers = mongoose.model("DailyTrainer", dailyTrainers);

module.exports = {DailyTrainers};

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userWorkouts = new Schema({
    trainerType: {type: String, required: false},
    date: {type: String},
    day: {type: String, required: false},
    exercise: { type: [{}], required: false},
    
});

const UserWorkouts = mongoose.model("UserWorkouts", userWorkouts);

module.exports = UserWorkouts;

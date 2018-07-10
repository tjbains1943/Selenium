const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const users = new Schema({
    firstName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    height: { type: String, required: false },
    weight: { type: String, required: false },
    date: { type: Date, required: false },
    Free: { type: Boolean, default: false },
    dailyTrainer: { type: Boolean, default: false },
    VIP: { type: Boolean, default: false },
    workOuts: {
        type: Schema.Types.ObjectId,
        ref: "UserWorkouts"
      }
    
});

const Users = mongoose.model("Users", users);

module.exports = Users;

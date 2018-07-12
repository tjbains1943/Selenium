const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const users = new Schema({
    firstName: { type: String, required: false },
    email: { type: String, required: false },
    password: { type: String, required: false },
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

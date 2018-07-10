import axios from "axios";

export default {
  // Gets all users
  getWorkouts: function(data) {
    return axios.get("/api/userWorkouts", data);
  },
  // Gets the book with the given id
  getWorkout: function(user) {
    return axios.post("/api/userWorkouts/getTrainer", user);
  },
  // Deletes the book with the given id
  deleteWorkout: function(id) {
    return axios.delete("/api/userWorkouts/" + id);
  },
  // Saves a book to the database
  
  saveWorkout: function(userData) {
    return axios.post("/api/userWorkouts/", userData);
  },
  getAuth: function(cat) {
    var authOptions = {
      headers: {
        Authorization: cat,
      },
    };
    return axios.post("/api/userWorkouts/auth", authOptions);
  },
};

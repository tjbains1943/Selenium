import axios from "axios";

export default {
  // Gets all users
  getTables: function() {
    return axios.get("/api/dailyTrainer");
  },
  // Gets the book with the given id
  getTable: function(user) {
    return axios.post("/api/dailyTrainer/", user);
  },
  // Deletes the book with the given id
  deleteTable: function(id) {
    return axios.delete("/api/dailyTrainer/" + id);
  },
  // Saves a book to the database
  
  saveTable: function(userData) {
    return axios.post("/api/dailyTrainer/newUser", userData);
  },
  getAuth: function(cat) {
    var authOptions = {
      headers: {
        Authorization: cat,
      },
    };
    return axios.post("/api/dailyTrainer/auth", authOptions);
  },
};

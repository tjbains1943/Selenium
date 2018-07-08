import axios from "axios";

export default {
  // Gets all users
  getTables: function(data) {
    return axios.get("/api/dailyTrainer", data);
  },
  // Gets the book with the given id
  getTable: function(user) {
    return axios.post("/api/dailyTrainer/getTrainer", user);
  },
  // Deletes the book with the given id
  deleteTable: function(id) {
    return axios.delete("/api/dailyTrainer/" + id);
  },
  // Saves a book to the database
  
  saveTable: function(userData) {
    return axios.post("/api/dailyTrainer/", userData);
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

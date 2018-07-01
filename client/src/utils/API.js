import axios from "axios";

export default {
  // Gets all users
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets the book with the given id
  getUser: function(user) {
    console.log(456);
    return axios.get("/api/users/", user);
  },
  // Deletes the book with the given id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a book to the database
  saveUser: function(userData) {
    return axios.post("/api/users/newUser", userData);
  }
};

import axios from "axios";

export default {
  // Gets all users
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets the book with the given id
  getUser: function(user) {
    return axios.post("/api/users/", user);
  },
  // Deletes the book with the given id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a book to the database
  saveUser: function(userData) {
    return axios.post("/api/users/newUser", userData);
  },
  getAuth: function(cat) {
    var authOptions = {
      method: "GET",
      url: "api/users/auth",
      headers: {
        Authorization: cat,
      },
    };
    return axios.get(authOptions);
  },
};

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const logger = require('morgan');
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/simplyFIT");

// configure body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// set up logger
app.use(logger('dev'))
// serve up static assets
if (process.env.NODE_ENV === "production") {
app.use(express.static("client/build"));
}
// set up routes
app.use(routes);

// Set up promises with mongoose


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

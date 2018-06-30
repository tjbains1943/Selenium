const db = require("../models/users");
var jwt = require('jsonwebtoken');

//Mongoose query abstractions
module.exports = {
  findLogin: function(req, res) {
    console.log(req.body);
    db.Users
      .findOne(req.body)
      .sort({ date: -1 })
      .then(dbModel => {
        console.log(dbModel);
        res.json(dbModel)}
      )
      .catch(err => res.status(422).json(err));

  },
  findById: function(req, res) {
    db.Users
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Users
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
      var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
      console.log(token);

  },
  update: function(req, res) {
    db.Users
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Users
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
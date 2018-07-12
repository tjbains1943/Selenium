const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.UserWorkouts
      .find()
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.UserWorkouts
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.UserWorkouts
      .create(req.body)
      .then(function(dbModel) {
        
        return db.Users.findOneAndUpdate({}, { $push: { workOuts: dbModel._id } }, { new: true })
      })
      .then(function(dbUsers) {
       console.log(dbUsers);
        res.json(dbUsers);
      })
      .catch(function(err) {
        res.json(err);
      });
  
  },
  update: function(req, res) {
    db.UserWorkouts
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Book
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

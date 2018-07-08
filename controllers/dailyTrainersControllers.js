const db = require("../models/dailytrainers");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    console.log(69);
    db.DailyTrainers
      .find(req.body)
      // .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    console.log(987);
    db.DailyTrainers
      .find(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.DailyTrainers
      .create(req.body)
      .then(dbModel => {
        console.log(dbModel);
        res.json(dbModel)})
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.DailyTrainers
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.DailyTrainers
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};


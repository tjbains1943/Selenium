const db = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

//Mongoose query abstractions
module.exports = {
  findLogin: function(req, res) {
    // console.log("hello world");
    // console.log(req.body);
    db.Users.findOne({ email: req.body.email })
      .then(dbModel => {
        if (dbModel) {
          // console.log(dbModel);
          if (bcrypt.compare(req.body.password, dbModel.password)) {
            var token = jwt.sign({ data: dbModel }, "secret");
            res.json({ token, name: "hellow" });
          }
        } 
        else {
          res.json({ userStatus: "User Not Found" });
        }
      })
      .catch(err => res.status(422).json(err));
  },
  findAuth: function(req, res) {
    if(!req.body.headers.Authorization) {
      return;
    }
    var decoded = jwt.verify(req.body.headers.Authorization, "secret");
    
    // console.log(decoded.data.firstName);
    db.Users.findOne({ firstName: decoded.data.firstName })
      .then(dbModel => {
        if (dbModel) {
          res.json(dbModel);
        } else {
          res.json({ response: "no bueno" });
        }
      })
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    console.log(req);
    db.Users.findOne({email: req.body.email})
    .populate("workOuts")
    .then(function(dbUser) {
      console.log(dbUser);
      res.json(dbUser);
    })
    .catch(function(err) {
      res.json(err);
    });
  },

  create: async function(req, res) {
    const hash = await bcrypt.hash(req.body.password, 10);
    req.body.password = hash;
    // console.log(req.body);
    db.Users.create(req.body)
      .then(dbModel => {
        console.log(dbModel);
        var token = jwt.sign({ data: dbModel }, "secret");
        res.json({ token, dbModel });
        // console.log(token);
      })
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Users.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Users.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};

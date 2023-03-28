const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = (req, res, next) => {
  bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
    if (err) {
      res.json({
        error: err,
      });
    } else {
      let user = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPass,
        role: req.body.role,
      });
      user
        .save()
        .then((user) => {
          res.json({
            message: "User added successfully",
          });
        })
        .catch((error) => {
          res.json({
            message: "An error occured",
          });
        });
    }
  });
};

const login = (req, res, next) => {
  var username = req.body.username;
  var password = req.body.password;

  User.findOne({ $or: [{ username: username }, { email: username }] }).then(
    (user) => {
      if (user) {
        bcrypt.compare(password, user.password, function (err, result) {
          if (err) {
            res.json({
              error: err,
            });
          }
          if (result) {
            let token = jwt.sign(
              { username: user.username },
              "secretValue",
              { expiresIn: "1h" }
            );
            res.json({
              message: "Login succesful",
              token,
            });
          } else {
            res.json({
              message: "Password does not match",
            });
          }
        });
      } else {
        res.json({
          message: "No user found",
        });
      }
    }
  );
};

module.exports = { register, login };

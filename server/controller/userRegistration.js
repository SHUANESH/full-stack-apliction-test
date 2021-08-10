const bcrypt = require("bcryptjs");
const User = require("../models/userModel");

const registration = async (req, res) => {
  await User.findOne({ email: req.body.user.email }, (err, user) => {
    if (user) {
      return res.status(400).json({ massage: "This email already exists" });
    }

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(req.body.user.password, salt, (err, hash) => {
        if (err) throw err;
        req.body.user.password = hash;
        User.insertMany(req.body.user, (err) => {
          if (err) {
            return res.status(400).json({ success: false, error: err });
          }
          res
            .status(201)
            .json({
              success: true,
              massage: `registration of ${req.body.user}`,
            });
        });
      });
    });
  });
};

module.exports = registration;

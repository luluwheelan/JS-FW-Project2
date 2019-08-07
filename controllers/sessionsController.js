const Tester = require("../models/tester");

const jwt = require("jsonwebtoken");

exports.authenticate = (req, res) => {
  console.log(req.body);
  Tester.findOne({
    email: req.body.email
  })
    .then(tester => {
      tester.authenticate(req.body.password, (err, isMatch) => {
        if (err) throw new Error(err);

        if (isMatch) {
          req.session.userId = tester.id;

          const token = jwt.sign({ payload: req.body.email }, "bobthebuilder", {
            expiresIn: "1h"
          });
          res
            .cookie("token", token, { httpOnly: true })
            .status(201)
            .send({ success: "You were authenticated." });
        } else {
          res.status(401).json(err);
        }
      });
    })
    .catch(err => {
      res.status(404).json(err);
    });
};

exports.logout = (req, res) => {
  if (!req.isAuthenticated)
    Response.status(401).send({ error: "Could not authenticated" });
  req.session.userId = null;
  res
    .clearCookie("token")
    .status(200)
    .send({ success: "You are now logged out" });
};

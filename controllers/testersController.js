const Tester = require("../models/tester");

exports.create = (req, res) => {
  Tester.create(req.body.tester)
    .then(() =>
      res.status(201).send({ success: "Tester was created successfully" })
    )
    .catch(err => res.status(400).send(err));
};

const Beer = require("../models/beer");
//const tester = require('../models/tester');

exports.index = (req, res) => {
  Beer.find()
    .populate("tester")
    .then(beers => res.json(beers))
    .catch(err => res.status(404).send(err));
};
//Show only the beer records associated with the tester
exports.myBeer = (req, res) => {
  req.isAuthenticated();
  Beer.find({
    tester: req.session.userId
  })
    .populate("tester")
    .then(beers => res.json(beers))
    .catch(err => res.status(404).send(err));
};

//Show beer records associated with the type
exports.type = (req, res) => {
  Beer.find({
    type: req.params.type
  })
    .populate("tester")
    .then(beers => res.json(beers))
    .catch(err => res.status(404).send(err));
};

//Show beer records associated with the style
exports.style = (req, res) => {
  Beer.find({
    style: req.params.style
  })
    .populate("tester")
    .then(beers => res.json(beers))
    .catch(err => res.status(404).send(err));
};
//everyone can see the detail of a beer record
exports.show = (req, res) => {
  //req.isAuthenticated();

  Beer.findOne({
    _id: req.params.id
    //tester: req.session.userId
  })
    .populate("tester")
    .then(beer => res.json(beer))
    .catch(err => res.status(401).send(err));
};


//edit and show almost the same, they use same form
exports.edit = (req, res) => {
  req.isAuthenticated();
  Beer.findOne({
    _id: req.params.id,
    tester: req.session.userId
  })
  .then(beer => res.json(beer))
  .catch(err => res.status(404).send(err));
};

exports.create = (req, res) => {  
  if (!req.isAuthenticated())
    return res.status(401).send({ error: "Sign in idget" });

  req.body.beer.tester = req.session.userId;
  
  Beer.create(req.body.beer)
    .then(() => {
      res.status(201).send({ success: "Beer record created" });
    })
    .catch(err => res.status(404).send(err));
};

exports.update = (req, res) => {
  if (!req.isAuthenticated())
    return res.status(401).send({ error: "Sign in idget" });
  Beer.updateOne(
    {
      _id: req.body.id,
      tester: req.session.userId
    },
    req.body.beer,
    {
      runValidators: true
    }
  )
    .then(() =>
      res.status(202).send({ success: "Your beer was successfully updated" })
    )
    .catch(err => res.status(400).send(err));
};

exports.destroy = (req, res) => {
  if (!req.isAuthenticated())
    return res.status(401).send({ error: "Sign in idget" });
  Beer.deleteOne({
    _id: req.body.id,
    tester: req.session.userId
  })
    .then(() =>
      res.status(202).send({ success: "Your beer was successfully destroyed" })
    )
    .catch(err => res.status(400).send(err));
};

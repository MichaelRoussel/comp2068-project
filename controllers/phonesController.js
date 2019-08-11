const Phone = require("../models/phone");

exports.index = (req, res) => {
  Phone.find()
    .then(phones => res.json(phones))
    .catch(err => res.status(404).send(err));
};

exports.show = (req, res) => {
  Phone.findOne({
    _id: req.params.id
  })
    .then(phone => res.json(phone))
    .catch(err => res.status(401).send(err));
};

exports.create = (req, res) => {
  Phone.create(req.body.phone)
    .then(() =>
      res.status(201).send({ success: "Phone was successfully created" })
    )
    .catch(err => res.status(400).send(err));
};

exports.edit = (req, res) => {
  Phone.findOne({
    _id: req.params.id,
  })
    .then(phone => res.json(phone))
    .catch(err => res.status(404).send(err));
};

exports.update = (req, res) => {
  Phone.updateOne(
    {
      _id: req.body.id,
    },
    req.body.phone,
    {
      runValidators: true
    }
  )
    .then(() =>
      res.status(202).send({ success: "Your phone was successfully updated" })
    )
    .catch(err => res.status(400).send(err));
};

exports.destroy = (req, res) => {
  Phone.deleteOne({
    _id: req.body.id,
  })
    .then(() =>
      res.status(202).send({ success: "Your phone was successfully destroyed" })
    )
    .catch(err => res.status(400).send(err));
};

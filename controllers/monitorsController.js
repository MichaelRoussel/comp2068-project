const Monitor = require("../models/monitor");

exports.index = (req, res) => {
  Monitor.find()
    .then(monitors => res.json(monitors))
    .catch(err => res.status(404).send(err));
};

exports.show = (req, res) => {
  Monitor.findOne({
    _id: req.params.id
  })
    .then(monitor => res.json(monitor))
    .catch(err => res.status(401).send(err));
};

exports.create = (req, res) => {
  Monitor.create(req.body.monitor)
    .then(() =>
      res.status(201).send({ success: "Monitor was successfully created" })
    )
    .catch(err => res.status(400).send(err));
};

exports.edit = (req, res) => {
  Monitor.findOne({
    _id: req.params.id,
  })
    .then(monitor => res.json(monitor))
    .catch(err => res.status(404).send(err));
};

exports.update = (req, res) => {
  Monitor.updateOne(
    {
      _id: req.body.id,
    },
    req.body.monitor,
    {
      runValidators: true
    }
  )
    .then(() =>
      res.status(202).send({ success: "Your monitor was successfully updated" })
    )
    .catch(err => res.status(400).send(err));
};

exports.destroy = (req, res) => {
  Monitor.deleteOne({
    _id: req.body.id,
  })
    .then(() =>
      res.status(202).send({ success: "Your monitor was successfully destroyed" })
    )
    .catch(err => res.status(400).send(err));
};

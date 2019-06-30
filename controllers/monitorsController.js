const Monitor = require('../models/monitor');
const mongoose = require('mongoose');

exports.index = (req, res) => {
    Monitor.find()
      .then(monitors => {
        res.render('monitors/index', {
          monitors: monitors,
          title: 'All Monitors'
        });
      })
      .catch(err => {
        res.redirect('/');
        req.flash('error', `ERROR: ${err}`);
      });
};

exports.show = (req, res) => {
  Monitor.findOne({
    _id: req.params.id,
  })
  .then(monitor => {
    res.render('monitors/show', {
    monitor: monitor,
    title: monitor.title
    });
  })
  .catch(err => {
    res.redirect('/');
    req.flash('error', `ERROR: ${err}`);
  });
};

exports.new = (req, res) => {
  res.render('monitors/new', {
    title: 'New Monitor Entry'
  });
};

exports.edit = (req, res) => {
  Monitor.findOne({
      _id: req.params.id,
    })
    .then(monitor => {
      res.render('monitors/edit', {
        monitor: monitor,
        title: monitor.model
      });
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect('/');
    });
};

exports.create = (req, res) => {
  Monitor.create(req.body.monitor)
    .then(() => {
      req.flash('success', 'The monitor was added successfully.');
      res.redirect('/monitors');
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect('/monitors/new');
    });
};

exports.update = (req, res) => {
  Monitor.updateOne({
      _id: req.body.id,
    }, req.body.monitor, {
      runValidators: true
    })
    .then(() => {
      req.flash('success', 'The monitor was updated successfully.');
      res.redirect(`/monitors/${req.body.id}`);
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect(`/monitors/${req.body.id}/edit`);
    });
};

exports.destroy = (req, res) => {
  Monitor.deleteOne({
      _id: req.body.id,
    })
    .then(() => {
      req.flash('success', 'The monitor was deleted successfully.');
      res.redirect('/monitors');
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect(`/monitors`);
    });
};
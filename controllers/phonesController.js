const Phone = require('../models/phone');
const mongoose = require('mongoose');

exports.index = (req, res) => {
    Phone.find()
      .then(phones => {
        res.render('phones/index', {
          phones: phones,
          title: 'All Phones'
        });
      })
      .catch(err => {
        res.redirect('/');
        req.flash('error', `ERROR: ${err}`);
      });
};

exports.show = (req, res) => {
  Phone.findOne({
    _id: req.params.id,
  })
  .then(phone => {
    res.render('phones/show', {
    phone: phone,
    title: phone.model
    });
  })
  .catch(err => {
    res.redirect('/');
    req.flash('error', `ERROR: ${err}`);
  });
};

exports.new = (req, res) => {
  res.render('phones/new', {
    title: 'New Phone Entry'
  });
};

exports.edit = (req, res) => {
  Phone.findOne({
      _id: req.params.id,
    })
    .then(phone => {
      res.render('phones/edit', {
        phone: phone,
        title: phone.model
      });
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect('/');
    });
};

exports.create = (req, res) => {
  Phone.create(req.body.phone)
    .then(() => {
      req.flash('success', 'The phone was added successfully.');
      res.redirect('/phones');
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect('/phones/new');
    });
};

exports.update = (req, res) => {
  Phone.updateOne({
      _id: req.body.id,
    }, req.body.phone, {
      runValidators: true
    })
    .then(() => {
      req.flash('success', 'The phone was updated successfully.');
      res.redirect(`/phones/${req.body.id}`);
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect(`/phones/${req.body.id}/edit`);
    });
};

exports.destroy = (req, res) => {
  Phone.deleteOne({
      _id: req.body.id,
    })
    .then(() => {
      req.flash('success', 'The phone was deleted successfully.');
      res.redirect('/phones');
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect(`/phones`);
    });
};
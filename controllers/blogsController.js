const Blog = require('../models/blog');

exports.index = (req, res) => {
  Blog.find()
    .then(blogs => {
      res.render('blogs/index', {
        blogs: blogs,
        title: 'Archive'
      });
    })
    .catch(err => {
      console.error(`ERROR: ${err}`);
    });
};

exports.show = (req, res) => {};

exports.new = (req, res) => {
  res.render('blogs/new', {
    title: 'New Blog Post'
  });
};

exports.edit = (req, res) => {};

exports.create = (req, res) => {
  Blog.create(req.body.blog)
    .then(() => {
      res.redirect('/blogs');
    })
    .catch(err => {
      console.error(`ERROR: ${err}`);
    });
};

exports.update = (req, res) => {};

exports.destroy = (req, res) => {};


// To fil in later
exports.drafts = (req, res) => {};

exports.published = (req, res) => {};
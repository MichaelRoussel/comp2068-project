const router = require('express').Router();

const BlogsController = require('../controllers/blogsController');

// Begin routes

router.get('/', BlogsController.index);
router.get('/new', BlogsController.new);
router.get('/:id', BlogsController.show);
router.get('/:id/edit', BlogsController.edit);
router.post('/', BlogsController.create);
router.post('/:id', BlogsController.update);
router.post('/:id/delete', BlogsController.destroy);

// End routes

module.exports = router;
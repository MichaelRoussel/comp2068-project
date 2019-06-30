const router = require('express').Router();

const MonitorsController = require('../controllers/monitorsController');

// Begin routes

router.get('/', MonitorsController.index);
router.get('/new', MonitorsController.new);
router.get('/:id', MonitorsController.show);
router.get('/:id/edit', MonitorsController.edit);
router.post('/', MonitorsController.create);
router.post('/update', MonitorsController.update);
router.post('/destroy', MonitorsController.destroy);

// End routes

module.exports = router;
const router = require('express').Router();

const PhonesController = require('../controllers/phonesController');

// Begin routes

router.get('/', PhonesController.index);
router.get('/:id', PhonesController.show);
router.get('/:id/edit', PhonesController.edit);
router.post('/', PhonesController.create);
router.post('/update', PhonesController.update);
router.post('/destroy', PhonesController.destroy);

// End routes

module.exports = router;
const router = require('express').Router();

router.use('/', require('./checkout'));
router.use('/', require('./display'));
router.use('/', require('./success'));
router.use('/', require('./404'));

module.exports = router;

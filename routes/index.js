const { Router } = require('express');
const router = Router();

router.use('/contacts', require('./contacts'));

router.use('/', require('./swagger'));

module.exports = router;

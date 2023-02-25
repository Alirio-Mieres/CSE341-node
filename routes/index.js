const { Router } = require('express');
const router = Router();

const homePage = require('../controllers/lesson01');

router.use('/contacts', require('./contacts'));

router.get('/', homePage.find);

module.exports = router;

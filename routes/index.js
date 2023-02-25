const { Router } = require('express');
const router = Router();

router.use('/contacts', require('./contacts'));

router.use('/', (req, res) => {
    res.send('Alirio Mieres');
});

module.exports = router;

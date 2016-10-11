var router = require('express').Router();


router.use('/users',require('./user/user.routes'))
router.use('/portfolio',require('./portfolio/portfolio.routes'))

module.exports = router;

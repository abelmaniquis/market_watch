var router = require('express').Router();

router.use('/users',require('./user/user.routes'))
router.use('/portfolio',require('./portfolio/portfolio.routes'))

console.log('SERVER HAS ACCESS TO API')

module.exports = router;

const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/customer', require('./customer'))
router.use('/business', require('./business'))
router.use('/single/business', require('./singleBussiness'))
router.use('/search', require('./search'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

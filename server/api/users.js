const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

// /api/users
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

// /api/users
router.post('/signup', async (req, res, next) => {
  try {
    console.log('req.body', req.body.role)
    const user = await User.findOne({where: {id: req.user.id}})

    const updatedUser = await user.update({role: req.body.role})

    res.json(updatedUser)
  } catch (error) {
    next(error)
  }
})

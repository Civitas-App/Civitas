const router = require('express').Router()
const {Business} = require('../db/models')
const {Op} = require('sequelize')
module.exports = router

// %search Finds any values that ends with what you type in
// search% Finds any values that starts with what you typed in
// %search% Finds any values that have "search" in any position
router.get('/', async (req, res, next) => {
  try {
    console.log('query', req.query)
    let filter = {}
    const search = req.query.search
    if (search) {
      filter = {
        where: {
          name: {
            [Op.iLike]: `%${search}%`
          }
        }
      }
    }
    const findBusiness = await Business.findAll(filter)
    console.dir(JSON.stringify(findBusiness))
    res.json(findBusiness)
  } catch (error) {
    next(error)
  }
})

const router = require('express').Router()
const {Customer, Business, Tier, User, Subscription} = require('../db/models')
const userAuthentication = require('./middleware/user_middleware')
const {Op} = require('sequelize')
module.exports = router

//business logs in will see his business profile and triers associated with it.
//api/business/portal
router.get(`/portal`, async (req, res, next) => {
  try {
    const business = await Business.findOne({
      where: {
        userId: req.user.id
      },
      include: {
        model: Tier
      }
    })
    res.json(business)
  } catch (error) {
    next(error)
  }
})
//create a business
// api/business/
router.post('/create', async (req, res, next) => {
  try {
    const {
      name,
      location,
      category,
      description,
      avatar,
      headerPhoto
    } = req.body
    console.log(name, location, category, description, avatar, headerPhoto)
    const business = await Business.create({
      name,
      headerPhoto,
      avatar,
      description,
      location,
      category
    })
    res.status(201).json(business)
  } catch (error) {
    next(error)
  }
})

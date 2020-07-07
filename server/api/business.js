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

router.get(`/portal/analytics`, async (req, res, next) => {
  try {
    const userId = req.user.id
    const business = await Business.findOne({
      where: {
        userId
      }
    })
    const businessId = business.id
    const subscription = await Subscription.findAll({
      where: {
        businessId
      },
      include: [Business, Tier]
    })

    res.json(subscription)
  } catch (error) {
    next(error)
  }
})

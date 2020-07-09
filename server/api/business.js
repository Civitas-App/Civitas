const router = require('express').Router()
const {Customer, Business, Tier, User, Subscription} = require('../db/models')
const userAuthentication = require('./middleware/user_middleware')
const {Op} = require('sequelize')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const getAll = await Business.findAll()
    res.json(getAll)
  } catch (error) {
    next(error)
  }
})

//business logs in will see his business profile and triers associated with it.
//api/business/portal
router.get('/portal', async (req, res, next) => {
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
// api/business/create
router.post('/create', async (req, res, next) => {
  try {
    const {
      name,
      location,
      category,
      description,
      avatar,
      headerPhoto
      //I want to be able to update businesses and tiers, so I am
      //putting them in an object together and calling each
    } = req.body

    const business = await Business.create({
      name,
      headerPhoto,
      avatar,
      description,
      location,
      category,
      userId: 6
    })
    // req.body.tier.forEach(async (tier) => {
    //   const {level, title, pledge, price, photo} = tier
    //   const newTier = await Tier.create({level, title, pledge, price, photo})
    //   business.addTier(newTier)
    // })

    res.status(201).json(business)
  } catch (error) {
    next(error)
  }
})

router.get('/portal/analytics', async (req, res, next) => {
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

// api/business/filter/category
router.get('/filter/category', async (req, res, next) => {
  try {
    const category = req.query.category
    console.log(category)
    const getCategory = await Business.findAll({
      where: {
        category: category
      }
    })
    res.json(getCategory)
  } catch (error) {
    next(error)
  }
})

router.post('/createtier', async (req, res, next) => {
  try {
    const business = await Business.findById(req.body.id)
    const tiers = await Tier.bulkCreate(req.body.tiers)
    await business.addTiers(tiers)
    res.json(business)
  } catch (error) {
    next(error)
  }
})

//tier.bulkCreate(req.body.tiers(an array of tier objects))
//

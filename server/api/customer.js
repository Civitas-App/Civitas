const router = require('express').Router()
const {Customer, Business, Tier, Subscription} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const getCustomer = await Customer.findOne({
      where: {
        userId: req.user.id
      }
    })
    res.json(getCustomer)
  } catch (error) {
    next(error)
  }
})

// for that customer when he logs in
// show all his pledges to that bussiness
// api/customer/pledges/business
router.get('/pledges/business', async (req, res, next) => {
  try {
    const customer = await Customer.findOne({
      where: {
        userId: req.user.id
      }
    })
    const getSub = await Subscription.findAll({
      where: {
        customerId: customer.id
      },
      include: [Business, Tier]
    })
    res.json(getSub)
  } catch (error) {
    next(error)
  }
})

// front end the pledges id
// api/customer/pledge/:id
// the :id is for the tier id
// getthe bussinessId from the tier table
// this will set up when that person pledges to that bussiness
router.post('/pledge/:id', async (req, res, next) => {
  try {
    const customer = await Customer.findOne({
      where: {
        userId: req.user.id
      }
    })
    const {id} = req.params
    const tier = await Tier.findByPk(id)

    const subscription = await Subscription.findOne({
      where: {
        customerId: customer.id,
        businessId: tier.businessId
      }
    })
    if (subscription) {
      const updatedSubscription = await subscription.update({
        tierId: tier.id
      })
      res.json(updatedSubscription)
    } else {
      const createSubscription = await Subscription.create({
        customerId: customer.id,
        tierId: tier.id,
        businessId: tier.businessId
      })
      res.json(createSubscription)
    }
  } catch (error) {
    next(error)
  }
})

// api/customer/create
// create a a customer page or maybe Update?
router.post('/create', async (req, res, next) => {
  try {
    const {name, location, avatar} = req.body
    const createCustomerAccount = await Customer.create({
      name,
      location,
      avatar,
      userId: req.user.id
    })
    res.json(createCustomerAccount)
  } catch (error) {
    next(error)
  }
})

//api/customer/update/coupon/code
router.post('/update/coupon/code', async (req, res, next) => {
  try {
    const customer = await Customer.findOne({
      where: {
        userId: req.user.id
      }
    })
    const {businessId, randomNumber} = req.body
    const updateRedeemCode = await Subscription.findOne({
      where: {
        customerId: customer.id,
        businessId: businessId,
        redeemed: 'false'
      }
    })
    if (updateRedeemCode) {
      await updateRedeemCode.update({
        redeemed: 'true',
        coupon: randomNumber
      })
    }
    res.json(updateRedeemCode)
  } catch (error) {
    next(error)
  }
})

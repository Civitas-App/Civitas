const router = require('express').Router()
const {Customer, Business, Tier, User, Subscription} = require('../db/models')
const userAuthentication = require('./middleware/user_middleware')
const {Op} = require('sequelize')
module.exports = router

// for that customer when he logs in
// show all his pledges to that bussiness
// api/customer/pledges/business
router.get('/pledges/business', async (req, res, next) => {
  try {
    const customer = await Customer.findOne({
      where: {
        userId: req.user.id
      },
      include: {
        model: Business,
        include: {
          model: Tier
        }
      }
    })
    res.json(customer)
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

    const create = await Subscription.create({
      customerId: customer.id,
      tierId: tier.id,
      businessId: tier.businessId
    })
    res.json(create)
  } catch (error) {
    next(error)
  }
})

// api/customer/create
// create a a customer page or maybe Update?
router.post('/create', async (req, res, next) => {
  try {
    const {name, location, avatar} = req.body
    console.log(JSON.stringify(req.body))
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

// WORK in progress

// // update pedge of customer
// // /api/customer/update/pledge/:id
// router.get('/update/pledge/:id', async (req, res, next) => {
//   try {

//     const customer = await Customer.findOne({
//       where: {
//         userId: req.user.id
//       }
//     })
//     console.log('sd', customer)
//     const {id} = req.params
//     const tier = await Tier.findByPk(id)
//     const updatePledge = await Subscription.findOne({
//       where: {
//         [Op.and] : [
//           {customerId: customer.id},
//           {tierId: tier.id},
//           {businessId: tier.businessId}
//         ]
//       }
//     })

//    await updatePledge.update({
//      where: {
//        tierId: tier.level
//      }
//    })

//    const updatedPledge = await Subscription.findOne({
//      where: {
//        customerId: customer.id,
//        tierId: tier.level
//      }
//    })

//    res.send(updatedPledge)
//   } catch (error) {
//     next(error)
//   }
// })

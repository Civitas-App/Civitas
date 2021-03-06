const db = require('../db')
const Sequelize = require('sequelize')

const Subscription = db.define('subscription', {
  status: {
    type: Sequelize.ENUM('active', 'inactive'),
    defaultValue: 'active'
  },
  startDate: {
    type: Sequelize.DATE
  },
  redeemed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  coupon: {
    type: Sequelize.STRING
  }
})

module.exports = Subscription

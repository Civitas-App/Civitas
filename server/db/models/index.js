const Business = require('./business')
const User = require('./user')
const Tier = require('./tier')
const Subscription = require('./subscription')
const Customer = require('./customer')

Customer.belongsToMany(Business, {through: Subscription})
Business.belongsToMany(Customer, {through: Subscription})
Tier.belongsTo(Business)
Business.hasMany(Tier)
Subscription.belongsTo(Tier)
Tier.hasOne(Subscription)
User.hasOne(Customer)
Customer.belongsTo(User)
User.hasOne(Business)
Business.belongsTo(User)
Subscription.belongsTo(Business)
Subscription.belongsTo(Customer)

module.exports = {
  User,
  Business,
  Tier,
  Subscription,
  Customer
}

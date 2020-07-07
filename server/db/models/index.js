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
// register models
// require('./models')

module.exports = {
  User,
  Business,
  Tier,
  Subscription,
  Customer
}
/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */

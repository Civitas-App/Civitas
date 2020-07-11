const db = require('../db')
const Sequelize = require('sequelize')

const Business = db.define('business', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [2, 40],
        msg: 'name must be between 2-40 characters'
      }
    }
  },
  headerPhoto: {
    type: Sequelize.STRING,
    defaultValue: 'https://picsum.photos/500/300',
    validate: {
      isUrl: true
    }
  },
  avatar: {
    type: Sequelize.STRING,
    defaultValue: 'https://i.pravatar.cc/300',
    validate: {
      isUrl: true
    }
  },
  description: {
    type: Sequelize.TEXT
  },
  location: {
    type: Sequelize.STRING
  },
  //make category enum?
  category: {
    type: Sequelize.ENUM(
      'restaurant',
      'fashion',
      'music',
      'gym',
      'barbershop',
      'other'
    ),
    allowNull: false
  }
})

module.exports = Business

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
    defaultValue: 'https://picsum.photos/820/312'
  },

  avatar: {
    type: Sequelize.STRING,
    defaultValue: 'https://api.adorable.io/avatars/200/abott@adorable.png'
  },

  description: {
    type: Sequelize.TEXT
  },
  location: {
    type: Sequelize.STRING
  },
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

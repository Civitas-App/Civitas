const db = require('../db')
const Sequelize = require('sequelize')

const Business = db.define('business', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [2, 25],
        msg: 'name must be between 2-25 characters'
      }
    }
  },
  headerPhoto: {
    type: Sequelize.STRING,
    defaultValue:
      'https://66.media.tumblr.com/9019d67dfdc3f306b31d1508224c6dd3/tumblr_peyrobN9WN1uibr8q_1280.png'
  },
  avatar: {
    type: Sequelize.STRING,
    defaultValue:
      'https://cdn1.iconfinder.com/data/icons/messenger-and-society/16/user_person_avatar_unisex-512.png'
  },
  description: {
    type: Sequelize.TEXT
  },
  location: {
    type: Sequelize.STRING
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Business

const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    validate: {
      len: {
        args: [2, 20],
        msg: 'name must be between 2-20 characters'
      },
      notEmpty: {
        args: true,
        msg: 'Name must be required'
      }
    }
  },
  location: {
    type: Sequelize.TEXT,
    validate: {
      notEmpty: {
        args: true,
        msg: 'Name must be required'
      }
    }
  },
  avatar: {
    type: Sequelize.STRING
  }
})

module.exports = User

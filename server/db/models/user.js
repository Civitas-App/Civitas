const Sequelize = require('sequelize')
const db = require('../db')

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    validate: {
      len: {
        args: [2, 20],
        msg: 'name must be between 2-20 characters'
      },
      notEmpty: {
        args: true,
        msg: 'Name must be required'
      },
      isAlpha: {
        args: true,
        msg: 'name most only contain letters'
      }
    }
  },
  location: {
    type: Sequelize.TEXT,
    validate: {
      isAlpha: {
        args: true,
        msg: 'name most only contain letters'
      },
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

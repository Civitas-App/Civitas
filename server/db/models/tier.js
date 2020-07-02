const Sequelize = require('sequelize')
const db = require('../db')

const Tier = db.define('tier', {
  level: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      isNumeric: true,
      isInt: true,
      min: 1,
      max: 4
    }
  },
  title: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      len: {
        args: [2, 20],
        msg: 'title must be between 2-20 characters'
      },
      notEmpty: {
        args: true,
        msg: 'Title must be required'
      }
    }
  },
  pledge: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    allowNull: false,
    validate: {
      notEmpty: {
        args: true,
        msg: 'pledges must be required'
      }
    }
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      isNumeric: true,
      isInt: true
    }
  },
  photo: {
    type: Sequelize.STRING,
    defaultValue:
      'https://www.solidbackgrounds.com/images/1920x1080/1920x1080-white-solid-color-background.jpg'
  }
})

module.exports = Tier

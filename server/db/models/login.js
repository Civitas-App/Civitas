const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const Login = db.define('login', {
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  role: {
    type: Sequelize.ENUM('user', 'bussiness'),
    defaultValue: 'user'
  },
  isAdmin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },

  password: {
    type: Sequelize.STRING,
    // Making `.password` act like a func hides it when serializing to JSON.
    // This is a hack to get around Sequelize's lack of a "private" option.
    get() {
      return () => this.getDataValue('password')
    }
  },
  salt: {
    type: Sequelize.STRING,
    // Making `.salt` act like a function hides it when serializing to JSON.
    // This is a hack to get around Sequelize's lack of a "private" option.
    get() {
      return () => this.getDataValue('salt')
    }
  },
  googleId: {
    type: Sequelize.STRING
  }
})

module.exports = Login

/**
 * instanceMethods
 */
Login.prototype.correctPassword = function(candidatePwd) {
  return Login.encryptPassword(candidatePwd, this.salt()) === this.password()
}

/**
 * classMethods
 */
Login.generateSalt = function() {
  return crypto.randomBytes(16).toString('base64')
}

Login.encryptPassword = function(plainText, salt) {
  return crypto
    .createHash('RSA-SHA256')
    .update(plainText)
    .update(salt)
    .digest('hex')
}

/**
 * hooks
 */
const setSaltAndPassword = login => {
  if (login.changed('password')) {
    login.salt = Login.generateSalt()
    login.password = Login.encryptPassword(login.password(), login.salt())
  }
}

Login.beforeCreate(setSaltAndPassword)
Login.beforeUpdate(setSaltAndPassword)
Login.beforeBulkCreate(logins => {
  logins.forEach(setSaltAndPassword)
})

// const {User} = require('../../db/models')

module.exports = function(req, res, next) {
  // const user = await User.findOne({
  //   where: {
  //     id: req.user.id
  //   }
  // })
  if (!req.user) {
    res
      .status(403)
      .send({
        message: 'Login in to be able to create and account or business account'
      })
  } else {
    next()
  }
}

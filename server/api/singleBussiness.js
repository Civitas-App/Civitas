const router = require('express').Router()
const {Business, Tier} = require('../db/models')
module.exports = router

// put a route for single business on here due to a lot of static routes in bussiness file
// woul have to rewrite a lot of the routes so no conflicts

router.get('/:id', async (req, res, next) => {
  try {
    const {id} = req.params
    const singleBussiness = await Business.findOne({
      where: {
        id
      },
      include: [Tier]
    })
    res.json(singleBussiness)
  } catch (error) {
    next(error)
  }
})

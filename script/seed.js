'use strict'

const db = require('../server/db')
const {Business, Tier, Customer, Subscription} = require('../server/db/models')
const faker = require('faker')
//create a random int to be able to make associations using ids
const randomInt = function(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

function generate(n) {
  var add = 1,
    max = 12 - add // 12 is the min safe number Math.random() can generate without it starting to pad the end with zeros.
  if (n > max) {
    return generate(max) + generate(n - max)
  }
  max = Math.pow(10, n + add)
  var min = max / 10 // Math.pow(10, n) basically
  var number = Math.floor(Math.random() * (max - min + 1)) + min
  return ('' + number).substring(add)
}
const roleEnum = ['Customer', 'Business']

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  //if there are 200 logins do we need an even split or is randomint in role ok?

  // const seedLogin = async function () {
  //   for (let i = 0; i < 200; i++) {
  //     await Login.create({
  //       googleId: generate(21),
  //       password: faker.lorem.words(),
  //       isAdmin: false,
  //       role: roleEnum[randomInt(2)],
  //     })
  //   }
  // }
  //do we need email?

  //seed 100 regular users
  const seedCustomers = async function() {
    for (let i = 0; i < 100; i++) {
      await Customer.create({
        name: faker.name.firstName(),
        location: faker.address.streetAddress(),
        avatar: faker.image.avatar()
      })
    }
  }

  //seed 20 admins  do we need in faker or manual?
  // const seedAdmins = async function () {
  //   for (let i = 0; i < 20; i++) {
  //     await User.create({
  //       email: faker.internet.email(),
  //       name: faker.name.firstName(),
  //       isAdmin: true,
  //       location: faker.address.streetAddress(),
  //       password: 123,
  //     })
  //   }
  // }
  //businesses belong to many users
  //users belong to many businesses
  //each seedBusinesses adds those associations

  //seed 25 businesses for each category
  const seedFoodBusinesses = async function() {
    for (let i = 0; i < 25; i++) {
      await Business.create({
        name: faker.company.companyName(),
        headerPhoto: faker.image.food(),
        avatar: faker.image.avatar(),
        description: faker.lorem.paragraph(),
        location: faker.address.streetAddress(),
        category: 'restaurant'
      })
    }
  }
  const seedGymBusinesses = async function() {
    for (let i = 0; i < 25; i++) {
      await Business.create({
        name: faker.company.companyName(),
        headerPhoto: faker.image.sports(),
        avatar: faker.image.avatar(),
        description: faker.lorem.paragraph(),
        location: faker.address.streetAddress(),
        category: 'gym'
      })
    }
  }

  const seedFashionBusinesses = async function() {
    for (let i = 0; i < 25; i++) {
      await Business.create({
        name: faker.company.companyName(),
        headerPhoto: faker.image.fashion(),
        avatar: faker.image.avatar(),
        description: faker.lorem.paragraph(),
        location: faker.address.streetAddress(),
        category: 'fashion'
      })
    }
  }
  const seedMusicBusinesses = async function() {
    for (let i = 0; i < 25; i++) {
      await Business.create({
        name: faker.company.companyName(),
        headerPhoto: faker.image.nightlife(),
        avatar: faker.image.avatar(),
        description: faker.lorem.paragraph(),
        location: faker.address.streetAddress(),
        category: 'music'
      })
    }
  }
  //adds businessId and customerId to subscription through table - start of creating subscriptions
  const customerBusiness = async function() {
    try {
      for (let i = 0; i < 100; i++) {
        const customer = await Customer.findOne({where: {id: i}})
        const business = await Business.findOne({where: {id: i}})
        if (customer && business) {
          await customer.addBusiness(business)
          await business.addCustomer(customer)
        }
      }
    } catch (error) {
      console.error(error)
    }
  }
  //tiers has 3 levels, each business needs three tiers, we seed 100 tiers per level
  const seedTier1 = async function() {
    try {
      for (let i = 0; i < 100; i++) {
        await Tier.create({
          level: 1,
          title: faker.lorem.words(),
          pledge: [faker.lorem.sentence(), faker.lorem.sentence()],
          price: 5,
          photo: faker.image.cats()
        })
      }
    } catch (error) {
      console.error('see tier 1', error)
    }
  }
  const seedTier2 = async function() {
    for (let i = 0; i < 100; i++) {
      await Tier.create({
        level: 2,
        title: faker.lorem.words(),
        pledge: [faker.lorem.sentence(), faker.lorem.sentence()],
        price: 15,
        photo: faker.image.cats()
      })
    }
  }

  const seedTier3 = async function() {
    for (let i = 0; i < 100; i++) {
      await Tier.create({
        level: 3,
        title: faker.lorem.words(),
        pledge: [faker.lorem.sentence(), faker.lorem.sentence()],
        price: 50,
        photo: faker.image.cats()
      })
    }
  }
  //adds each tier level to each business in tiers table
  const tier1Business = async function() {
    try {
      for (let i = 0; i < 101; i++) {
        const tier = await Tier.findOne({where: {id: i}})
        const business = await Business.findOne({where: {id: i}})
        if (business && tier) {
          await business.addTier(tier)
        }
      }
    } catch (error) {
      console.error(error)
    }
  }
  const tier2Business = async function() {
    try {
      let i = 101
      for (let j = 0; j < 101; j++) {
        const tier = await Tier.findOne({where: {id: i}})
        const business = await Business.findOne({where: {id: j}})
        if (business && tier) {
          await business.addTier(tier)
          i++
        }
      }
    } catch (error) {
      console.error(error)
    }
  }
  const tier3Business = async function() {
    try {
      let i = 201
      for (let j = 0; j < 101; j++) {
        const tier = await Tier.findOne({where: {id: i}})
        const business = await Business.findOne({where: {id: j}})
        if (business && tier) {
          await business.addTier(tier)
          i++
        }
      }
    } catch (error) {
      console.error(error)
    }
  }
  //adds tiers to subscription table
  const subsTier = async function() {
    try {
      let i = 1
      for (let j = 1; j < 301; j++) {
        const tier = await Tier.findOne({where: {id: j}})
        const subscription = await Subscription.findOne({
          where: {businessId: i, customerId: i}
        })
        await tier.setSubscription(subscription)
        i++
      }
    } catch (error) {
      console.error(error)
    }
  }

  await seedCustomers()
  //await seedAdmins()
  await seedFoodBusinesses()
  await seedFashionBusinesses()
  await seedMusicBusinesses()
  await seedGymBusinesses()
  await seedTier1()
  await seedTier2()
  await seedTier3()
  await customerBusiness()
  await tier1Business()
  await tier2Business()
  await tier3Business()
  await subsTier()

  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed

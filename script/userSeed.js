'use strict'
const db = require('../server/db')
const faker = require('faker')

const {User, Business, Tier} = require('../server/db/models')

//create a random int to be able to make associations using ids
const randomInt = function(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

//create one seed function which houses all faker made data
//for users, businesses, and tiers

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  //seed 200 regular users
  const seedUsers = async function() {
    for (let i = 0; i < 200; i++) {
      await User.create({
        email: faker.internet.email(),
        name: faker.name.firstName(),
        isAdmin: false,
        location: faker.address.streetAddress(),
        password: 123
      })
    }
  }
  //seed 20 admins
  const seedAdmins = async function() {
    for (let i = 0; i < 20; i++) {
      await User.create({
        email: faker.internet.email(),
        name: faker.name.firstName(),
        isAdmin: true,
        location: faker.address.streetAddress(),
        password: 123
      })
    }
  }
  //businesses belong to many users
  //users belong to many businesses
  //each seedBusinesses adds those associations

  //seed 50 businesses for each category
  const seedFoodBusinesses = async function() {
    for (let i = 0; i < 50; i++) {
      const user = User.findByPk(randomInt(200))
      const business = await Business.create({
        name: faker.company.companyName(),
        headerPhoto: faker.image.food(),
        avatar: faker.image.avatar(),
        description: faker.lorem.paragraph(),
        location: faker.address.streetAddress(),
        category: 'restaurant'
      })
      user.addBusiness(business)
      business.addUser(user)
    }
  }
  const seedGymBusinesses = async function() {
    for (let i = 0; i < 50; i++) {
      const user = await User.findByPk(randomInt(200))
      const business = await Business.create({
        name: faker.company.companyName(),
        headerPhoto: faker.image.sports(),
        avatar: faker.image.avatar(),
        description: faker.lorem.paragraph(),
        location: faker.address.streetAddress(),
        category: 'gym'
      })
      user.addBusiness(business)
      business.addUser(user)
    }
  }

  const seedFashionBusinesses = async function() {
    for (let i = 0; i < 50; i++) {
      const user = await User.findByPk(randomInt(200))
      const business = await Business.create({
        name: faker.company.companyName(),
        headerPhoto: faker.image.fashion(),
        avatar: faker.image.avatar(),
        description: faker.lorem.paragraph(),
        location: faker.address.streetAddress(),
        category: 'fashion'
      })
      user.addBusiness(business)
      business.addUser(user)
    }
  }
  const seedMusicBusinesses = async function() {
    for (let i = 0; i < 50; i++) {
      const user = await user.findByPk(randomInt(200))
      const business = await Business.create({
        name: faker.company.companyName(),
        headerPhoto: faker.image.nightlife(),
        avatar: faker.image.avatar(),
        description: faker.lorem.paragraph(),
        location: faker.address.streetAddress(),
        category: 'music'
      })
      user.addBusiness(business)
      business.addUser(user)
    }
  }
}

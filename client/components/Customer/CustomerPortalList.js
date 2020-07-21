import React, {useState} from 'react'
import randomize from 'randomatic'
import CustomerError from './CustomerError'
import {updateCustomerCoupon} from '../../store/singleCustomer'
import {useDispatch} from 'react-redux'
import {NavLink} from 'react-router-dom'

// looping through the buisines and tiers from customers through eager loading in backend route
// checking if there is a busines if there is map through the bhiness and teirs if not null
const CustomerPortalList = ({singleCustomer}) => {
  const dispatch = useDispatch()

  const generateRandomNumber = businessId => {
    const randomNumber = randomize('aa0', 20)
    dispatch(updateCustomerCoupon(businessId, randomNumber))
  }

  return (
    <div className="customer-profile">
      <div className="customer-info">
        <h1>Hi {singleCustomer.name}!</h1>
        <img id="customer_avatar" src={singleCustomer.avatar} />
        <h1>Businesses you are supporting</h1>
      </div>
      <div id="customer_info_seperate" />
      {singleCustomer.subscription && singleCustomer.subscription.length > 0 ? (
        <div className="content">
          {singleCustomer.subscription.map(customer => (
            <div
              key={customer.business.id}
              className="customer-subscription-info"
            >
              <img id="business_avatar" src={customer.business.headerPhoto} />
              <NavLink
                className="navlink"
                to={`/business/${customer.business.id}`}
              >
                <h2>Business Name: {customer.business.name}</h2>
              </NavLink>
              {customer.redeemed === false ? (
                <button
                  type="button"
                  onClick={() => generateRandomNumber(customer.business.id)}
                >
                  Click To Redeem Coupon
                </button>
              ) : (
                <div>
                  <h4>Code Reedemed! {customer.coupon}</h4>
                </div>
              )}
              <h4>Tier Level Subscribed To: {customer.tier.level}</h4>
              <h4>Subscription Price: ${customer.tier.price}</h4>
            </div>
          ))}
        </div>
      ) : (
        <CustomerError />
      )}
    </div>
  )
}

export default CustomerPortalList

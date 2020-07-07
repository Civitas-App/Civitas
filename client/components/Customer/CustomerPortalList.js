import React, {useState} from 'react'
import CustomerError from './CustomerError'

// looping through the buisines and tiers from customers through eager loading in backend route
// checking if there is a busines if there is map through the bhiness and teirs if not null
const CustomerPortalList = ({customer}) => {
  const {businesses} = customer
  console.log(businesses)
  return (
    <div className="pledges">
      <h4>Hi {customer.name}</h4>
      <img src={customer.avatar} />
      {businesses && businesses.length > 0 ? (
        <div className="pledges-list">
          {businesses.map(pledges => (
            <div key={pledges.id}>
              <h4>Business name: {pledges.name}</h4>
              <h4>
                businesses redeemed:
                {pledges.subscription.redeemed ? 'true' : 'false'}
              </h4>
              {pledges.tiers.map(tier => (
                <div key={tier.id}>
                  <h4>tier level: {tier.level}</h4>
                  <h4>tier price: {tier.price}</h4>
                  <h4>tier pledge: {tier.pledge}</h4>
                </div>
              ))}
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

import React from 'react'
import CustomerError from './CustomerError'

// looping through the buisines and tiers from customers through eager loading in backend route
// checking if there is a busines if there is map through the bhiness and teirs if not null
const CustomerPortalList = ({singleCustomer}) => {
  console.log('single', singleCustomer)

  return (
    <div className="customer-profile">
      <div className="customer-info">
        <h3>Hi {singleCustomer.name}!</h3>
        <img src={singleCustomer.avatar} />
      </div>
      {singleCustomer.subscription && singleCustomer.subscription.length > 0 ? (
        <div className="customer-subscription-info">
          <h2>Businesses you are supporting</h2>
          {singleCustomer.subscription.map(customer => (
            <div key={customer.business.id}>
              <img src={customer.business.headerPhoto} />
              <h2>Business Name: {customer.business.name}</h2>
              <h4>
                Monthly Tier Redeemed: {customer.redeemed ? 'true' : 'false'}
              </h4>
              <h4>Tier Level Subscribed To: {customer.tier.level}</h4>
              <h4>Subscription Price: {customer.tier.price}</h4>
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

import React from 'react'
import CustomerError from './CustomerError'

// looping through the buisines and tiers from customers through eager loading in backend route
// checking if there is a busines if there is map through the bhiness and teirs if not null
const CustomerPortalList = ({singleCustomer}) => {
  console.log('single', singleCustomer)

  return (
    <div className="customer-profile">
      <div className="customer-info">
        <h3>{singleCustomer.name}</h3>
        <img id="customer_avatar" src={singleCustomer.avatar} />
      </div>
      <div id="customer_info_seperate" />
      {singleCustomer.subscription && singleCustomer.subscription.length > 0 ? (
        <div className="customer-subscription-info">
          <h2 id="supportings">Supportings</h2>
          {singleCustomer.subscription.map(customer => (
            <div key={customer.business.id}>
              <img id="business_avatar" src={customer.business.headerPhoto} />
              <h2>{customer.business.name}</h2>
              <h4>
                businesses redeemed: {customer.redeemed ? 'true' : 'false'}
              </h4>
              <h4>tier level subscribed to: {customer.tier.level}</h4>
              <h4>subscription price: {customer.tier.price}</h4>
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

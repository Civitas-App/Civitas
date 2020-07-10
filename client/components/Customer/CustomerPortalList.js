import React from 'react'
import CustomerError from './CustomerError'

// looping through the buisines and tiers from customers through eager loading in backend route
// checking if there is a busines if there is map through the bhiness and teirs if not null
const CustomerPortalList = ({singleCustomer}) => {
  console.log('single', singleCustomer)

  return (
    <div>
      {singleCustomer && singleCustomer.length > 0 ? (
        <div>
          {singleCustomer.map(customer => (
            <div key={customer.business.id}>
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

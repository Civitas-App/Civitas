import React from 'react'
import CustomerError from './CustomerError'

// looping through the buisines and tiers from customers through eager loading in backend route
// checking if there is a busines if there is map through the bhiness and teirs if not null
const CustomerPortalList = ({customer}) => {
  const {businesses} = customer
  console.log(businesses)
  return (
    <div className="pledges">
      <section className="customerInfo">
        <h4>{customer.name}</h4>

        <div>
          <img id="portalAvatar" src={customer.avatar} />
        </div>
      </section>
      <section className="businessInfo">
        {businesses && businesses.length > 0 ? (
          <div className="pledges-list">
            {businesses.map(pledges => (
              <div key={pledges.id}>
                <h3>Business: {pledges.name}</h3>
                <h5>
                  Pledges redeemed:
                  {pledges.subscription.redeemed ? 'true' : 'false'}
                </h5>
                {pledges.tiers.map(tier => (
                  <div key={tier.id}>
                    <h3>tier level: {tier.level}</h3>
                    <h3>tier price: {tier.price}</h3>
                    <h3>tier pledge: {tier.pledge}</h3>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ) : (
          <CustomerError />
        )}
      </section>
    </div>
  )
}

export default CustomerPortalList

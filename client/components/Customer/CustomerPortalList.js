import React from 'react'

const CustomerPortalList = ({customer}) => {
  console.log(customer)
  const {businesses} = customer
  console.log(businesses)
  return (
    <div className="pledges">
      <h2>Hi {customer.name}</h2>
      <img src={customer.avatar} />
      {businesses ? (
        <div className="pledges-list">
          {businesses.map(pledges => (
            <div key={pledges.id}>
              <h4>Business name: {pledges.name}</h4>
              <h4>
                Redeemed: {pledges.subscription.redeemed ? 'Used' : 'Available'}
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
      ) : null}
    </div>
  )
}

export default CustomerPortalList
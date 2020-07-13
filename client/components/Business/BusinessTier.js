import React from 'react'

const BusinessTier = ({business}) => {
  const {tiers} = business

  return (
    <div className="business_tier">
      {tiers ? (
        <div>
          {tiers.map(tier => (
            <div id="single_tier" key={tier.id}>
              <h4>Tier: {tier.level}</h4>
              <h4>{tier.title}</h4>
              <h4>{tier.photo}</h4>
              <h4>${tier.price}</h4>
              <h4>Pledge: {tier.pledge}</h4>
              <button type="button">Edit Tier</button>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default BusinessTier

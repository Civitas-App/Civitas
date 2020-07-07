import React from 'react'

const BusinessTier = ({business}) => {
  const {tiers} = business

  return (
    <div>
      {tiers ? (
        <div>
          {tiers.map(tier => (
            <div key={tier.id}>
              <h4>Tier: {tier.level}</h4>
              <h4>{tier.title}</h4>
              <h4>${tier.price}</h4>
              <h4>Pledge: {tier.pledge}</h4>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default BusinessTier

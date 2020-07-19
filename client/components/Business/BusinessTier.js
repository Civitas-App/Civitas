import React from 'react'

const compare = (a, b) => {
  if (a.level < b.level) {
    return -1
  }
  if (a.level > b.level) {
    return 1
  }
  return 0
}

const BusinessTier = ({business}) => {
  const {tiers} = business
  let sorted = []
  if (tiers) {
    sorted = tiers.sort(compare)
  }
  console.log(sorted)

  return (
    <div className="business_tier">
      {sorted.length > 0 ? (
        <div id="business_tiers_container">
          {sorted.map(tier => (
            <div id="single_tier" key={tier.id}>
              <h4>Tier: {tier.level}</h4>
              <h4>{tier.title}</h4>
              <img src={tier.photo} mode="fit" />
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

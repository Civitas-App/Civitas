import React from 'react'
import {NavLink} from 'react-router-dom'

const BusinessPage = ({business}) => {
  return (
    <div>
      <h4>{business.name}</h4>
      <img src={business.headerPhoto} />
      <h4>{business.description}</h4>
      {business.tiers && business.tiers.length > 0 ? (
        <div>
          {business.tiers.map(tier => (
            <div key={tier.id}>
              <h4>Title: {tier.title}</h4>
              <NavLink to={`/checkout/${tier.id}`}>
                <h4>Tier: {tier.level}</h4>
              </NavLink>
              <img src={tier.photo} />
              <ul>
                <li>Pledge: {tier.pledge}</li>
              </ul>
              <h4>${tier.price}</h4>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default BusinessPage

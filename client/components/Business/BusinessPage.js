import React from 'react'
import {NavLink} from 'react-router-dom'

const BusinessPage = ({business}) => {
  return (
    <div id="business_page">
      <img id="business_profile_header" src={business.headerPhoto} />
      <img id="business_profile_avatar" src={business.avatar} />
      <h4> Company: {business.name}</h4>
      <h5>Description: {business.description}</h5>
      <h2>Select a teir level</h2>
      {business.tiers && business.tiers.length > 0 ? (
        <div id="business_page">
          {business.tiers.map(tier => (
            <div id="business_tier" key={tier.id}>
              <h4>Level: {tier.level}</h4>
              <h4>Title: {tier.title}</h4>
              <img src={tier.photo} width={200} height={100} mode="fit" />
              <h4>${tier.price}</h4>
              <NavLink to={`/checkout/${tier.id}`}>
                <h4>Join</h4>
              </NavLink>
              <ul>
                <li>Pledge: {tier.pledge}</li>
              </ul>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default BusinessPage

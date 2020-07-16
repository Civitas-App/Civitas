import React, {useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {fetchSubscriptions} from '../../store/singleCustomer'

const BusinessPage = ({business}) => {
  const singleCustomer = useSelector(state => state.singleCustomer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchSubscriptions())
  }, [])

  let subbedTiers = []
  if (singleCustomer.subscription && singleCustomer.subscription.length > 0) {
    singleCustomer.subscription.map(subscription => {
      if (subscription.business.id === business.id) {
        subbedTiers.push(subscription.tier.id)
      }
    })
  }

  return (
    <div id="business_page">
      <span>
        <img id="business_profile_header" src={business.headerPhoto} />
      </span>
      <span>
        <img id="business_profile_avatar" src={business.avatar} />
      </span>
      <h4> Company: {business.name}</h4>
      <h5>Description: {business.description}</h5>
      <h2>Select a teir level</h2>
      {business.tiers && business.tiers.length > 0 ? (
        <div>
          {business.tiers.map(tier => (
            <div id="business_tier" key={tier.id}>
              <h4>Level: {tier.level}</h4>
              <h4>Title: {tier.title}</h4>
              <img src={tier.photo} width={200} height={100} mode="fit" />
              <h4>${tier.price}</h4>
              {subbedTiers.includes(tier.id) ? (
                'Current Tier'
              ) : (
                <NavLink className="navlink" to={`/checkout/${tier.id}`}>
                  Join
                </NavLink>
              )}
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

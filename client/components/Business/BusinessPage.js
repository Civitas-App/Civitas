import React, {useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {fetchSubscriptions} from '../../store/singleCustomer'

const compare = (a, b) => {
  if (a.level < b.level) {
    return -1
  }
  if (a.level > b.level) {
    return 1
  }
  return 0
}

const BusinessPage = ({business}) => {
  const singleCustomer = useSelector(state => state.singleCustomer)
  const dispatch = useDispatch()

  const {tiers} = business
  let sorted = []
  if (tiers) {
    sorted = tiers.sort(compare)
  }

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
    <div id="business_portal">
      <div id="business_profile">
        <div className="header">
          <img id="business_profile_header" src={business.headerPhoto} />
        </div>
        <div className="business_profile">
          <h4>{business.name}</h4>
          <img id="business_profile_avatar" src={business.avatar} />
          <h5>{business.description}</h5>
        </div>

        <div className="business_tier">
          <div>
            <h2>Select a teir level</h2>
          </div>

          {business.tiers && sorted.length > 0 ? (
            <div id="business_tiers_container">
              {sorted.map(tier => (
                <div id="single_tier" key={tier.id}>
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
      </div>
    </div>
  )
}

export default BusinessPage

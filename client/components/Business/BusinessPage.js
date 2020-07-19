import React, {useEffect, useState} from 'react'
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
  console.log(sorted)
  // let list = business.tiers
  // const [tierList, setTierList] = useState(list)
  // const sortByLevel = () => {
  //   const sorted = tierList.sort((a, b) => {
  //     return b.level - a.level
  //   })
  //   setTierList(sorted)
  // }
  // let sortedTiers = sortByLevel

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
      {business.tiers && sorted.length > 0 ? (
        <div>
          {sorted.map(tier => (
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

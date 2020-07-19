import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {fetchSubscriptions} from '../../store/business/subscription'
import {NavLink} from 'react-router-dom'

/*parent component for business analytics page.
shows all subscription data and will drill into revenue forecast */

const BusinessAnalytics = () => {
  const subscription = useSelector(state => state.subscription)
  const dispatch = useDispatch()

  useEffect(
    () => {
      dispatch(fetchSubscriptions())
    },
    [fetchSubscriptions]
  )

  let total = 0
  subscription.forEach(subscribe => {
    total += subscribe.tier.price
  })
  return (
    <div id="business_analytics">
      <h1>Total Revenue forecast this Month: ${total}</h1>
      <h1>Number of Subscriptions: {subscription.length}</h1>
      <button type="button">
        <NavLink className="navlink" to="/business/portal">
          Back to Portal
        </NavLink>
      </button>
    </div>
  )
}

export default BusinessAnalytics

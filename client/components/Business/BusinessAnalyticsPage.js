import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {fetchSubscriptions} from '../../store/business/subscription'

/*parent component for business analytics page.
shows all subscription data and will drill into revenue forecast */

const BusinessAnalytics = () => {
  const subscription = useSelector(state => state.subscription)
  console.log(subscription)
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
  return <div>{total}</div>
}

export default BusinessAnalytics

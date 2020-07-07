import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {fetchSubscriptions} from '../../store/business/getBusiness'

/*parent component for business analytics page.
shows all subscription data and will drill into revenue forecast */

const BusinessAnalytics = () => {
  const business = useSelector(state => state.business)
  console.log(business)
  const dispatch = useDispatch()

  useEffect(
    () => {
      dispatch(fetchSubscriptions())
    },
    [fetchSubscriptions]
  )

  let total = 0
  business.forEach(subscribe => {
    total += subscribe.tier.price
  })
  return <div>{total}</div>
}

export default BusinessAnalytics

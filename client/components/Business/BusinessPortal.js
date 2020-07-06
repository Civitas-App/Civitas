import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {fetchBusiness} from '../../store/business'
import BusinessTier from './BusinessTier'

const BusinessPortal = () => {
  const business = useSelector(state => state.business)
  const dispatch = useDispatch()

  useEffect(
    () => {
      dispatch(fetchBusiness())
    },
    [fetchBusiness]
  )

  return (
    <div>
      <BusinessTier business={business} key={business.id} />
    </div>
  )
}

export default BusinessPortal

import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {fetchBusiness} from '../../store/business/getBusiness'
import BusinessTier from './BusinessTier'
import BusinessProfile from './BusinessProfile'

/*Parent component
Children: BusinessProfile, BusinessTier
Desc:
*/
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
      Business Portal
      <BusinessTier business={business} key={business.id} />
    </div>
  )
}

export default BusinessPortal

import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {fetchBusiness} from '../../store/business/createBusiness'
import BusinessTier from './BusinessTier'
import BusinessProfile from './BusinessProfile'
import {NavLink} from 'react-router-dom'

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
    <div className="customer-profile">
      <button type="button">
        <NavLink className="navlink" to="/business/portal/analytics">
          See your analytics page here
        </NavLink>
      </button>
      <div className="customer-info">
        <BusinessProfile business={business} />
      </div>
      <div id="business_tier">
        <BusinessTier business={business} key={business.id} />
      </div>
    </div>
  )
}

export default BusinessPortal

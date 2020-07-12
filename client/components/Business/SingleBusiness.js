import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {singleBusiness} from '../../store/business/singleBusiness'
import BusinessPage from './BusinessPage'

const SingleBusiness = props => {
  const dispatch = useDispatch()
  const business = useSelector(state => state.business)

  useEffect(() => {
    const {businessId} = props.match.params
    dispatch(singleBusiness(businessId))
    console.log('singleB businessID', businessId)
  }, [])

  console.log(business)

  return (
    <div id="single_business">
      <BusinessPage business={business} />
    </div>
  )
}

export default SingleBusiness

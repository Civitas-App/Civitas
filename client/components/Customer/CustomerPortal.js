import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {
  fetchSingleCustomer,
  fetchSubscriptions
} from '../../store/singleCustomer'
import CustomerPortalList from './CustomerPortalList'

const CustomerPortal = () => {
  const singleCustomer = useSelector(state => state.singleCustomer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchSingleCustomer())
    dispatch(fetchSubscriptions())
  }, [])
  return (
    <div id="customer_portal">
      <CustomerPortalList
        singleCustomer={singleCustomer}
        key={singleCustomer.id}
      />
    </div>
  )
}

export default CustomerPortal

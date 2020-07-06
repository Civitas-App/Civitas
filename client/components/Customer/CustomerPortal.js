import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {fetchCustomer} from '../../store/customer'
import CustomerPortalList from './CustomerPortalList'

const CustomerPortal = () => {
  const customer = useSelector(state => state.customer)
  const dispatch = useDispatch()

  useEffect(
    () => {
      dispatch(fetchCustomer())
    },
    [fetchCustomer]
  )

  return (
    <div>
      <CustomerPortalList customer={customer} key={customer.id} />
    </div>
  )
}

export default CustomerPortal

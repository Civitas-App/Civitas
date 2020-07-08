import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {fetchCustomer} from '../../store/singleCustomer'
import CustomerPortalList from './CustomerPortalList'

const CustomerPortal = () => {
  const customer = useSelector(state => state.singleCustomer)
  const dispatch = useDispatch()
  console.log(customer)
  useEffect(
    () => {
      dispatch(fetchCustomer())
    },
    [fetchCustomer]
  )

  return (
    <div>
      Welcome to your portal
      <CustomerPortalList customer={customer} key={customer.id} />
    </div>
  )
}

export default CustomerPortal

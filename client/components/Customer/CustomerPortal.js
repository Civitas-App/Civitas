import React, {useEffect, useState} from 'react'
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
    console.log('hehehe')
    dispatch(fetchSingleCustomer())
    dispatch(fetchSubscriptions())
  }, [])
  console.log('singlecustomer', singleCustomer)
  return (
    <div>
      <CustomerPortalList
        singleCustomer={singleCustomer}
        key={singleCustomer.id}
      />
    </div>
  )
}

export default CustomerPortal

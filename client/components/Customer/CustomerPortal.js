import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {fetchSingleCustomer, fetchCustomer} from '../../store/singleCustomer'
// import { fetchCustomer} from '../../store/customer'
import CustomerPortalList from './CustomerPortalList'

const CustomerPortal = () => {
  const [loaded, setLoaded] = useState(false)
  const singleCustomer = useSelector(state => state.singleCustomer)
  const dispatch = useDispatch()

  useEffect(
    () => {
      Promise.all([dispatch(fetchSingleCustomer()), dispatch(fetchCustomer())])
        .then(values => {
          console.log(values)
        })
        .catch(error => {
          console.log(error)
        })
      setLoaded(true)
    },
    [fetchCustomer, fetchSingleCustomer]
  )
  return (
    <div>
      {loaded ? (
        <CustomerPortalList
          singleCustomer={singleCustomer}
          key={singleCustomer.id}
        />
      ) : null}
    </div>
  )
}

export default CustomerPortal

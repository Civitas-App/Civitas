import React from 'react'
import {setCustomerSubscription} from '../../store/singleCustomer'
import {useDispatch} from 'react-redux'
import history from '../../history'

const ConirmationPage = ({tierId}) => {
  const dispatch = useDispatch()

  const submit = () => {
    console.log('htting')
    dispatch(setCustomerSubscription(tierId))
    history.push('/home')
  }

  return (
    <div className="modal">
      <h2>Click to subscribe</h2>
      <button type="button" onClick={submit}>
        Confirm Sub
      </button>
    </div>
  )
}

export default ConirmationPage

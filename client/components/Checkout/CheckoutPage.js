import React from 'react'
import {useDispatch} from 'react-redux'
import {setCustomerSuscription} from '../../store/singleCustomer'

const CheckoutPage = props => {
  const dispatch = useDispatch()

  const handleClick = e => {
    e.preventDefault()
    const {tierId} = props.match.params
    dispatch(setCustomerSuscription(tierId))
    props.history.push('/confirmation')
  }

  return (
    <div id="checkout_page">
      <button type="button" onClick={handleClick}>
        Subscribe
      </button>
    </div>
  )
}

export default CheckoutPage

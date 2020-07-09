import axios from 'axios'

const GET_CUSTOMER = 'GET_CUSTOMER'
const SET_SUBSCRIPTION = 'SET_SUBSCRIPTION'

const getCustomer = customer => ({type: GET_CUSTOMER, customer})
const setSubscription = tier => ({type: SET_SUBSCRIPTION, tier})

export const fetchCustomer = () => async dispatch => {
  try {
    const {data: customerData} = await axios.get(
      '/api/customer/pledges/business'
    )
    console.log(customerData)
    dispatch(getCustomer(customerData))
  } catch (error) {
    console.log('error in fetchCustomer', error)
  }
}

export const setCustomerSuscription = tierId => async dispatch => {
  try {
    console.log('1')
    const {data: subscription} = await axios.post(
      `api/customer/pledge/${tierId}`
    )
    console.log('2')
    dispatch(setSubscription(subscription))
    console.log('3')
  } catch (error) {
    console.log('error in setSubscription', error)
  }
}

// reducer
const singleCustomer = (state = {}, action) => {
  switch (action.type) {
    case GET_CUSTOMER:
      return action.customer
    case SET_SUBSCRIPTION:
      return {...state, ...action.tier}
    default:
      return state
  }
}

export default singleCustomer

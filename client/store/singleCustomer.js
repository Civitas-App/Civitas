import axios from 'axios'

const GET_CUSTOMER = 'GET_CUSTOMER'
const SET_SUBSCRIPTION = 'SET_SUBSCRIPTION'

const getCustomer = customer => ({type: GET_CUSTOMER, customer})
const setSubscription = tier => ({type: SET_SUBSCRIPTION, tier})

export const fetchSingleCustomer = () => async dispatch => {
  try {
    const {data: customerData} = await axios.get('/api/customer')

    if (customerData) {
      dispatch(getCustomer(customerData))
    } else {
      console.log('no customer yet')
    }
  } catch (error) {
    console.log('error in fetchSingleCustomer', error)
  }
}

export const fetchSubscriptions = () => async dispatch => {
  try {
    const {data: subscriptions} = await axios.get(
      '/api/customer/pledges/business'
    )
    dispatch(setSubscription(subscriptions))
  } catch (error) {
    console.log('error in fetchCustomer', error)
  }
}

export const setCustomerSubscription = tierId => async dispatch => {
  try {
    await axios.post(`api/customer/pledge/${tierId}`)
    dispatch(fetchSubscriptions())
  } catch (error) {
    console.log('error in setSubscription', error)
  }
}
export const updateCustomerCoupon = (
  businessId,
  randomNumber
) => async dispatch => {
  try {
    await axios.post('/api/customer/update/coupon/code', {
      businessId,
      randomNumber
    })
    dispatch(fetchSubscriptions(businessId))
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
      return {...state, subscription: action.tier}
    default:
      return state
  }
}

export default singleCustomer

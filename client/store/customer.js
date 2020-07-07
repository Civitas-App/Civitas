import axios from 'axios'

const GET_CUSTOMER = 'GET_CUSTOMER'
const CREATE_CUSTOMER = 'CREATES_CUSTOMER'

// action creator
const getCustomer = customer => ({type: GET_CUSTOMER, customer})
const createCustomer = customer => ({type: GET_CUSTOMER, customer})

// thunk
export const fetchCustomer = () => async dispatch => {
  try {
    const {data: customerData} = await axios.get(
      '/api/customer/pledges/business'
    )
    dispatch(getCustomer(customerData))
  } catch (error) {
    console.log('error in fetchCustomer', error)
  }
}

export const createCustomerSignup = customerInfo => async dispatch => {
  try {
    console.log('1')
    const {data: customerData} = await axios.post(
      '/api/customer/create',
      customerInfo
    )
    console.log('2')
    dispatch(createCustomer(customerData))
    console.log('3')
  } catch (error) {
    console.log('error in createCustomerSignup', error)
  }
}

// reducer
const customer = (state = [], action) => {
  switch (action.type) {
    case GET_CUSTOMER:
      return action.customer
    case CREATE_CUSTOMER:
      return [action.customer]
    default:
      return state
  }
}

export default customer

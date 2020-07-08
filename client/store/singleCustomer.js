import axios from 'axios'

const GET_CUSTOMER = 'GET_CUSTOMER'

const getCustomer = customer => ({type: GET_CUSTOMER, customer})

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

// reducer
const singleCustomer = (state = {}, action) => {
  switch (action.type) {
    case GET_CUSTOMER:
      return action.customer
    default:
      return state
  }
}

export default singleCustomer

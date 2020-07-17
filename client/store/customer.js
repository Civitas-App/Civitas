import axios from 'axios'

const CREATE_CUSTOMER = 'CREATES_CUSTOMER'

const createCustomer = customer => ({type: CREATE_CUSTOMER, customer})

export const createCustomerSignup = customerInfo => async dispatch => {
  try {
    const {data: customerData} = await axios.post(
      '/api/customer/create',
      customerInfo
    )
    dispatch(createCustomer(customerData))
  } catch (error) {
    console.log('error in createCustomerSignup', error)
  }
}

// reducer
const customer = (state = [], action) => {
  switch (action.type) {
    case CREATE_CUSTOMER:
      return [action.customer]
    default:
      return state
  }
}

export default customer

import axios from 'axios'

const GET_CUSTOMER = 'GET_CUSTOMER'

// action creator
const getCustomer = customer => ({type: GET_CUSTOMER, customer})

// thunk
export const fetchCustomer = () => async dispatch => {
  try {
    console.log('1')
    const {data: customerData} = await axios.get(
      '/api/customer/pledges/business'
    )
    console.log('2')
    dispatch(getCustomer(customerData))
    console.log('3')
  } catch (error) {
    console.log('error in fetchCustomer', error)
  }
}

// reducer
const customer = (state = [], action) => {
  switch (action.type) {
    case GET_CUSTOMER:
      return action.customer
    default:
      return state
  }
}

export default customer

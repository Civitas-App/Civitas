import axios from 'axios'

const GET_BUSINESS = 'GET_BUSINESS'
const GET_SUBSCRIPTIONS = 'GET_SUBSCRIPTIONS'

// action creator
const getBusiness = business => ({type: GET_BUSINESS, business})

const getSubscriptions = subscription => ({
  type: GET_SUBSCRIPTIONS,
  subscription
})
// thunk
export const fetchBusiness = () => async dispatch => {
  try {
    const {data: businessData} = await axios.get('/api/business/portal')
    dispatch(getBusiness(businessData))
  } catch (error) {
    console.log('error in fetchBusiness', error)
  }
}

export const fetchSubscriptions = () => async dispatch => {
  try {
    const {data: subscriptionData} = await axios.get(
      '/api/business/portal/analytics'
    )
    dispatch(getSubscriptions(subscriptionData))
  } catch (error) {
    console.log('error in fetchSubscriptions', error)
  }
}

// reducer
const business = (state = [], action) => {
  switch (action.type) {
    case GET_BUSINESS:
      return action.business
    case GET_SUBSCRIPTIONS:
      return action.subscription
    default:
      return state
  }
}

export default business
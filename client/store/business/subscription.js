import axios from 'axios'

const GET_SUBSCRIPTIONS = 'GET_SUBSCRIPTIONS'

// action creator

const getSubscriptions = subscription => ({
  type: GET_SUBSCRIPTIONS,
  subscription
})

// thunk
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
const subscription = (state = [], action) => {
  switch (action.type) {
    case GET_SUBSCRIPTIONS:
      return action.subscription
    default:
      return state
  }
}

export default subscription

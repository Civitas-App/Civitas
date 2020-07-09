import axios from 'axios'

const GET_BUSINESS = 'GET_BUSINESS'

// action creator
const getBusiness = business => ({type: GET_BUSINESS, business})

// thunk
export const fetchBusiness = () => async dispatch => {
  try {
    const {data: businessData} = await axios.get('/api/business/portal')
    dispatch(getBusiness(businessData))
  } catch (error) {
    console.log('error in fetchBusiness', error)
  }
}
export const singleBusiness = businessId => async dispatch => {
  try {
    console.log('1')
    const {data: business} = await axios.get(
      `/api/single/business/${businessId}`
    )
    console.log('2')
    dispatch(getBusiness(business))
    console.log('3')
  } catch (error) {
    console.log('error in singleBusiness', error)
  }
}

// reducer
const business = (state = {}, action) => {
  switch (action.type) {
    case GET_BUSINESS:
      return action.business
    default:
      return state
  }
}

export default business

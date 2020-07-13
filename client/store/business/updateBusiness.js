import axios from 'axios'

const UPDATE_BUSINESS = 'UPDATE_BUSINESS'

const updateBusiness = business => ({type: UPDATE_BUSINESS, business})

export const updateTier = info => async dispatch => {
  try {
    const business = await axios.post('/api/business/updatetier', info)
    dispatch(updateBusiness(business.data))
  } catch (error) {
    console.log(error)
  }
}
const businessUpdate = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_BUSINESS:
      return action.business
    default:
      return state
  }
}

export default businessUpdate

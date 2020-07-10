import axios from 'axios'

const CREATE_BUSINESS = 'CREATE_BUSINESS'

const makeBusiness = business => ({type: CREATE_BUSINESS, business})

export const createBusiness = businessInfo => async dispatch => {
  try {
    const business = await axios.post('/api/business/create', businessInfo)
    console.log(businessInfo)
    dispatch(makeBusiness(business.data))
  } catch (error) {
    console.log('error in creating business', error)
  }
}
export const createTier = info => async dispatch => {
  try {
    const business = await axios.post('/api/business/createtier', info)
    dispatch(makeBusiness(business.data))
  } catch (error) {
    console.log(error)
  }
}
const businessCreate = (state = {}, action) => {
  switch (action.type) {
    case CREATE_BUSINESS:
      return action.business
    default:
      return state
  }
}

export default businessCreate

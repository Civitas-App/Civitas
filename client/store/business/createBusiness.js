import axios from 'axios'

const CREATE_BUSINESS = 'CREATE_BUSINESS'
const GET_BUSINESS = 'GET_BUSINESS'

const makeBusiness = business => ({type: CREATE_BUSINESS, business})
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
    await axios.post('/api/business/createtier', info)
    dispatch(fetchBusiness(info))
  } catch (error) {
    console.log(error)
  }
}

const businessCreate = (state = {}, action) => {
  switch (action.type) {
    case GET_BUSINESS:
      return action.business
    case CREATE_BUSINESS:
      return {...state, ...action.business}
    default:
      return state
  }
}

export default businessCreate

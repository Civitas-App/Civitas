import axios from 'axios'

const GET_BUSINESSES = 'GET_BUSINESSES'

// action creator
const getBusinesses = businesses => ({type: GET_BUSINESSES, businesses})

// thunk
export const getAllBussiness = () => async dispatch => {
  try {
    const {data: businessData} = await axios.get('/api/business')
    dispatch(getBusinesses(businessData))
  } catch (error) {
    console.log('error in fetchBusiness', error)
  }
}

export const searchBusiness = query => async dispatch => {
  try {
    if (!query) {
      const {data: businesses} = await axios.get(`/api/business`)
      dispatch(getBusinesses(businesses))
    } else {
      const {data: businesses} = await axios.get(`/api/search?search=${query}`)
      dispatch(getBusinesses(businesses))
    }
  } catch (error) {
    console.log('error in fetchProducts', error)
  }
}

export const getCategory = query => async dispatch => {
  try {
    const {data: category} = await axios.get(
      `/api/business/filter/category?category=${query}`
    )
    dispatch(getBusinesses(category))
  } catch (error) {
    console.log('error in category product thunk', error)
  }
}

// reducer
const businesses = (state = [], action) => {
  switch (action.type) {
    case GET_BUSINESSES:
      return action.businesses
    default:
      return state
  }
}

export default businesses

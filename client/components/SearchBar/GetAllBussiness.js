import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getAllBussiness, getCategory} from '../../store/business/getBusiness'

const GetAllBussiness = () => {
  const business = useSelector(state => state.business)
  const dispatch = useDispatch()

  useEffect(
    () => {
      dispatch(getAllBussiness())
    },
    [getAllBussiness]
  )

  const handleChange = e => {
    dispatch(getCategory(e.target.value))
  }

  return (
    <div>
      <select onChange={handleChange}>
        <option value="restaurant">Restaurant</option>
        <option value="music">Music</option>
        <option value="gym">Gym</option>
        <option value="barbershop">Barbershop</option>
        <option value="other">Other</option>
      </select>
      {business.map(query => (
        <div key={query.id}>
          <h4>Name: {query.name}</h4>
          <img src={query.headerPhoto} />
          <h4>Description: {query.description}</h4>
        </div>
      ))}
    </div>
  )
}

export default GetAllBussiness

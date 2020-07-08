import React from 'react'
import {useDispatch} from 'react-redux'
import {getCategory} from '../../store/business/getBusiness'
import history from '../../history'

const CategoryFilter = () => {
  const dispatch = useDispatch()

  const handleChange = e => {
    dispatch(getCategory(e.target.value))
    history.push(`/filter/businesses?category=${e.target.value}`)
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
    </div>
  )
}

export default CategoryFilter

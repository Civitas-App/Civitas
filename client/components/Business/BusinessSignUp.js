import React, {useHook} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {createBusiness} from '../../store/business/createBusiness'
import useForm from '../Utility/UseForm'
import CreateTier from './CreateTier'

const BusinessForm = props => {
  const [values, handleChange] = useForm({
    name: '',
    location: '',
    description: '',
    category: ''
  })

  const dispatch = useDispatch()
  console.log('values', values.location)

  const handleSubmit = e => {
    e.preventDefault()
    const {name, location, description, category} = values
    dispatch(
      createBusiness({
        name,
        location,
        description,
        category
      })
    )
    props.history.push('/business/createtier')
  }
  return (
    <div>
      <h1>Business Sign Up Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" />
        <input
          placeholder="Name - Required"
          name="name"
          type="text"
          value={values.name}
          onChange={handleChange}
        />
        <label htmlFor="location" />
        <input
          placeholder="Location City - Required"
          name="location"
          type="text"
          value={values.location}
          onChange={handleChange}
        />
        <label htmlFor="description" />
        <input
          placeholder="Business Description - required"
          name="description"
          type="text"
          value={values.description}
          onChange={handleChange}
        />
        <label htmlFor="Category" />
        {/* <select onChange={handleChange} value={values.category}>
          <option value="restaurant">Choose a Category</option>
          <option value="restaurant">Restaurant</option>
          <option value="fashion">Clothing Store</option>
          <option value="music">Music</option>
          <option value="gym">Gym</option>
          <option value="barbershop">Barbershop</option>
          <option value="other">Other</option>
        </select> */}
        <input
          placeholder="category - required"
          name="category"
          type="text"
          value={values.category}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default BusinessForm

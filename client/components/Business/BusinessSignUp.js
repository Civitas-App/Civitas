import React, {useHook, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {createBusiness} from '../../store/business/createBusiness'
import useForm from '../Utility/UseForm'
import CreateTier from './CreateTier'

const BusinessForm = props => {
  const [category, setCategory] = useState('')
  const [values, setChange] = useForm({
    name: '',
    location: '',
    description: ''
  })
  const handleChange = e => {
    setCategory(e.target.value)
  }
  console.log(category)
  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()
    const {name, location, description} = values
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
    <div id="form">
      <div className="form_header">
        <h1>Business Sign Up Form</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form_input">
          <label htmlFor="name" />
          <div>
            <input
              placeholder="Name - Required"
              name="name"
              type="text"
              value={values.name}
              onChange={setChange}
            />
          </div>
        </div>
        <div className="form_input">
          <label htmlFor="location" />
          <div>
            <input
              placeholder="Location City - Required"
              name="location"
              type="text"
              value={values.location}
              onChange={setChange}
            />
          </div>
        </div>
        <div className="form_input">
          <label htmlFor="description" />
          <div>
            <input
              placeholder="Business Description - required"
              name="description"
              type="text"
              value={values.description}
              onChange={setChange}
            />
          </div>
        </div>
        <div className="form_input">
          <label htmlFor="Category" />
          <div>
            <select defaultValue={category} onChange={handleChange}>
              <option>Choose a Category</option>
              <option value="restaurant">Restaurant</option>
              <option value="fashion">Clothing Store</option>
              <option value="music">Music</option>
              <option value="gym">Gym</option>
              <option value="barbershop">Barbershop</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default BusinessForm

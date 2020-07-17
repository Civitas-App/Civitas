import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {createBusiness} from '../../store/business/createBusiness'
import useForm from '../Utility/UseForm'

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
    <div className="signup">
      <h1>Business Sign Up Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" />
        <input
          placeholder="Name - Required"
          name="name"
          type="text"
          value={values.name}
          onChange={setChange}
        />
        <label htmlFor="location" />
        <input
          placeholder="Location City - Required"
          name="location"
          type="text"
          value={values.location}
          onChange={setChange}
        />
        <label htmlFor="description" />
        <input
          placeholder="Business Description - required"
          name="description"
          type="text"
          value={values.description}
          onChange={setChange}
        />
        <label htmlFor="Category" />
        <select defaultValue={category} onChange={handleChange}>
          <option>Choose a Category</option>
          <option value="restaurant">Restaurant</option>
          <option value="fashion">Clothing Store</option>
          <option value="music">Music</option>
          <option value="gym">Gym</option>
          <option value="barbershop">Barbershop</option>
          <option value="other">Other</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default BusinessForm

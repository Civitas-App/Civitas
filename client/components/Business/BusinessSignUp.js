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
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <h3>Business Name</h3>
        <label htmlFor="name" />
        <input
          placeholder="Name - Required"
          name="name"
          type="text"
          value={values.name}
          onChange={setChange}
        />
        <h3>Address</h3>
        <label htmlFor="location" />
        <input
          placeholder="Location City - Required"
          name="location"
          type="text"
          value={values.location}
          onChange={setChange}
        />
        <h3>Description</h3>
        <label htmlFor="description" />
        <textarea
          placeholder="Business Description - required"
          name="description"
          type=""
          value={values.description}
          onChange={setChange}
        />
        <h3>Business Category</h3>
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

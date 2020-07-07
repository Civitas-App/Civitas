import React, {useHook} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {createBusiness} from '../../store/business/createBusiness'
import useForm from '../Customer/UseForm'

const BusinessForm = () => {
  const [values, handleChange] = useForm({
    name: '',
    location: '',
    headerPhoto: '',
    avatar: '',
    description: '',
    category: ''
  })
  const dispatch = useDispatch()
  console.log('values', values.location)

  const handleSubmit = e => {
    e.preventDefault()
    const {name, location, headerPhoto, avatar, description, category} = values
    dispatch(
      createBusiness({
        name,
        location,
        headerPhoto,
        avatar,
        description,
        category
      })
    )
  }
  return (
    <div>
      <h1>Business Sign Up Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" />
        <input
          placeholder="name - required"
          name="name"
          type="text"
          value={values.name}
          onChange={handleChange}
        />
        <label htmlFor="location" />
        <input
          placeholder="location - required"
          name="location"
          type="text"
          value={values.location}
          onChange={handleChange}
        />
        <label htmlFor="headerPhoto" />
        <input
          placeholder="headerphoto"
          name="headerPhoto"
          type="text"
          value={values.headerPhoto}
          onChange={handleChange}
        />
        <label htmlFor="avatar" />
        <input
          placeholder="avatar"
          name="avatar"
          type="text"
          value={values.avatar}
          onChange={handleChange}
        />
        <label htmlFor="description" />
        <input
          placeholder="description - required"
          name="description"
          type="text"
          value={values.description}
          onChange={handleChange}
        />
        <label htmlFor="category" />
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

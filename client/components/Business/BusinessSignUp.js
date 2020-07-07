import React, {useState, useHook} from 'react'
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

  return (
    <div>
      <h1>Business Sign Up Form</h1>
      <form>
        <input placeholder="name - required" name={name} />
        <input placeholder="location - required" name={location} />
        <input placeholder="headerphoto" name={headerPhoto} />
        <input placeholder="avatar" name={avatar} />
        <input placeholder="description - required" name={description} />
        <input placeholder="category - required" name={category} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default BusinessForm

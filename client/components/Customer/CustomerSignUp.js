import React, {useHook} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {createCustomerSignup} from '../../store/customer'
import useForm from './UseForm'

const CustomerSignUp = () => {
  const [values, handleChange] = useForm({name: '', location: '', avatar: ''})
  //mapDispatch
  const dispatch = useDispatch()
  console.log('values', values.location)

  const handleSubmit = e => {
    e.preventDefault()
    const {name, location, avatar} = values
    dispatch(createCustomerSignup({name, location, avatar}))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" />
        <input
          name="name"
          type="text"
          value={values.email}
          onChange={handleChange}
        />
        <label htmlFor="location" />
        <input
          name="location"
          type="text"
          value={values.location}
          onChange={handleChange}
        />
        <label htmlFor="avatar" />
        <input
          name="avatar"
          type="text"
          value={values.avatar}
          onChange={handleChange}
        />
        <button type="submit">Create Accounts</button>
      </form>
    </div>
  )
}
export default CustomerSignUp
//api/customers/create

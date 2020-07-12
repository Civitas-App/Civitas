import React, {useHook} from 'react'
import {useDispatch} from 'react-redux'
import {createCustomerSignup} from '../../store/customer'
import useForm from '../Utility/UseForm'

const CustomerSignUp = props => {
  const [values, handleChange] = useForm({name: '', location: ''})
  //mapDispatch
  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()
    const {name, location} = values
    dispatch(createCustomerSignup({name, location}))
    props.history.push('/user/portal')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" />
        <input
          placeholder="Name - Required"
          name="name"
          type="text"
          value={values.email}
          onChange={handleChange}
        />
        <label htmlFor="location" />
        <input
          placeholder="City - Required"
          name="location"
          type="text"
          value={values.location}
          onChange={handleChange}
        />
        <button type="submit">Create Accounts</button>
      </form>
    </div>
  )
}
export default CustomerSignUp

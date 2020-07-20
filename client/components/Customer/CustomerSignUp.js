import React from 'react'
import {useDispatch} from 'react-redux'
import {createCustomerSignup} from '../../store/customer'
import useForm from '../Utility/UseForm'
// import {ErrorMessage} from '@hookform/error-message'

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
    <div className="signup">
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <h3>Name</h3>
        <label htmlFor="name" />
        <input
          placeholder="Name - Required"
          name="name"
          type="text"
          message="Dont Forget Your Username Should Be Cool!"
          value={values.email}
          onChange={handleChange}
        />
        <h3>Location (city and state)</h3>
        <label htmlFor="location" />
        <input
          placeholder="City - Required"
          name="location"
          type="text"
          value={values.location}
          onChange={handleChange}
        />
        <div>
          <button type="submit">Create Account</button>
        </div>
      </form>
    </div>
  )
}
export default CustomerSignUp

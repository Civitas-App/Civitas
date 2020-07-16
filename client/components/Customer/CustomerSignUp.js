import React, {useHook} from 'react'
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
    <div id="form">
      <div className="form_header">
        <h2>Signup</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form_input">
          <label htmlFor="name" />
          <div>
            <input
              placeholder="Name - Required"
              name="name"
              type="text"
              message="Dont Forget Your Username Should Be Cool!"
              value={values.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form_input">
          <label htmlFor="location" />
          <input
            placeholder="City - Required"
            name="location"
            type="text"
            value={values.location}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Create Account</button>
      </form>
    </div>
  )
}
export default CustomerSignUp

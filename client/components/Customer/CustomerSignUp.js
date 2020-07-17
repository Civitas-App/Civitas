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
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" />
        <input
          placeholder="Name - Required"
          name="name"
          type="text"
          message="Dont Forget Your Username Should Be Cool!"
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

import React, {useHook} from 'react'
import {useDispatch} from 'react-redux'
import {createCustomerSignup} from '../../store/customer'
import useForm from '../Utility/UseForm'
// import {ErrorMessage} from '@hookform/error-message'

const CustomerSignUp = props => {
  const [values, handleChange] = useForm({name: '', location: '', avatar: ''})
  //mapDispatch
  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()
    const {name, location, avatar} = values
    dispatch(createCustomerSignup({name, location, avatar}))
    props.history.push('/user/portal')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" />
        <input
          placeholder="name - required"
          name="name"
          type="text"
          message="Dont Forget Your Username Should Be Cool!"
          value={values.email}
          onChange={handleChange}
        />
        <label htmlFor="location" />
        <input
          placeholder="City - required"
          name="location"
          type="text"
          value={values.location}
          onChange={handleChange}
        />
        <label htmlFor="avatar" />
        <input
          placeholder="avatar - Not Required"
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

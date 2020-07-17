import React, {useState, useEffect} from 'react'
import {updateUser} from '../../store/user'
import {useDispatch} from 'react-redux'

const HandleSignUp = props => {
  const [role, setRole] = useState(null)
  const dispatch = useDispatch()

  useEffect(
    () => {
      // function update() {
      // You can await here
      dispatch(updateUser(role))
      if (role === 'customer') {
        return props.history.push('/user/portal/signup')
      } else if (role === 'business') {
        return props.history.push('/signup/business')
      }
      // }
      // update()
    },
    [role]
  )
  return (
    <div id="button_signup">
      <button
        id="handleSignUp"
        value="customer"
        type="submit"
        onClick={() => {
          setRole('customer')
        }}
      >
        Continue as a Customer
      </button>
      <button
        id="handleSignUp"
        value="business"
        type="submit"
        onClick={() => {
          setRole('business')
        }}
      >
        Continue as a Business
      </button>
    </div>
  )
}

export default HandleSignUp

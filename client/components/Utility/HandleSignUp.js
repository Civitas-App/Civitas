import React, {useState, useEffect} from 'react'
import axios from 'axios'

const HandleSignUp = props => {
  const [role, setRole] = useState(null)

  useEffect(
    () => {
      async function update() {
        // You can await here
        console.log('role before axios', role)
        await axios.post('/api/users/signup', {role})
        console.log('role', role)
        if (role === 'customer') {
          return props.history.push('/user/portal/signup')
        } else if (role === 'business') {
          return props.history.push('/signup/business')
        }
      }
      update()
    },
    [role]
  )
  return (
    <div>
      <button
        value="customer"
        type="submit"
        onClick={() => {
          setRole('customer')
        }}
      >
        Continue as a Customer
      </button>
      <button
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

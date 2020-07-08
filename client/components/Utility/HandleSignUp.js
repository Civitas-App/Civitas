import React, {useState, useEffect} from 'react'

import axios from 'axios'

const HandleSignUp = () => {
  const [role, setRole] = useState('')

  useEffect(() => {
    async function update() {
      // You can await here

      await axios.post('/api/users/signup', role)
    }
    update()
  })
  return (
    <div>
      <button
        value="customer"
        type="submit"
        onClick={() => setRole({role: 'customer'})}
      >
        Continue as a Customer
      </button>
      <button
        value="business"
        type="submit"
        onClick={() => {
          setRole({role: 'business'})
        }}
      >
        Continue as a Business
      </button>
    </div>
  )
}

export default HandleSignUp

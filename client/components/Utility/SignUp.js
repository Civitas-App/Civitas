import React from 'react'
import {Link} from 'react-router-dom'

function SignUp() {
  return (
    <div>
      <h1>Sign Up</h1>
      <Link to="/customer/signup">
        <button type="button">User Sign Up</button>
      </Link>
      <Link to="/business/signup">
        <button type="button">Business Sign Up</button>
      </Link>
    </div>
  )
}

export default SignUp

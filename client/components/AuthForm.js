import React from 'react'

/**
 * COMPONENT
 */
const AuthForm = () => {
  return (
    <form method="get" action="/auth/google">
      <button type="submit">Login with Google</button>
    </form>
  )
}

export default AuthForm

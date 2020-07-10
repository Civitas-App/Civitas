import React from 'react'
import {NavLink} from 'react-router-dom'

const ConirmationPage = () => {
  return (
    <div className="modal">
      <h2>Thank you for subscribing!</h2>
      <NavLink to="/">Return to home page</NavLink>
      {/* <NavLink to="/home">Return to profile</NavLink> */}
    </div>
  )
}

export default ConirmationPage

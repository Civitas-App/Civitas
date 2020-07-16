import React from 'react'
import {NavLink} from 'react-router-dom'

const ConirmationPage = () => {
  return (
    <div className="modal">
      <h2>Thank you for subscribing!</h2>
      <NavLink className="navlink" to="/home">
        Return to home page
      </NavLink>
    </div>
  )
}

export default ConirmationPage

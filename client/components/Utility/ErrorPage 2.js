import React from 'react'
import {NavLink} from 'react-router-dom'

export default function ErrorPage() {
  return (
    <div>
      <h1>Oopsie Doopsie! Something went wrong!</h1>
      <img src="/1_oTOmPQFJQSOHrYHWnxytgA.png" />
      <button type="button">
        <NavLink to="/home">Go Back Home</NavLink>
      </button>
    </div>
  )
}

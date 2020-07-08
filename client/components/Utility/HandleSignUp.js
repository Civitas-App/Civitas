import React, {useState} from 'react'
import {makeUser} from '../../store/user'

const HandleSignUp = () => {
  const [role, setRole] = useState()
  return (
    <div
      onClick={e => {
        console.log(e)
      }}
    >
      <button value="customer" type="button">
        Continue as a Customer
      </button>
      <button value="business" type="button">
        Continue as a Business
      </button>
    </div>
  )
}

export default HandleSignUp

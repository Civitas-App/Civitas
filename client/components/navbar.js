import React from 'react'
import {connect} from 'react-redux'
import {Link, NavLink} from 'react-router-dom'
import {logout} from '../store'
import AuthForm from './AuthForm'
import {UserHome} from './UserHome'

const Navbar = (isLoggedIn, handleClick) => {
  return (
    <div>
      <h1>Civitas</h1>
      <nav>
        <div>
          {isLoggedIn ? (
            <div>
              <Link to="/home" component={UserHome}>
                Home
              </Link>
              <a href="#" onClick={() => handleClick}>
                <Link to="/home" component={UserHome}>
                  Logout
                </Link>
              </a>
            </div>
          ) : (
            <div>
              <Link to="/login" component={AuthForm}>
                Login
              </Link>
              <Link to="/home" component={UserHome}>
                Home
              </Link>
            </div>
          )}
        </div>
      </nav>
      <hr />
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

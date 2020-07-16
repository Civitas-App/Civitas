import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../../store'
import SearchBusiness from '../SearchBar/SearchBusiness'
import {Login, Signup} from './auth-form'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div id="navbar">
    <nav>
      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}
          {/* Rerouted this from /home to / to route to the homepage of Civitas instead of a second homepage for the user */}
          <Link to="/">Home</Link>
          <a href="#" onClick={handleClick}>
            Logout
          </a>
          {/* Link user to their portal in navbar */}
          <Link to="/home">Profile</Link>
          <Link to="/filter/businesses">Find Businesses</Link>
          <SearchBusiness />
        </div>
      ) : (
        <div id="nav_bar">
          {/* The navbar will show these links before you log in */}
          <SearchBusiness />
          <div id="links">
            <span>
              <Link to="/">Home</Link>
            </span>
            <Login />
            <Signup />
            <Link to="/filter/businesses">Find Businesses</Link>
          </div>
        </div>
      )}
    </nav>
    <hr />
  </div>
)

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

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}

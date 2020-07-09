import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../../store'
import SearchBusiness from '../SearchBar/SearchBusiness'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <nav>
      <SearchBusiness />
      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}
          {/* Rerouted this from /home to / to route to the homepage of Civitas instead of a second homepage for the user */}
          <Link to="/">Home</Link>
          <a href="#" onClick={handleClick}>
            Logout
          </a>
          {/* Link user to their portal in navbar */}
          <Link to="/user/portal">Profile</Link>
        </div>
      ) : (
        <div>
          {/* The navbar will show these links before you log in */}
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
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

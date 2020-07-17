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
      <div className="navbar">
        {isLoggedIn ? (
          <div>
            {/* The navbar will show these links after you log in */}
            {/* Rerouted this from /home to / to route to the homepage of Civitas instead of a second homepage for the user */}
            <div className="links">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <a href="#" onClick={handleClick}>
                    Logout
                  </a>
                </li>
                {/* Link user to their portal in navbar */}
                <li>
                  <Link to="/home">Profile</Link>
                </li>
                <li>
                  <Link to="/filter/businesses">Find Businesses</Link>
                </li>
              </ul>
              <SearchBusiness />
            </div>
          </div>
        ) : (
          <div>
            {/* The navbar will show these links before you log in */}

            <div className="links">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <div>
                    <Signup />
                  </div>
                </li>
                <li>
                  <Login />
                </li>
                <li>
                  <Link to="/filter/businesses">Find Businesses</Link>
                </li>
              </ul>
              <SearchBusiness />
            </div>
          </div>
        )}
      </div>
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

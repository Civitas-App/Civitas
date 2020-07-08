import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Login, Signup, CustomerHome} from './components'
import {Homepage} from './components/Utility/Homepage'
import {me} from './store'
import CustomerPortal from './components/Customer/CustomerPortal'
import BusinessPortal from './components/Business/BusinessPortal'
import BusinessForm from './components/Business/BusinessSignUp'
import HandleSignUp from './components/Utility/HandleSignUp'

import CustomerSignUp from './components/Customer/CustomerSignUp'
// import SearchBusiness from './components/SearchBar/SearchBusiness'
import BusinessAnalytics from './components/Business/BusinessAnalyticsPage'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn} = this.props

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route exact path="/" component={Homepage} />
        <Route path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route path="/signup/business" component={BusinessForm} />

        {/* Route needed for isLoggedIn and role is business to route 
        to business sign up form */}

        {/* Route needed for isLoggedIn and role is customer to route to 
        customer sign up form*/}

        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route path="/home" component={CustomerHome} />
            <Route exact path="/user/signup" component={HandleSignUp} />
            <Route exact path="/user/portal" component={CustomerPortal} />
            <Route
              exact
              path="/user/portal/signup"
              component={CustomerSignUp}
            />
            {/* <Route exact path="/search" component={SearchBusiness} /> */}
            <Route exact path="/business/portal" component={BusinessPortal} />
            <Route
              exact
              path="/business/portal/analytics"
              component={BusinessAnalytics}
            />
          </Switch>
        )}
        {/* Displays our Login component as a fallback */}
        <Route component={Login} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}

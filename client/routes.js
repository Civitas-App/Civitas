import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Login, Signup} from './components'
import {Homepage} from './components/Utility/Homepage'
import {me} from './store'
import CustomerPortal from './components/Customer/CustomerPortal'
import BusinessPortal from './components/Business/BusinessPortal'
import BusinessForm from './components/Business/BusinessSignUp'
import HandleSignUp from './components/Utility/HandleSignUp'
import CustomerSignUp from './components/Customer/CustomerSignUp'
import BusinessAnalytics from './components/Business/BusinessAnalyticsPage'
import GetAllBussiness from './components/SearchBar/GetAllBussiness'
import AllBusinesses from './components/SearchBar/AllBusinesses'
import SingleBusiness from './components/Business/SingleBusiness'
import CreateTier from './components/Business/CreateTier'
import ErrorPage from './components/Utility/ErrorPage'
import RedirectPage from './components/Utility/RedirectPage'
import ConirmationPage from './components/Utility/ConirmationPage'
import MapContainer from './components/Utility/MapBox'
import Checkout from './components/Checkout/Checkout'

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
        <Route exact path="/user/portal/signup" component={CustomerSignUp} />
        <Route path="/signup/business" component={BusinessForm} />
        <Route exact path="/filter/businesses" component={GetAllBussiness} />
        <Route exact path="/search" component={AllBusinesses} />
        <Route path="/business/createtier" component={CreateTier} />
        <Route path="/business/all/businesses" component={GetAllBussiness} />

        {/* Route needed for isLoggedIn and role is business to route
        to business sign up form */}

        {/* Route needed for isLoggedIn and role is customer to route to
        customer sign up form*/}

        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}

            <Route exact path="/home" component={RedirectPage} />
            <Route path="/checkout/:tierId" component={Checkout} />
            <Route exact path="/confirmation" component={ConirmationPage} />
            <Route exact path="/user/signup" component={HandleSignUp} />
            <Route
              exact
              path="/filter/businesses"
              component={GetAllBussiness}
            />
            <Route exact path="/user/portal" component={CustomerPortal} />
            <Route exact path="/search" component={AllBusinesses} />

            <Route exact path="/business/portal" component={BusinessPortal} />
            <Route
              exact
              path="/business/:businessId"
              component={SingleBusiness}
            />

            <Route
              exact
              path="/business/portal/analytics"
              component={BusinessAnalytics}
            />
            <Route path="/map" component={MapContainer} />
            <Route path="*" component={ErrorPage} />
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

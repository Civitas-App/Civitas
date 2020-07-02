import React, {Component} from 'react'
// import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
// import PropTypes from 'prop-types'
import {AuthForm} from './components'
import {UserHome} from './components/UserHome'
// import {me} from './store'

/**
 * COMPONENT
 */
export default class Routes extends Component {
  // componentDidMount() {
  //   this.props.loadInitialData()
  // }

  render() {
    return (
      <Switch>
        <Switch>
          <Route path="/login" component={AuthForm} />
          <Route path="/home" component={UserHome} />
        </Switch>
      </Switch>
    )
  }
}

// /**
//  * CONTAINER
//  */
// const mapState = state => {
//   return {
//     // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
//     // Otherwise, state.user will be an empty object, and state.user.id will be falsey
//     isLoggedIn: !!state.user.id
//   }
// }

// const mapDispatch = dispatch => {
//   return {
//     loadInitialData() {
//       dispatch(me())
//     }
//   }
// }

// // The `withRouter` wrapper makes sure that updates are not blocked
// // when the url changes
// export default withRouter(connect(mapState, mapDispatch)(Routes))

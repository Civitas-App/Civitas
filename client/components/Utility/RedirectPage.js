import React, {useEffect} from 'react'
import store from '../../store'
/* Middle-Page new Component
On mount, query the db
  - Are they an existing user? NO.
    - if they dont update the user role with req.session.role
    - direct front end to load proper role form
  - Are they an existing user? Yes.
    - Send back data for customer/business
    - Tell front end to load the correct portal
  // Conditional rendering
  if (thisThing){
    return <CustomerForm/>
  }
  else {
    return <BusinessForm/>
  }

  // Redirect Component from react-router

  <Redirect to='/some-path'/>
}
  // pushing to history
  this.props.history.push('/new-path')

  use redux.state.store user.role
    */

const RedirectPage = props => {
  useEffect(() => {
    const reduxState = store.getState()
    const {role} = reduxState.user
    console.log('reduxxxxxx', role)
    if (role === 'business') {
      props.history.push('/business/portal')
    }
    if (role === 'customer') {
      props.history.push('/user/portal')
    } else {
      props.history.push('/user/signup')
    }
  })

  return <div>Redirecting to your portal</div>
}

export default RedirectPage

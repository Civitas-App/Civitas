import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const CustomerHome = props => {
  const {email} = props

  return (
    <div id="customer_home">
      <h3>Welcome, {email}</h3>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(CustomerHome)

/**
 * PROP TYPES
 */
CustomerHome.propTypes = {
  email: PropTypes.string
}

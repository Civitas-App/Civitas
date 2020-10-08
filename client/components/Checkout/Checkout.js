import React from 'react'
// import StripeCheckout from 'react-stripe-checkout'
import {setCustomerSubscription} from '../../store/singleCustomer'
import {connect} from 'react-redux'
import ConirmationPage from '../Utility/ConirmationPage'

class Checkout extends React.Component {
  constructor() {
    super()
    this.state = {
      isFalse: false
    }
  }

  render() {
    const {tierId} = this.props.match.params
    let {isFalse} = this.state
    return (
      <div>
        {!isFalse ? (
          <button type="button" onClick={() => this.setState({isFalse: true})}>
            Continue to Checkout
          </button>
        ) : (
          <ConirmationPage tierId={tierId} />
        )}
      </div>
      // <StripeCheckout
      //   stripeKey="pk_test_51GxErbCUioMXXE02ERc4nSrajhzyy9aZSOjXlc2hDmdTe6n2j0GBdLu6bJ91x6g6KLjU3ucyJ1Y9rJ4R5f1QwAw000tjIRNmUH"
      //   token={this.handleClick} // submit callback
      // />
    )
  }
}

const mapDispatch = dispatch => ({
  setSubscription: tierId => dispatch(setCustomerSubscription(tierId))
})

export default connect(null, mapDispatch)(Checkout)

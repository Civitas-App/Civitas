import React, {useEffect} from 'react'
import {useSelector} from 'react-redux'

const RedirectPage = props => {
  const role = useSelector(state => state.user.role)
  console.log('redirectPage being hit... Role:', role)
  useEffect(() => {
    console.log('redirectPage UseEffect... Role:', role)
    if (role === 'business') {
      return props.history.push('/business/portal')
    }
    if (role === 'customer') {
      return props.history.push('/user/portal')
    } else {
      return props.history.push('/user/signup')
    }
  }, [])

  return <div id="redirect_page">Redirecting to your portal</div>
}

export default RedirectPage

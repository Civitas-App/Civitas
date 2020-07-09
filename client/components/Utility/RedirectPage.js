import React, {useEffect} from 'react'
import {useSelector} from 'react-redux'

const RedirectPage = props => {
  const role = useSelector(state => state.user.role)
  console.log('redirectPage being hit')
  useEffect(() => {
    console.log('reduxxxxxx', role)
    if (role === 'business') {
      props.history.push('/business/portal')
    }
    if (role === 'customer') {
      props.history.push('/user/portal')
    } else {
      props.history.push('/user/signup')
    }
  }, [])

  return <div>Redirecting to your portal</div>
}

export default RedirectPage

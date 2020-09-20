import React from 'react'
import '../styles/main.scss'
import {Navbar} from './components'
import Routes from './routes'

const App = () => {
  return (
    <div id="app_component">
      <Navbar />
      <Routes />
    </div>
  )
}

export default App

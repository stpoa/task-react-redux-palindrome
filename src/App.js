import React from 'react'
import { Route } from 'react-router-dom'

import './App.css'

import LoginPage from './LoginPage'
import PrivateRoute from './PrivateRoute'
import PalindromePage from './PalindromePage'
import { ConnectedRouter } from 'connected-react-router';
import { history } from './store';

const App = _ => {
  return (
    <ConnectedRouter history={history}>
      <div className="App">
        <PrivateRoute exact path="/" component={PalindromePage} />
        <Route exact path="/login" component={LoginPage} />
      </div>
    </ConnectedRouter>
  )
}

export default App

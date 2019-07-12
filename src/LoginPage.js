import React, { useRef } from 'react'
import { connect } from 'react-redux'

import { login } from './actions/userActions'

const App = (props) => {
  const usernameInput = useRef(null)
  const passwordInput = useRef(null)

  const handleSubmit = e => {
    e.preventDefault()
    props.login(usernameInput.current.value, passwordInput.current.value, props.history)
  };

  return (
    <div className="login-page">

      <form onSubmit={handleSubmit}>
        <label>Username: <input type="text" ref={usernameInput} /></label>
        <label>Password: <input type="password" ref={passwordInput} /></label>
        <input type="submit" value="Submit" />
      </form>

    </div>
  )
}

const mapDispatchToProps = { login }

export default connect(
  state => ({...state}),
  mapDispatchToProps,
)(App)

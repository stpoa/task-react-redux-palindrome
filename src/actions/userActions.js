import * as userService from '../services/userService'
import { replace } from 'connected-react-router'

export const login = (username, password) => async dispatch => {
  dispatch({ type: 'LOGIN_REQUEST', payload: { username } })
  const request = username => ({ type: 'LOGIN_SUCCESS', payload: { username } })

  const user = await userService.login({ username, password })

  if (user) {
    dispatch(request(user.username))
    dispatch(replace('/'))
  } else {
    dispatch({
      type: 'LOGIN_FAILURE',
      payload: { error: 'No user with such username and password' },
    })
  }
}

export const logout = () => dispatch => {
  dispatch({ type: 'LOGOUT' })
  localStorage.removeItem('user')
  dispatch(replace('/'))
}

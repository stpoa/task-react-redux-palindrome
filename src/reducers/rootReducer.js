import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import userReducer from './userReducer'
import palindromeReducer from './palindromeReducer.js'

export default (history) => combineReducers({
  router: connectRouter(history),
  user: userReducer,
  palindrome: palindromeReducer,
})

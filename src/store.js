import { createStore, applyMiddleware, compose } from 'redux'
import { createBrowserHistory } from 'history'
import createRootReducer from './reducers/rootReducer'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'connected-react-router'
import { loadPalindromes } from './services/palindromeService';

const loadUser = () =>
  JSON.parse(localStorage.getItem('user')) || { loggedIn: false }

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const history = createBrowserHistory()

export default function configureStore(initialState = { user: loadUser() }) {
  return createStore(
    createRootReducer(history),
    initialState,
    composeEnhancers(applyMiddleware(thunk, routerMiddleware(history))),
  )
}

export const configureStoreAsync = async () => {
  const url = 'http://demo1461243.mockable.io/state'
  const state = await fetch(url).then(res => res.json())
  return configureStore({ ...state, user: loadUser(), palindrome: loadPalindromes() })
}

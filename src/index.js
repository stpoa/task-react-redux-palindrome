import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'

import App from './App'
import { configureStoreAsync } from './store'
import './index.css'

configureStoreAsync().then(store =>
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
  ),
)

serviceWorker.unregister()

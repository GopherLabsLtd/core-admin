import 'core-js/es6/map'
import 'core-js/es6/set'

import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  IndexRoute
} from 'react-router-dom'

import App from './_components/App'

import { Provider } from 'react-redux'
import { createStore, combineReducers, compose } from 'redux'

import AuthReducer from './__reducers/auth'

require('./node_modules/antd/lib/style/index.less')
require('./node_modules/antd/lib/style/components.less')
require('./css/app.scss')

const rootReducer = combineReducers({
  auth: AuthReducer,
})

const store = createStore(
 rootReducer,
 {
   auth: {
     isAuthenticated: true
   }
 }
)

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <div className="app">
        <Router basename={'/'}>
          <Route path="" component={Component} />
        </Router>
      </div>
    </Provider>,
    document.getElementById('root'),
  )
}

render(App)

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./_components/App', () => { render(App) })
}
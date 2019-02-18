import './main.css'

import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {syncHistoryWithStore} from 'react-router-redux'
import {Router, Route, browserHistory} from 'react-router'
import {Provider} from 'react-redux'

import reducers from 'reducers'
import Layout from 'containers/layout'
import Home from 'containers/home'
import Motos from 'containers/motos'
import Moto from 'containers/moto'
import Basket from 'containers/basket'
import Company from 'containers/about_company'

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(thunk)
))

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={Home}/>
      <Route component={Layout}>
        <Route path='/catalog' component={Motos}/>
        <Route path='/categories/:id' component={Motos}/>
      </Route>
      <Route path='/motos/:id' component={Moto}/>
      <Route path='/basket' component={Basket} />
      <Route path='/about_company' component={Company}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);

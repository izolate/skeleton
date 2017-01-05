import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import DefaultLayout from './layouts/Default'
import HomePage from './pages/Home'
//import Error404Page from './pages/Error404Page'

//<Route path='*' status={404} component={Error404Page} />
const routes = <Router history={browserHistory}>
  <Route path='/' component={DefaultLayout}>
    <IndexRoute component={HomePage} />
  </Route>
</Router>

export default routes

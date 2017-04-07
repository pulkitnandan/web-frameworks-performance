import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './containers/App'

const Routes = props => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
      </Route>
    </Router>
  )
}

export default Routes

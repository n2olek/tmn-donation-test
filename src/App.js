import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import {
  RouteContainer
} from 'containers'
import {
  Provider
} from 'context'

export default class App extends React.Component {
  render() {
    return (
      <Provider app={this}>
        <Router>
          <Route path='/' component={RouteContainer} />
        </Router>
      </Provider>
    );
  }
}

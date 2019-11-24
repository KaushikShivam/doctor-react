import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './Home';
import Dashboard from './Dashboard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInStatus: 'NOT_LOGGED_IN',
      user: {}
    };
  }
  handleLogin = data => {
    this.setState({
      loggedInStatus: 'LOGGED_IN',
      user: data
    });
  };

  render() {
    return (
      <div className='App'>
        <Switch>
          <Route
            exact
            path='/'
            render={props => (
              <Home
                {...props}
                handleLogin={this.handleLogin}
                loggedInStatus={this.state.loggedInStatus}
              />
            )}
          />
          <Route
            exact
            path='/dashboard'
            render={props => (
              <Dashboard
                {...props}
                loggedInStatus={this.state.loggedInStatus}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;

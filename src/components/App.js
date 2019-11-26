import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';

import Home from './Home';
import Dashboard from './Dashboard';
import DoctorsList from './DoctorsList';
import DoctorDetail from './DoctorDetail';
import DoctorBooking from './DoctorBooking';
import Bookings from './Bookings';
import DoctorSearch from './DoctorSearch';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInStatus: 'NOT_LOGGED_IN',
      user: {}
    };
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  handleLogout = () => {
    this.setState({
      loggedInStatus: 'NOT_LOGGED_IN',
      user: {}
    });
  };

  checkLoginStatus = () => {
    axios
      .get('http://localhost:3001/logged_in', { withCredentials: true })
      .then(response => {
        console.log(response);
        if (
          response.data.logged_in &&
          this.state.loggedInStatus === 'NOT_LOGGED_IN'
        ) {
          this.setState({
            loggedInStatus: 'LOGGED_IN',
            user: response.data.user
          });
        } else if (
          !response.data.logged_in &&
          this.state.loggedInStatus === 'LOGGED_IN'
        ) {
          this.setState({
            loggedInStatus: 'NOT_LOGGED_IN',
            user: {}
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleLogin = data => {
    this.setState({
      loggedInStatus: 'LOGGED_IN',
      user: data.user
    });
  };

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Home
                {...props}
                handleLogin={this.handleLogin}
                handleLogout={this.handleLogout}
                loggedInStatus={this.state.loggedInStatus}
              />
            )}
          />
          <Route
            exact
            path="/dashboard"
            render={props => (
              <Dashboard
                {...props}
                loggedInStatus={this.state.loggedInStatus}
              />
            )}
          />

          <Route exact path="/doctors" component={DoctorsList} />
          <Route exact path="/doctors/:id" component={DoctorDetail} />
          <Route exact path="/book" component={DoctorBooking} />
          <Route exact path="/bookings" component={Bookings} />
          <Route exact path="/search" component={DoctorSearch} />
        </Switch>
      </div>
    );
  }
}

export default App;

import React, { Fragment, Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './App.css';

import Landing from './pages/Landing';
import Login from './auth/Login';
import Register from './auth/Register';
import Alert from '../components/Alert';
import { loggedIn } from './../redux/actions/auth';

class App extends Component {
  componentDidMount() {
    this.props.loggedIn();
  }

  render() {
    return (
      <Fragment>
        <Alert />
        <Route exact path="/" component={Landing} />
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Fragment>
    );
  }
}

App.propTypes = {
  loggedIn: PropTypes.func.isRequired
};

export default connect(null, { loggedIn })(App);

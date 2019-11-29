import React, { Fragment, Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './App.css';

import Alert from '../components/Alert';
import { loggedIn } from './../redux/actions/auth';

import PrivateRoute from './routing/PrivateRoute';

// Auth
import Login from './auth/Login';
import Register from './auth/Register';
// Pages
import Landing from './pages/Landing';
import DoctorSearch from './pages/DoctorSearch';
import AdminPanel from './pages/AdminPanel';
import DoctorsList from './pages/DoctorsList';
import DoctorDetail from './pages/DoctorDetail';
import DoctorBooking from './pages/DoctorBooking';
import BookingForm from './pages/BookingForm';

class App extends Component {
  componentDidMount() {
    this.props.loggedIn();
  }

  render() {
    return (
      <Fragment>
        <Alert />
        <Switch>
          <Route exact path="/landing" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />

          <PrivateRoute exact path="/" component={DoctorSearch} />
          {/* Make them private */}
          <Route exact path="/admin" component={AdminPanel} />
          <Route exact path="/doctors" component={DoctorsList} />
          <Route exact path="/doctors/:id" component={DoctorDetail} />
          <Route exact path="/doctors/:id/book" component={DoctorBooking} />
          <Route exact path="/confirm-booking" component={BookingForm} />
        </Switch>
      </Fragment>
    );
  }
}

App.propTypes = {
  loggedIn: PropTypes.func.isRequired
};

export default connect(null, { loggedIn })(App);

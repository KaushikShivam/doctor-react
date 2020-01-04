import React, { Fragment, Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './App.css';

import Alert from './Alert';
import { loggedIn } from '../redux/actions/auth';

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
// Commented this out because there is nothing wrong with my export.
// eslint-disable-next-line import/no-named-as-default-member
// eslint-disable-next-line import/no-named-as-default-member
import DoctorBooking from './pages/DoctorBooking';
import BookingForm from './pages/BookingForm';
import BookingConfirm from './pages/BookingConfirm';
import Bookings from './pages/Bookings';

class App extends Component {
  componentDidMount() {
    const { loggedIn } = this.props;
    loggedIn();
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
          <PrivateRoute exact path="/admin" component={AdminPanel} />
          <PrivateRoute exact path="/doctors" component={DoctorsList} />
          <PrivateRoute exact path="/doctors/:id" component={DoctorDetail} />
          <PrivateRoute
            exact
            path="/doctors/:id/book"
            component={DoctorBooking}
          />
          <PrivateRoute exact path="/confirm-booking" component={BookingForm} />
          <PrivateRoute exact path="/confirmed" component={BookingConfirm} />
          <PrivateRoute exact path="/bookings" component={Bookings} />
        </Switch>
      </Fragment>
    );
  }
}

App.propTypes = {
  loggedIn: PropTypes.func.isRequired,
};

export default connect(null, { loggedIn })(App);

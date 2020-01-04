import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, authenticated, ...rest }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  return (
    <Route
      {...rest}
      render={props =>
        authenticated || isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to="/landing" />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  authenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
  authenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(PrivateRoute);

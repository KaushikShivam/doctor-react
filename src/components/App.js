import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Landing from './pages/Landing';
import Login from './auth/Login';
import Register from './auth/Register';

const App = () => {
  return (
    <Fragment>
      <Route exact path="/" component={Landing} />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Fragment>
  );
};

export default App;

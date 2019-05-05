import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import AuthLogin from './pages/AuthLogin.jsx';

class AppPublic extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/auth/login" component={ AuthLogin }/>
        <Redirect to="/auth/login"/>
      </Switch>
    );
  }
}

module.exports = AppPublic;

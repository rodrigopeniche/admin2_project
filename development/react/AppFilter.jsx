import React from 'react';
import { withRouter } from 'react-router-dom';
import AppPrivate from './AppPrivate.jsx';
import AppPublic from './AppPublic.jsx';

class AppFilter extends React.Component {
  isLoggedIn() {
    return localStorage.getItem('token');
  }

  render() {
    if (this.isLoggedIn()) {
      document.body.classList.remove('login-page');
      document.body.classList.add('skin-blue');
      return <AppPrivate/>
    } else {
      document.body.classList.remove('skin-blue');
      document.body.classList.add('login-page');
      return <AppPublic/>
    }
  }
}

module.exports = withRouter(AppFilter);

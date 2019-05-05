import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import AppFilter from './AppFilter.jsx';

class App extends React.Component {
  render() {
    return(
      <HashRouter>
				<div className="wrapper">
          <AppFilter/>
				</div>
      </HashRouter>
    );
  }
}

module.exports = App;

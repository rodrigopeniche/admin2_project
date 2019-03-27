import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Public from './pages/Public.jsx'
import Private from './pages/Private.jsx'


class App extends React.Component {

	render() {
	  return (
		<HashRouter>
		  <div className="wrapper">
			<Public/>
			<Private/>
		  </div>
		</HashRouter>
	  );
	}
  
  }
  
  module.exports = App;
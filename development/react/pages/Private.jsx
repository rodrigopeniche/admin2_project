import React from "react";
import { Route, Redirect, withRouter } from 'react-router-dom';
import Header from '../controls/Header.js';
import HeaderUserDT from '../controls/HeaderUserDT.js';
import AppSidebar from '../AppSidebar.jsx';
//pages
import  EmptyTable from '../pages/EmptyTable.jsx';

class Private extends React.Component {

  isLoggedIn(){
    return true
    //localStorage.getItem("token") != null
  }

  render(){
    if(this.isLoggedIn()){
      return(
        <div style={{height:'100%'}}>
          <Header title="Telefonica">
          <HeaderUserDT/>
          </Header>
          <AppSidebar/>
          <Route exact path="/table" component={EmptyTable}/>
          <Route exact path="/" render={ () => (
            <Redirect to="/table"/>
            )}>
          </Route>
        </div>
      )
    } else{
      return this.props.location.pathname == "/authenticate"? null : <Redirect to="/authenticate"/>;
    }
  }
}

module.exports = withRouter(Private);
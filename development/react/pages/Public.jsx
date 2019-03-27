import React from "react";
import { Route, Redirect, withRouter } from 'react-router-dom';
import Login from './Login.jsx';

class Public extends React.Component {

  isLoggedIn(){
    return true
    //localStorage.getItem("token") != null
  }

  render(){
    if(!this.isLoggedIn()){
      return (
       <div style={{
         backgroundColor: '#d2d6de',
         height: '100%',
         overflow: 'hidden'}}
         >
         <Route exact path="/authenticate" component={Login}/>
       </div>
     )
    } else{
     return this.props.location.pathname == "/authenticate"? <Redirect to="/table"/> : null;
    }
  }
}

module.exports = withRouter(Public);
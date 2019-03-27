import React from 'react';
import Api from '../../Api.js';
import {Link} from 'react-router-dom';
import Alert from '../controls/Alert.js';

class Login extends React.Component{
  constructor(props){
    super(props)
    this.api= new Api;
    this.state= {
      username:'',
      password: '',
      tokenUser: "",
      alertVisible: false,
      alertMessage: '',
      alertType: "info",
      login: ""
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.logIn = this.logIn.bind(this);
    this.renderAlert = this.renderAlert.bind(this);
    this.redirect =  this.redirect.bind(this);
  }

  onInputChange(e){
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  logIn(e){
    
      setTimeout(this.redirect, 500);
    
  }

  redirect(){
    this.props.history.push('/table')
  }

  render(){

    return(
      
        <div className = "login-box" >
          <div className="login-logo">
            <Link to="/"><b>Odontolog&iacute;a</b></Link>
          </div>
          <div className="login-box-body">
            <p className="login-box-msg">Iniciar Sesión</p>
            <form>
              <div className="form-group has-feedback">
                <input className= "form-control"
                  name="username"
                  placeholder="nombre de usuario"
                  type="text"
                  value={ this.state.username }
                  onChange={ this.onInputChange }
                />
              </div>
              <div className="form-group has-feedback">
                <input className= "form-control"
                  name="password"
                  placeholder="Contraseña"
                  type="password"
                  value={ this.state.password }
                  onChange={ this.onInputChange }
                />
              </div>
              {this.renderAlert()}
              <div className="row">
                <div className= "col-xs-6 col-xs-offset-6">
                  <button
                    className="btn btn-primary btn-block btn-flat"
                    type="button"
                    onClick={this.logIn}
                  >Iniciar sesión</button>
                </div>
              </div>
            </form>
          </div>
        </div>
    )
  }
  renderAlert(){
    if(this.state.alertVisibe){
      return(
        <div className="form-group">
          <div className="col-sm-12">
            <Alert type={this.state.alertType}>
              {this.state.alertMessage}
            </Alert>
          </div>
        </div>
      )
    }
  }
}

module.exports = Login;

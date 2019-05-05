import React from 'react';
import { Redirect } from 'react-router-dom';
import Alert from '../controls/Alert';

class AuthLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      redirect: null,
      alertVisible: false
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.login = this.login.bind(this);
  }

  onInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login() {
   
    if (this.state.email == "siadesod" && this.state.password=="root"){
    localStorage.setItem('token', 'token');
    this.setState({ 
      redirect: '/' ,
      alertVisible: true,
      alertMessage: 'Bienvenido',
      alertType: 'success'});
    } else {
      this.setState({ 
        alertVisible: true,
        alertMessage: 'Contraseña o usario incorrecto',
        alertType: 'danger'});
    }
  }

  render() {
    if (this.state.redirect == null) {
      return (
        <div className="login-box">
          <div className="login-logo">
            <a href="#"><b>SIADESOD</b></a>
          </div>
          <div className="login-box-body">
            <form>
              <div className="form-group has-feedback">
                <input className="form-control"
                  name="email"
                  placeholder="Correo electrónico"
                  type="text"
                  value={ this.state.email }
                  onChange={ this.onInputChange }/>
                <span className="glyphicon glyphicon-envelope form-control-feedback"/>
              </div>
              <div className="form-group has-feedback">
                <input className="form-control"
                  name="password"
                  placeholder="Contraseña"
                  type="password"
                  value={ this.state.password }
                  onChange={ this.onInputChange }/>
                <span className="glyphicon glyphicon-lock form-control-feedback"/>
              </div>
              { this.renderAlert() }
              <div className="row">
                <div className="col-xs-6"></div>
                <div className="col-xs-6">
                  <button className="btn btn-primary btn-block btn-flat"
                    type="button"
                    onClick={ this.login }>Iniciar sesión</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      );
    } else {
      return <Redirect to={ this.state.redirect }/>
    }
  }

  renderAlert() {
    if (this.state.alertVisible) {
      return (
        <div className="row">
          <div className="col-sm-offset-4 col-sm-8">
            <Alert
              type={ this.state.alertType }>
              { this.state.alertMessage }
            </Alert>
          </div>
        </div>
      );
    }
  }
}

module.exports = AuthLogin;

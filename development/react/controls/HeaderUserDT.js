import React from 'react';
import {withRouter} from 'react-router-dom';

class HeaderUserDT extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      userName: '',
      icon:'',
      role: ''
    }
    this.handleToggle = this.handleToggle.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  componentDidMount() {
    if (localStorage.getItem('name')){
      this.setState({
        userName: localStorage.getItem('name'),
        icon: localStorage.getItem('icon'),
        role: localStorage.getItem('roleName')
      })
    }
  }

  handleToggle(e) {
    this.setState(prev => ({
      open: !prev.open
    }));
  }

  logOut(e){
    localStorage.removeItem('token');
    this.props.history.push('/authenticate');
  }

  render(){
    var menuCn = ['dropdown', 'user', 'user-menu'];
    if (this.state.open) menuCn.push('open');
    return (
    <li className={ menuCn.join(' ') }>
      <a className="dropdown-toggle"
        role="button"
        onClick={ this.handleToggle }>
        <img className="user-image" src={ this.state.icon } />
        <span className="hidden-xs">{ this.state.userName }</span>
      </a>
      <ul className="dropdown-menu">
        <li className="user-header">
          <img className="img-circle" src={ this.state.icon }/>
          <p>
            { this.state.userName }
            <small>{ this.state.role }</small>
          </p>
        </li>
        <li className="user-footer">
          <div className="pull-right">
            <a className="btn btn-default btn-flat"
              role="button"
              onClick={this.logOut}>Cerrar Sesión</a>
          </div>
        </li>
      </ul>
    </li>
    )
  }
}

module.exports = withRouter(HeaderUserDT);

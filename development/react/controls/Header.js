import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(e) {
    e.preventDefault();
    this.props.onToggle();
  }

  render() {
    return(
      <header className="main-header">
        <Link className="logo" to="/">
          <span className="logo-lg"><b>{ this.props.title }</b></span>
        </Link>
        <nav className="navbar navbar-static-top" role="navigation">
          <a className="sidebar-toggle"
            href="#"
            onClick={ this.handleToggle }/>
          <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">
						{ this.props.children }
            </ul>
					</div>
        </nav>
      </header>
    );
  }
}

Header.defaultProps = {
  onToggle: function() {}
};

module.exports = Header;

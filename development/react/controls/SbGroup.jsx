import React from 'react';

class SbGroup extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.onToggle(this.props.name);
  }

  render() {
    var rootCn = ['treeview'];
    if (this.props.active) rootCn.push('active');
    if (this.props.open) rootCn.push('menu-open');
    var menuSt = {}
    menuSt.display = (this.props.open) ? 'block' : 'none';
    return (
      <li className={ rootCn.join(' ') }>
        <a href="#"
          onClick={ this.handleClick }>
          <i className={ this.props.icon }/>&nbsp;
          <span>{ this.props.label }</span>
          <span className="pull-right-container">
            <i className="fa fa-angle-left pull-right"/>
          </span>
        </a>
        <ul className="treeview-menu"
          style={ menuSt }>
            { this.props.children }
        </ul>
      </li>
    );
  }
}

module.exports = SbGroup;

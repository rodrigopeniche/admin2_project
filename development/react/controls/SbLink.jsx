import React from 'react';
import { Link } from 'react-router-dom';

class SbLink extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.onClick(this.props.name);
  }

  render() {
    var rootCn = [];
    if (this.props.active) rootCn.push('active');
    return (
      <li className={ rootCn.join(' ') }>
        <Link to={ this.props.to }
          onClick={ this.handleClick }>
          <i className={ this.props.icon }/>&nbsp;
          <span>{ this.props.label }</span>
        </Link>
      </li>
    );
  }
}

SbLink.defaultProps = {
  icon: 'fa fa-circle-o',
  onClick: () => {}
};

module.exports = SbLink;

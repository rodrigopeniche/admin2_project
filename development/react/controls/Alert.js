import React from 'react';

class Alert extends React.Component {
  render() {
    var type = `alert alert-${this.props.type}`;
    return(
      <div className={type} role="alert">
				{this.props.children}
      </div>
    );
  }
}

module.exports = Alert;

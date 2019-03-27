import React from 'react';

class Page extends React.Component {
  render() {
    return (
      <div className="content-wrapper">
        { this.props.children }
      </div>
    );
  }
}

module.exports = Page;

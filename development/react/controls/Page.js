import React from 'react';

class Page extends React.Component {
  render() {
    return (
      <div className="content-wrapper">
        <section className="content-header">
          <h1>{ this.props.title }<small>{ this.props.subtitle }</small></h1>
        </section>
        <section className="content container-fluid">
          { this.props.children }
        </section>
      </div>
    );
  }
}

Page.defaultProps = {
  title: 'Page title'
};

module.exports = Page;

import React from 'react';

class PageHeader extends React.Component {
  render() {
    return (
      <section className="content-header">
        <h1>{ this.props.title } <small>{ this.props.subtitle }</small></h1>
      </section>
    );
  }
}

PageHeader.defaultProps = {
  subtitle: 'Subtitle',
  title: 'Page title'
};

module.exports = PageHeader;

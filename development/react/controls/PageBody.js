import React from 'react';

class PageBody extends React.Component {
  render() {
    return (
      <section className="content">
        { this.props.children }
      </section>
    );
  }
}

module.exports = PageBody;

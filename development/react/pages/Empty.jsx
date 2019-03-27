import React from 'react';
import Page from '../controls/Page';
import PageBody from '../controls/PageBody';
import PageHeader from '../controls/PageHeader';

class Empty extends React.Component {
  render() {
    return (
      <Page>
        <PageHeader title="Empty"
          subtitle="page"/>
        <PageBody>Empty page</PageBody>
      </Page>
    );
  }
}

module.exports = Empty;

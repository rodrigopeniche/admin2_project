import React from 'react';
import Page from '../controls/Page';
import PageBody from '../controls/PageBody';
import PageHeader from '../controls/PageHeader';
import Box from '../controls/Box/Box';
import BoxBody from '../controls/Box/BoxBody';
import BoxHeader from '../controls/Box/BoxHeader';

class EmptyBox extends React.Component {
  render() {
    return (
      <Page>
        <PageHeader title="Empty box"
          subtitle="page"/>
        <PageBody>
          <div className="row">
            <div className="col-sm-8">
              <Box>
                <BoxHeader title="Title"/>
                <BoxBody>
                  Content here
                </BoxBody>
              </Box>
            </div>
          </div>
        </PageBody>
      </Page>
    );
  }
}

module.exports = EmptyBox;

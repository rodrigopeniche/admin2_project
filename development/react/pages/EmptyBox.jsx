import React from 'react';
import Page from '../controls/Page';
import Box from '../controls/Box/Box';
import BoxBody from '../controls/Box/BoxBody';
import BoxHeader from '../controls/Box/BoxHeader';

class EmptyBox extends React.Component {
  render() {
    return (
      <Page title="Empty box" subtitle="page">
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
      </Page>
    );
  }
}

module.exports = EmptyBox;

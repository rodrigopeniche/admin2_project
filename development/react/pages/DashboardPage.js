import React from 'react';
import InfoBox from '../controls/InfoBox';
import Page from '../controls/Page';
import PageBody from '../controls/PageBody';
import PageHeader from '../controls/PageHeader';

class DashboardPage extends React.Component {
  render() {
    return (
      <Page>
        <PageHeader title="Dashboard" subtitle="Control panel"/>
        <PageBody>
          <div className="row">
            <div className="col-md-3 col-sm-6 col-xs-12">
              <InfoBox
                color="aqua"
                icon="ion ion-ios-gear-outline"
                label="CPU traffic"
                value="90%"/>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <InfoBox
                color="red"
                icon="fa fa-google-plus"
                label="Likes"
                value="41,410"/>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <InfoBox
                color="green"
                icon="ion ion-ios-cart-outline"
                label="Sales"
                value="760"/>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <InfoBox
                color="yellow"
                icon="ion ion-ios-people-outline"
                label="New members"
                value="2,000"/>
            </div>
          </div>
        </PageBody>
      </Page>
    );
  }
}

module.exports = DashboardPage;

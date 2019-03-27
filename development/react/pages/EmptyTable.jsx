import React from 'react';
import moment from 'moment';
import Box from '../controls/Box/Box';
import BoxBody from '../controls/Box/BoxBody';
import BoxFooter from '../controls/Box/BoxFooter';
import BoxHeader from '../controls/Box/BoxHeader';
import Page from '../controls/Page';
import PageBody from '../controls/PageBody';
import PageHeader from '../controls/PageHeader';
import Pagination from '../controls/Pagination.jsx';

function fake(page, limit) {
  var users = [];
  var start = ((page-1)*limit)+1;
  for (var i = 0; i < limit; i += 1) {
    users.push({
      id: `id${ start+i }`,
      username: `user${ start+i }`,
      email: `user${ start+i }@example.com`,
      createdAt: moment().subtract(50*Math.random(), 'days')
    });
  }
  return new Promise(function(resolve, reject) {
    resolve(users);
  });
}

class EmptyTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      users: []
    };
    this.goPage = this.goPage.bind(this);
  }

  componentDidMount() {
    this.search(1);
  }

  goPage(p) {
    this.search(p);
  }

  search(p) {
    fake(p, 25).then(users => {
      this.setState({
        page: p,
        users: users
      });
    })
  }

  render() {
    return (
      <Page>
        <PageHeader title="Empty table"
          subtitle="page"/>
        <PageBody>
          <Box>
            <BoxHeader title="Lista de usuarios"/>
            <BoxBody>
              <table className="table">
                <thead>
                  <tr>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Created</th>
                  </tr>
                </thead>
                <tbody>
                  { this.state.users.map(this.renderRow) }
                </tbody>
              </table>
            </BoxBody>
            <BoxFooter>
              <Pagination
                page={ this.state.page }
                onGoPage={ this.goPage }/>
            </BoxFooter>
          </Box>
        </PageBody>
      </Page>
    );
  }

  renderRow(user) {
    var createdAt = moment(user.createdAt).format('DD/MM/YYYY');
    return (
      <tr key={ user.id }>
        <td>{ user.username }</td>
        <td>{ user.email }</td>
        <td>{ createdAt }</td>
      </tr>
    );
  }
}

module.exports = EmptyTable;

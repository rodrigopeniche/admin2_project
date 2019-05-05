import React from 'react';
import moment from 'moment';
import Box from '../controls/Box/Box';
import BoxBody from '../controls/Box/BoxBody';
import BoxFooter from '../controls/Box/BoxFooter';
import BoxHeader from '../controls/Box/BoxHeader';
import Page from '../controls/Page';
import Pagination from '../controls/Pagination.jsx';
import { Link } from 'react-router-dom';

function fake(page, limit) {
  var users = [];
  var start = ((page-1)*limit)+1;
  for (var i = 0; i < limit; i += 1) {
    users.push({
      id: `id${ start+i }`,
      username: `paciente${ start+i }`,
      email: `paciente${ start+i }@example.com`,
      createdAt: moment().subtract(50*Math.random(), 'days')
    });
  }
  return new Promise(function(resolve, reject) {
    resolve(users);
  });
}

class Citas extends React.Component {
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
      <Page title="Citas" subtitle="">
        <Box>
          <BoxHeader title="Lista de Citas"/>
          <BoxBody>
            <table className="table">
              <thead>
                <tr>
                  <th>Paciente</th>
                  <th>Email</th>
                  <th>Cita</th>
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
      </Page>
    );
  }

  renderRow(user) {
    var createdAt = moment(user.createdAt).format('DD/MM/YYYY');
    var edit = `/edit/${ user.id }`;
    var cita= `/cita/${ user.id }`
    return (
      <tr key={ user.id }>
        <td><Link to ={edit}>{ user.username }</Link></td>
        <td>{ user.email }</td>
        <td><Link to ={cita}>{ createdAt}</Link></td>
      </tr>
    );
  }
}

module.exports = Citas;

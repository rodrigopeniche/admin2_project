import React from 'react';
import axios from 'axios';
import moment from 'moment';
import Page from '../controls/Page';
import PageHeader from '../controls/PageHeader';
import PageBody from '../controls/PageBody';
import Box from '../controls/Box/Box';
import BoxHeader from '../controls/Box/BoxHeader';
import BoxBody from '../controls/Box/BoxBody';

import Alert from '../controls/Alert';
import Table from '../controls/Table/Table';
import TableHeader from '../controls/Table/TableHeader';

class ApiPage extends React.Component
{
    constructor(props)
    {
        super(props);
        this.page = 1;
        this.state =
        {
            users: [],
            alertVisible: false,
            alertMessage: '',
            alertType: 'info'
        };
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
    }

    componentDidMount()
    {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(result => {
            this.setState({
                users: result.data,
            });
            // console.log(Object.keys(result.data[0]));
            // console.log(result.data[0]);
        })
        .catch(err => {
            this.setState({
                alertMessage: 'Error en la carga de datos',
                alertType: 'error',
                alertVisible: true
            });
        });
    }

  render() {
    return (
      <Page>
				<PageHeader title='Api'/>
				<PageBody>
					{this.renderAlert()}
					<Box>
						<BoxHeader title='Data request example'/>
						<BoxBody>
							<div className='row'>
								<div className='col-lg-12'>
									<select className="form-control">
										<option value="5">5</option>
										<option value="10">10</option>
										<option value="25">25</option>
										<option value="50">50</option>
										<option value="100">100</option>
									</select>
								</div>
							</div>
							<Table type="striped">
								<TableHeader>
									<th>ID</th>
									<th>Fecha</th>
									<th>Nombre</th>
									<th>Usuario</th>
									<th>Website</th>
									<th>Correo</th>
								</TableHeader>
								<tbody>
									{this.state.users.map(this.renderUsers)}
								</tbody>
							</Table>
							<div className='pull-right'>
								<nav>
									<ul className="pager">
										<li><a onClick={this.prev}>Anterior</a></li>&nbsp;
										<li><a onClick={this.next}>Siguiente</a></li>
									</ul>
								</nav>
							</div>
						</BoxBody>
					</Box>
				</PageBody>
			</Page>
    );
  }

    next()
    {
        this.page += 1;
    }

    prev()
    {
        this.page = Math.max(this.page-1, 1);
    }

    renderUsers(user)
    {
        var dateNow = moment().format('ll');
        return(
            <tr key={user.id}>
                <td>{user.id}</td>
                <td>{dateNow}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.website}</td>
                <td>{user.email}</td>
            </tr>
        );
    }

    renderAlert()
    {
        if(this.state.alertVisible)
        {
            return(
                <Alert type={this.state.alertType}>
                    {this.state.alertMessage}
                </Alert>
            );
        }
    }
}

module.exports = ApiPage;

import React from 'react';

import Page from '../controls/Page';
import PageHeader from '../controls/PageHeader';
import PageBody from '../controls/PageBody';

import Box from '../controls/Box/Box';
import BoxHeader from '../controls/Box/BoxHeader';
import BoxBody from '../controls/Box/BoxBody';
import BoxFooter from '../controls/Box/BoxFooter';

import Table from '../controls/Table/Table';
import TableHeader from '../controls/Table/TableHeader';

import Dropdown from '../controls/Dropdown/Dropdown';
import DropdownHeader from '../controls/Dropdown/DropdownHeader';
import DropdownBody from '../controls/Dropdown/DropdownBody';

import Select from '../controls/Select/Select';
import SelectForm from '../controls/Select/SelectForm';

import Form from '../controls/Form/Form';

import InputForm from '../controls/Input/InputForm';

import DirectChat from '../controls/DirectChat/DirectChat';
import DirectChatItem from '../controls/DirectChat/DirectChatItem';
import DirectChatHeader from '../controls/DirectChat/DirectChatHeader';
import DirectChatBody from '../controls/DirectChat/DirectChatBody';
import DirectChatFooter from '../controls/DirectChat/DirectChatFooter';


class TestPage extends React.Component {
	render() {
		return (
			<Page>
				<PageHeader title="Test" subtitle="Preview sample"/>
				<PageBody>
					<DirectChat type='primary'>
						<DirectChatHeader title='Direct chat'/>
						<DirectChatBody>

							<DirectChatItem
								name="Alexander Pierce"
								profilePicture="static/user1-128x128.jpg"
								textDate="23 Jan 2:00 pm"
							>
								Is this template really for free? That's unbelievable!
							</DirectChatItem>

							<DirectChatItem
								name="Sarah Bullock"
								date="23 Jan 2:05 pm"
								profilePicture="static/user3-128x128.jpg"
								textDate="23 Jan 2:05 pm"
								right
							>
								You better believe it!
							</DirectChatItem>

						</DirectChatBody>
						<DirectChatFooter placeholder='Type message ...'/>
					</DirectChat>
					{/* <Box>
						<BoxHeader title='BoxHeader'>
							<div className='row'>
						<div className='col-sm-6'>Tool 1</div>
						<div className='col-sm-6'>Tool 2</div>
							</div>
						</BoxHeader>
						<BoxBody>
							BoxBody
						</BoxBody>
						<BoxFooter>
							BoxFooter
						</BoxFooter>
						</Box>
						<Box>
						<BoxHeader>
							Mostrando&nbsp;
							<Select>
						<option value='3'>3</option>
						<option value='5'>5</option>
						<option value='10'>10</option>
						<option value='20'>20</option>
						<option value='50'>50</option>
							</Select>
							&nbsp;registros
						</BoxHeader>
						<BoxBody>
							<Table type='hover' responsive>
						<TableHeader>
						<th>Text_header no 1</th>
						<th>Text_header no 2</th>
						<th>Text_header no 3</th>
						<th>Text_header no 4</th>
						<th>Text_header no 5</th>
						</TableHeader>
						<tbody>
						<tr>
						<td>Text body sample 1</td>
						<td>Text body sample 2</td>
						<td>Text body sample 3</td>
						<td>Text body sample 4</td>
						<td>Text body sample 5</td>
						</tr>
						</tbody>
							</Table>
						</BoxBody>
						</Box>
						<Box>
						<BoxHeader>
							<Dropdown>
						<DropdownHeader>
						<div style={{background:'#49b526', borderColor:'#49b526'}}>
						<a className='btn btn-default btn-sm' style={{background:'#49b526', borderColor:'#49b526', color:'#ffffff'}}>
						<i className='fa fa-download' />&nbsp;Exportar datos
						</a>
						</div>
						</DropdownHeader>
						<DropdownBody>
						<li><a href='#'><i className='fa fa-file' />&nbsp;Exportar las reservaciones de hoy</a></li>
						<li><a href='#'><i className='fa fa-file' />&nbsp;Exportar todos las reservaciones registradas ayer</a></li>
						</DropdownBody>
							</Dropdown>
						</BoxHeader>
						<BoxBody>
							<Table type='bordered'>
						<TableHeader>
						<th>Text_header no 1</th>
						<th>Text_header no 2</th>
						<th>Text_header no 3</th>
						<th>Text_header no 4</th>
						<th>Text_header no 5</th>
						</TableHeader>
						<tbody>
						<tr>
						<td>Text body sample 1</td>
						<td>Text body sample 2</td>
						<td>Text body sample 3</td>
						<td>Text body sample 4</td>
						<td>Text body sample 5</td>
						</tr>
						</tbody>
							</Table>
						</BoxBody>
						</Box>
						<div className='col-sm-8'>
						<Box>
							<BoxHeader title='Form example'/>
							<BoxBody>
						<Form>
						<SelectForm label='Sample values'>
						<option>Value 1</option>
						</SelectForm>
						<InputForm label='cosas'></InputForm>
						</Form>
							</BoxBody>
						</Box>
					</div> */}
				</PageBody>
			</Page>
		);
	}
}

module.exports = TestPage;

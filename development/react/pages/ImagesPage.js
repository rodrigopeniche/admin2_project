import React from 'react';
import Page from '../controls/Page';

import Box from '../controls/Box/Box';
import BoxHeader from '../controls/Box/BoxHeader';
import BoxBody from '../controls/Box/BoxBody';
import Form from '../controls/Form/Form';
import Input from '../controls/Input/Input';

class ImagesPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			url: ''
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		reader.onloadend = () => {
			this.setState({
				url: reader.result
			})
		}
	}

	render() {
		return (
			<Page title="Images">
				<Box type='primary'>
					<BoxHeader title='Seleccione un archivo' />
					<BoxBody>
						<Form alignment='horizontal'>
							<div className="form-group">
								<div className="col-sm-offset-4 col-sm-8">
									<img src={this.state.url} width='100%'/>
								</div>
							</div>
							<div className="form-group">
								<div className="col-sm-offset-4 col-sm-8">
									<input type="file" onChange={this.handleChange} />
								</div>
							</div>
						</Form>
					</BoxBody>
				</Box>
			</Page>
		);
	}
}

module.exports = ImagesPage;

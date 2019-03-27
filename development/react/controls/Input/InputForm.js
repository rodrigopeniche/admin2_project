import React from 'react';

class InputForm extends React.Component {
	render() {
		return (
			<div className="form-group">
				<label className='col-sm-4 control-label'>{this.props.label}</label>
				<div className="col-sm-8">
					<input type={this.props.type}
						className='form-control'
						id={this.props.id}
						placeholder={this.props.placeholder}
						value={this.props.value}
						onChange={this.props.onChange}
						name={this.props.name}
						readOnly={this.props.readOnly}
						disabled={this.props.disabled}
					/>
				</div>
			</div>
		);
	}
}

module.exports = InputForm;

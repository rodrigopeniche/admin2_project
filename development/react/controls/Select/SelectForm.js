import React from 'react';

class SelectForm extends React.Component {
	render() {
		var cnRoot = ['form-control'];
		if(this.props.className) {
			this.props.className.split(' ').map((c) => {
				cnRoot.push(c);
			});
		}
		return (
			<div className="form-group">
				<label className="col-sm-4 control-label">{this.props.label}</label>
				<div className="col-sm-8">
					<select name={this.props.name} className={cnRoot.join(' ')} disabled={this.props.disabled} onChange={this.props.onChange}>
						{this.props.children}
					</select>
				</div>
			</div>
		);
	}
}

module.exports = SelectForm;

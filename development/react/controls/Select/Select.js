import React from 'react';

class Select extends React.Component {
	render() {
		var cnRoot = ['form-control'];
		if(this.props.className) {
			this.props.className.split(' ').map((c) => {
				cnRoot.push(c);
			});
		}
		return (
			<select name={this.props.name} className={cnRoot.join(' ')} disabled={this.props.disabled} style={this.props.style} onChange={this.props.onChange}>
				{this.props.children}
			</select>
		);
	}
}

Select.defaultProps = {
	disabled: false,
	style: {display: 'inline-block', width:'auto'}
};

module.exports = Select;

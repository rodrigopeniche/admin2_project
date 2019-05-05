import React from 'react';

class Form extends React.Component {
	render() {
		var cnRoot = `form-${this.props.type}`;
		return (
			<form className={cnRoot} onSubmit={this.props.onSubmit}>
				{this.props.children}
			</form>
		);
	}
}

Form.defaultProps = {
	type: 'horizontal'
};

module.exports = Form;

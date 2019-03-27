import React from 'react';

class BoxBody extends React.Component {
	render() {
		return (
			<div className="box-body">
				{this.props.children}
			</div>
		);
	}
}

module.exports = BoxBody;

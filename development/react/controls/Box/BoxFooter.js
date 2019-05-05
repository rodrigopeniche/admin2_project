import React from 'react';

class BoxFooter extends React.Component {
	render() {
		return (
			<div className="box-footer">
				{this.props.children}
			</div>
		);
	}
}

module.exports = BoxFooter;

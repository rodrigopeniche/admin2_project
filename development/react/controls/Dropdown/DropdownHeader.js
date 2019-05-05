import React from 'react';

class DropdownHeader extends React.Component {
	render() {
		return (
			<span>
				{this.props.children}
			</span>
		);
	}
}

module.exports = DropdownHeader;

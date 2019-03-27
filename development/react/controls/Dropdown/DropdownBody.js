import React from 'react';

class DropdownBody extends React.Component {
	render() {
		return (
			<ul className='dropdown-menu'>
				{this.props.children}
			</ul>
		);
	}
}

module.exports = DropdownBody;

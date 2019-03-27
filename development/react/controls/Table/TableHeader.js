import React from 'react';

class TableHeader extends React.Component {
	render() {
		return (
			<thead>
				<tr>
					{this.props.children}
				</tr>
			</thead>
		);
	}
}

module.exports = TableHeader;

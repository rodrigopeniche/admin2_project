import React from 'react';
import BoxHeader from '../Box/BoxHeader';

class DirectChatHeader extends React.Component {
	render() {
		return (
			<BoxHeader title={this.props.title}>
				{this.props.children}
			</BoxHeader>
		);
	}
}

module.exports = DirectChatHeader;

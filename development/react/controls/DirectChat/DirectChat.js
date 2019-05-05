import React from 'react';
import Box from '../Box/Box';

class DirectChat extends React.Component {
	render() {
		return (
			<Box type={`${this.props.type} direct-chat direct-chat-${this.props.type}`} solid={this.props.solid}>
				{this.props.children}
			</Box>
		);
	}
}
module.exports = DirectChat;

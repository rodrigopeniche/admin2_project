import React from 'react';
import BoxBody from '../Box/BoxBody';

class DirectChatBody extends React.Component {
	render() {
		return (
			<BoxBody>
				<div className='direct-chat-messages' style={this.props.style}>
					{this.props.children}
				</div>
			</BoxBody>
		);
	}
}

DirectChatBody.defaultProps = {
	style: {height: '300px'}
};

module.exports = DirectChatBody;

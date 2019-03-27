import React from 'react';
import BoxFooter from '../Box/BoxFooter';

class DirectChatFooter extends React.Component {
	render() {
		return (
			<BoxFooter>
				<div className="input-group">
					<input type="text" name={this.props.name} placeholder={this.props.placeholder} className="form-control" disabled={this.props.disabled}/>
					<span className="input-group-btn">
						<button type="button" className={`btn btn-${this.props.type} btn-flat`} disabled={this.props.disabled}>Send</button>
					</span>
				</div>
			</BoxFooter>
		);
	}
}

module.exports = DirectChatFooter;

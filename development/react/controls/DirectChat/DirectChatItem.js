import React from 'react';

class DirectChatItem extends React.Component {
	render() {
		var cnRoot = ["direct-chat-msg"];
		var cnName = ["direct-chat-name"];
		var cnDate = ["direct-chat-timestamp"];
		if(this.props.right) {
			cnRoot.push('right');
			cnName.push('pull-right');
		} else {
			cnDate.push('pull-right');
		}
		return (
			<div className={cnRoot.join(' ')}>
				<div className="direct-chat-info clearfix">
					<span className={cnName.join(' ')}>{this.props.name}</span>
					{this.renderDate(cnDate)}
				</div>
				{this.renderImage()}
				{this.renderMessage()}
			</div>
		);
	}
	renderImage() {
		if(this.props.profilePicture) {
			return (
				<img className="direct-chat-img" src={this.props.profilePicture}/>
			);
		}
	}
	renderDate(cnDate) {
		if(this.props.date) {
			return (
				<span className={cnDate.join(' ')}>{this.props.date}</span>
			);
		}
	}
	renderMessage() {
		if(this.props.textDate) {
			return (
				<div className="direct-chat-text">
					<div className="row">
						<div className="col-sm-12">
							{this.props.children}
						</div>
					</div>
					<div className='row'>
						<div className="col-sm-offset-9 col-sm-3">
							<span className="direct-chat-timestamp pull-right" style={{color:'#fff',fontSize: 'small'}}>{this.props.textDate}</span>
						</div>
					</div>
				</div>
			);
		} else {
			return (
				<div className="direct-chat-text">
					{this.props.children}
				</div>
			);
		}
	}
}

module.exports = DirectChatItem;

import React from 'react';

class Box extends React.Component {
  render() {
		var cnRoot = ['box'];
		if(this.props.solid) cnRoot.push('box-solid');
		if(this.props.type) cnRoot.push(`box-${this.props.type}`);
		return (
			<div className={cnRoot.join(' ')}>
				{this.props.children}
			</div>
		);
  }
}

Box.defaultProps = {
	type: 'default'
}

module.exports = Box;

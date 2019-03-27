import React from 'react';

class TimelineLabel extends React.Component
{
	render()
	{
		return(
			<li className="time-label">
				<span className={`bg-${this.props.color}`}>
					{this.props.children}
				</span>
			</li>
		);
	}
}

module.exports = TimelineLabel;

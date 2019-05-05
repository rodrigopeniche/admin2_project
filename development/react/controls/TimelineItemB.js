import React from 'react';

class TimelineItemB extends React.Component
{
	render()
	{
		return(
			<div className="timeline-body">
				{this.props.children}
			</div>
		);
	}
}

module.exports = TimelineItemB;

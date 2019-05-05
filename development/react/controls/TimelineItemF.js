import React from 'react';

class TimelineItemF extends React.Component
{
	render()
	{
		return(
			<div className="timeline-footer">
				{this.props.children}
			</div>
		);
	}
}

module.exports = TimelineItemF;

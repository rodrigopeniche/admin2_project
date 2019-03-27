import React from 'react';

class TimelineItemH extends React.Component
{
	render()
	{
		return(
			<h3 className="timeline-header">{this.props.children}</h3>
		);
	}
}

module.exports = TimelineItemH;

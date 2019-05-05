import React from 'react';

class TimelineItem extends React.Component
{
	render()
	{
		return(
			<li>
				<i className={`${this.props.icon} bg-${this.props.color}`}></i>
				{this.renderBody()}
			</li>
		);
	}

	renderBody()
	{
		if(this.props.children)
		{
			return(
				<div className="timeline-item">
					<span className="time"><i className="fa fa-clock-o"></i> {this.props.time}</span>
					{this.props.children}
				</div>
			);
		}
	}
}

module.exports = TimelineItem;

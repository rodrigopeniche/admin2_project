import React from 'react';

class Timeline extends React.Component
{
	render()
	{
		return(
			<ul className="timeline">

				<li className="time-label">
					<span className="bg-red">
						10 Feb. 2014
					</span>
				</li>

				<li>
					<i className="fa fa-envelope bg-blue"></i>
					<div className="timeline-item">
						<span className="time"><i className="fa fa-clock-o"></i> 12:05</span>
						<h3 className="timeline-header"><a href="#">Support Team</a> ...</h3>

						<div className="timeline-body">
							Content goes here
						</div>

						<div className="timeline-footer">
							<a className="btn btn-primary btn-xs">button</a>&nbsp;
							<a className="btn btn-primary btn-xs">button</a>
						</div>
					</div>
				</li>

				<li>
					<i className="fa fa-envelope bg-blue"></i>
					<div className="timeline-item">
						<span className="time"><i className="fa fa-clock-o"></i> 12:05</span>

						<h3 className="timeline-header"><a href="#">Support Team</a> ...</h3>

						<div className="timeline-body">
							Content goes here
						</div>

						<div className="timeline-footer">
							<a className="btn btn-primary btn-xs">button</a>&nbsp;
							<a className="btn btn-primary btn-xs">button</a>
						</div>
					</div>
				</li>
			</ul>
		);
	}
}

module.exports = Timeline;

import React from 'react';
import { Link } from 'react-router-dom';
import Page from '../controls/Page';
import TimelineItem from '../controls/TimelineItem';
import TimelineItemB from '../controls/TimelineItemB';
import TimelineItemF from '../controls/TimelineItemF';
import TimelineItemH from '../controls/TimelineItemH';
import TimelineLabel from '../controls/TimelineLabel';

class TimelinePage extends React.Component {
  render() {
    return (
      <Page title="Timeline">
			  <ul className="timeline">
					<TimelineLabel color="red">10 Feb. 2014</TimelineLabel>
					<TimelineItem icon="fa fa-envelope" color="blue" time="12:05">
						<TimelineItemH><Link to="#">Support Team</Link> Message</TimelineItemH>
						<TimelineItemB>Contenido</TimelineItemB>
						<TimelineItemF>
							<a className="btn btn-primary btn-xs">button</a>&nbsp;
							<a className="btn btn-primary btn-xs">button</a>
						</TimelineItemF>
					</TimelineItem>
					<TimelineLabel color="blue">10 Feb. 2018</TimelineLabel>
					<TimelineItem icon="fa fa-user" color="aqua" time="11:05">
						<TimelineItemH><Link to="#">Support Team</Link> Message</TimelineItemH>
						<TimelineItemB>Contenido</TimelineItemB>
						<TimelineItemF>
							<a className="btn btn-primary btn-xs">button</a>&nbsp;
							<a className="btn btn-primary btn-xs">button</a>
						</TimelineItemF>
					</TimelineItem>
					<TimelineItem icon="fa fa-comments" color="purple" time="11:05">
						<TimelineItemH><Link to="#">Support Team</Link> Message</TimelineItemH>
						<TimelineItemB>Contenido</TimelineItemB>
						<TimelineItemF>
							<a className="btn btn-primary btn-xs">button</a>&nbsp;
							<a className="btn btn-primary btn-xs">button</a>
						</TimelineItemF>
					</TimelineItem>
					<TimelineItem icon="fa fa-clock-o" color="gray"/>
				</ul>
      </Page>
    );
  }
}

module.exports = TimelinePage;

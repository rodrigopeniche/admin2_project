import React from 'react';
import {Link} from 'react-router-dom';
import Page from '../controls/Page';

class TabsPage extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state =
		{
			home: 'active',
		}
		this.handleStatus = this.handleStatus.bind(this);
		this.current = 'home';
	}

  render() {
    return (
			<Page title="Tabs">
				<div>
					<ul className="nav nav-tabs" role="tablist">
						<li role="presentation" className={this.state.home}><Link to="/tabs" role="tab" data-toggle="tab" onClick={this.handleStatus} name="home">Home</Link></li>
						<li role="presentation" className={this.state.profile}><Link to="/tabs" role="tab" data-toggle="tab" onClick={this.handleStatus} name="profile">Profile</Link></li>
						<li role="presentation" className={this.state.messages}><Link to="/tabs" role="tab" data-toggle="tab" onClick={this.handleStatus} name="messages">Messages</Link></li>
						<li role="presentation" className={this.state.settings}><Link to="/tabs" role="tab" data-toggle="tab" onClick={this.handleStatus} name="settings">Settings</Link></li>
					</ul>

					<div className="tab-content">
						<div role="tabpanel" className={`tab-pane ${this.state.home}`} id="home">home</div>
						<div role="tabpanel" className={`tab-pane ${this.state.profile}`} id="profile">profile</div>
						<div role="tabpanel" className={`tab-pane ${this.state.messages}`} id="messages">messages</div>
						<div role="tabpanel" className={`tab-pane ${this.state.settings}`} id="settings">settings</div>
					</div>
				</div>
			</Page>
		);
  }

	handleStatus(event)
	{
		this.setState({
			[this.current]: '',
			[event.target.name]: 'active'
		});
		this.current = event.target.name;
	}
}

module.exports = TabsPage;

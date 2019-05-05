import React from 'react';
import { withRouter } from 'react-router-dom';
import SbGroup from './controls/SbGroup.jsx';
import SbLink from './controls/SbLink.jsx';

class AppSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: ''
    };
    this.handleItemClick = this.handleItemClick.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleItemClick(name) {
    this.setState({
      currentTab: ''
    });
  }

  handleToggle(name) {
    this.setState(prev => ({
      currentTab: prev.currentTab == name ? '' : name
    }));
  }

  isCurrentTab(tab) {
    return tab == this.state.currentTab;
  }

  render() {
    var locPath = this.props.location.pathname;
    return (
      <aside className="main-sidebar">
        <section className="sidebar">
          <ul className="sidebar-menu tree">
            <li className="header">{ 'Main navigation'.toUpperCase() }</li>
            <SbGroup
              active={ [
                '/empty/page',
                '/empty/box',
                '/empty/form',
                '/empty/table'
              ].includes(locPath) }
              icon="fa fa-clone"
              label="Empty"
              name="empty"
              open={ this.isCurrentTab('empty') }
              onToggle={ this.handleToggle }>
              <SbLink to="/empty/page" label="Empty page"/>
              <SbLink to="/empty/box" label="Empty box"/>
              <SbLink to="/empty/form" label="Empty form"/>
              <SbLink to="/empty/table" label="Empty table"/>
            </SbGroup>
           
          </ul>
        </section>
      </aside>
    );
  }
}

module.exports = withRouter(AppSidebar);

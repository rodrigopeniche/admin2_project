import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import AppSidebar from './AppSidebar.jsx';
import AuthLogin from './pages/AuthLogin.jsx';
import Header from './controls/Header';
import HomePage from './pages/HomePage';
import ApiPage from './pages/ApiPage';
import ChartsPage from './pages/ChartsPage';
import DirectChatPage from './pages/DirectChatPage';
import ImagesPage from './pages/ImagesPage';
import PaginationPage from './pages/PaginationPage';
import TabsPage from './pages/TabsPage';
import TimelinePage from './pages/TimelinePage';
// pages
// import BoxPage from './pages/demos/BoxPage.jsx';
import DashboardPage from './pages/DashboardPage';
import TestPage from './pages/TestPage';
import Empty from './pages/Empty.jsx';
import EmptyBox from './pages/EmptyBox.jsx';
import EmptyForm from './pages/EmptyForm.jsx';
import EmptyTable from './pages/EmptyTable.jsx';
import Citas from './pages/Citas.jsx';
import Edit from './pages/Edit.jsx';
import EditCita from './pages/EditCita.jsx';

class AppPrivate extends React.Component {
  render() {
    return (
      <div style={{height: '100%'}}>
        <Header title={<span><b>SIADESOD</b></span>}/>
        <AppSidebar/>
        <Switch>
          <Route exact path="/empty/page" component={ Empty } />
          {/* <Route exact path="/empty/box" component={ EmptyBox } /> */}
          <Route exact path="/empty/form" component={ EmptyForm } />
      
          { /**/ }
          <Route exact path="/" component={ Citas } />
          <Route exact path="/edit/:id" component={Edit}/>
          <Route exact path="/cita/:id" component={EditCita}/>
          <Route exact path="/test" component={ TestPage } />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/api" component={ApiPage} />
          <Route exact path="/charts" component={ChartsPage} />
          <Route exact path="/directchat" component={DirectChatPage} />
          <Route exact path="/images" component={ImagesPage} />
          <Route exact path="/pagination" component={PaginationPage} />
          <Route exact path="/tabs" component={TabsPage} />
          <Route exact path="/timeline" component={TimelinePage} />
          <Redirect to="/"/>
        </Switch>
      </div>
    );
  }
}

module.exports = AppPrivate;

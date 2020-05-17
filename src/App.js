import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LandingContainer } from './containers/LandingContainer';
import { AdminAuthContainer } from './containers/AdminAuthContainer';
import { AdminDashboardContainer } from './containers/AdminDashboardContainer';
import { AppNav } from './common/AppNav';
import { NoMatch } from './containers/NoMatch';
import { AuthProvider } from './Auth';
import './App.scss';

const App = () => (
  <AuthProvider>
    <Router>
      <AppNav />
      <Switch>
        <Route exact path="/" component={LandingContainer} key={0} />
        <Route exact path="/admin" component={AdminAuthContainer} key={1} />
        <Route exact path="/dashboard" component={AdminDashboardContainer} key={2} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  </AuthProvider>
);

export default App;

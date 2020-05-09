import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { LandingContainer } from './containers/LandingContainer';
import { AdminAuthContainer } from './containers/AdminAuthContainer';
import { AdminDashboardContainer } from './containers/AdminDashboardContainer'
import { AuthProvider } from './Auth';
import './App.scss';

const App = () => (
  <AuthProvider>
    <Router>
      <Route exact path="/" component={LandingContainer} key={0} />
      <Route exact path="/admin" component={AdminAuthContainer} key={1} />
      <Route exact path="/dashboard" component={AdminDashboardContainer} key={1} />
    </Router>
  </AuthProvider>
);

export default App;

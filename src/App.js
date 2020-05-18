import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LandingContainer } from './containers/LandingContainer';
import { AdminAuthContainer } from './containers/AdminAuthContainer';
import { AdminDashboardContainer } from './containers/AdminDashboardContainer';
import { AppNav } from './common/AppNav';
import { Footer } from './common/Footer';
import { NoMatch } from './containers/NoMatch';
import { AuthProvider } from './Auth';
import PrivateRoute from './routes/PrivateRoute';
import './App.scss';

const App = () => (
  <AuthProvider>
    <Router>
      <AppNav />
      <Switch>
        <Route exact path="/" component={LandingContainer} key={0} />
        <Route exact path="/admin" component={AdminAuthContainer} key={1} />
        <PrivateRoute exact path="/dashboard" component={AdminDashboardContainer} key={2} />
        <Route component={NoMatch} />
      </Switch>
      <Footer />
    </Router>
  </AuthProvider>
);

export default App;

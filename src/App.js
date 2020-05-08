import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Landing } from './views/Landing';
import { Admin } from './views/Admin';
import './App.scss';

const App = () => {
  return (
    <Router>
      <>
        {/* <Navbar /> */}
        <Route exact path="/" component={Landing} key={0} />
        <Route exact path="/admin" component={Admin} key={1} />
      </>
    </Router>
  );
}

export default App;

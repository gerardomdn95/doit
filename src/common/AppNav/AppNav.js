import React, { useContext } from 'react';
import { AuthContext } from '../../Auth';
import { Link } from 'react-router-dom';
import firebaseApp from '../../config/firebase';
import './appNav.scss';

const AppNav = () => {
  const { currentUser, userInfo } = useContext(AuthContext);

  const LogOut = () => {
    firebaseApp.auth().signOut();
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
      <Link to='/'>
        <h5 className="navbar-brand">EDOARDO LEDS</h5>
      </Link>
      <div>
        {currentUser && userInfo
          ? (
            <div>
              <Link type="button" className="btn btn-success" to="/dashboard">Agregar</Link>
              <button type="button" className="btn btn-danger" onClick={() => LogOut()}>Logout</button>
            </div>
          )
          : null}
      </div>
    </nav>
  )
};

export default AppNav;

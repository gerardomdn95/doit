import React, { useContext } from 'react';
import { AuthContext } from '../../Auth';
import firebaseApp from '../../config/firebase';
import { useHistory, Link } from 'react-router-dom';
import './appNav.scss';

const AppNav = () => {
  const history = useHistory();
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
              <button type="button" className="btn btn-success" onClick={() => history.push('/dashboard')}>Agregar</button>
              <button type="button" className="btn btn-danger" onClick={() => LogOut()}>Logout</button>
            </div>
          )
          : null}
      </div>
    </nav>
  )
};

export default AppNav;

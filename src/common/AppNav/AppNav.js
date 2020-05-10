import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../Auth';
import firebaseApp from '../../config/firebase';

const AppNav = () => {
  const { currentUser, userInfo } = useContext(AuthContext);

  const LogOut = () => {
    firebaseApp.auth().signOut();
  }

  useEffect(() => {
    // console.log(currentUser);
    // console.log(userInfo);
    // console.log(AuthContext);
  }, [currentUser, userInfo]);

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
        <h5 className="navbar-brand">EDOARDO LEDS</h5>
        <div>
        <button type="button" className="btn btn-outline-danger" onClick={() => LogOut()}>Logout</button>
          {currentUser && userInfo
            ? <button type="button" className="btn btn-danger" onClick={() => LogOut()}>Logout</button>
            : null}
        </div>
      </nav>
    </React.Fragment>
  )
};

export default AppNav;

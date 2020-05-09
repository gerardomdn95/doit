import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { AppNav } from '../../common/AppNav';
import { AdminAuthForm } from '../../components/AdminAuthForm';
import { AuthContext } from '../../Auth';
import { signInUser } from '../../modules/firebaseUsage';
import Swal from 'sweetalert2';

const AdminAuthContainer = () => {

  const history = useHistory();

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    currentUser && history.push('/dashboard');
  }, [currentUser, history])

  const [loading, setLoading] = useState('');

  const [userValues, setUserValues] = useState({
    email: '',
    password: ''
  });

  //Update inputValue on change
  const handleChange = (event) => {
    setUserValues({ ...userValues, [event.target.id]: event.target.value })
  }

  const handleLogin = (e) => {
    // Set loading status on login button
    setLoading('is-loading');

    //Login
    signInUser(userValues.email, userValues.password)
      .catch((err) => {
        setLoading('');
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: err.message,
        });
      })
  }

  return (
    <div>
      <AppNav />
      <main>
        <div className="container">
          <AdminAuthForm
            loading={loading}
            handleLogin={handleLogin}
            handleChange={handleChange} 
          />
        </div>
      </main>
    </div>
  );
};

export default AdminAuthContainer;

import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { AppNav } from '../../common/AppNav';
import { AdminAuthForm } from '../../components/AdminAuthForm';
import { AuthContext } from '../../Auth';
import { signInUser } from '../../modules/firebaseUsage';
import Swal from 'sweetalert2';

const AdminAuthContainer = () => {

  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [userValues, setUserValues] = useState({
    email: '',
    password: ''
  });
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    currentUser && history.push('/dashboard');
  }, [currentUser, history])

  const handleChange = (event) => {
    setUserValues({ ...userValues, [event.target.id]: event.target.value })
  }

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

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

import React from 'react';
import FadeIn from 'react-fade-in';
import './adminAuthForm.scss';

const AdminAuthForm = ({ loading, handleLogin, handleChange }) => {

  return (
    <main className="m-5">
      <FadeIn>
        <div className="card">
          <h5 className="card-header">Admin</h5>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="email">Usuario</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <input type="password" className="form-control" id="password" onChange={handleChange} />
              </div>
              <div className="d-flex justify-content-end">
                {loading
                  ? <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                  : <button onClick={handleLogin} className="btn btn-outline-dark">Iniciar sesión</button>}
              </div>
            </form>
          </div>
        </div>
      </FadeIn>
    </main>
  );
}

export default AdminAuthForm;
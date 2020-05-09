import React from 'react';
import FadeIn from 'react-fade-in';
import './adminAuthForm.scss';

const AdminAuthForm = () => {

  return (
    <main className="auth-container">
      <FadeIn>
        <div className="card">
          <h5 className="card-header">Admin</h5>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">Usuario</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Contraseña</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
              </div>
              <button type="submit" className="btn btn-primary">Login</button>
            </form>
          </div>
        </div>
      </FadeIn>
    </main>
  );
}

export default AdminAuthForm;
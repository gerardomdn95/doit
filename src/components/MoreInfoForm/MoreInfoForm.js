import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowLeft  } from '@fortawesome/free-solid-svg-icons';

const MoreInfoForm = ({ painting, setContact }) => {

  const [status, setStatus] = useState('');

  const submitForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus("SUCCESS");
      } else {
        setStatus("ERROR");
      }
    };
    xhr.send(data);
  }

  return (
    <form
      onSubmit={submitForm}
      action="https://formspree.io/xpzyqpep"
      method="POST"
    >
      {status === '' &&
        (
          <section>
            <input readOnly type="text" className="d-none" value={painting} name="Pintura" />
            <div className="form-group">
              <label htmlFor="name" className="font-weight-bold">Nombre</label>
              <input type="text" className="form-control" id="name" name="Nombre" />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="font-weight-bold">Correo electrónico</label>
              <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" />
            </div>
            <div className="form-group d-flex justify-content-around">
              <div>
                <input type="radio" id="original" name="Tipo" value="Original" style={{marginRight: `${5}px`}} />
                <label for="original" className="font-weight-bold">Original</label>
              </div>
              <div>
                <input type="radio" id="print" name="Tipo" value="Original" style={{marginRight: `${5}px`}} />
                <label for="print" className="font-weight-bold">Print</label>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message" className="font-weight-bold">Mensaje</label>
              <textarea className="form-control" name="Mensaje" id="message" rows="3"></textarea>
            </div>
          </section>
        )}
      {status === "SUCCESS"
        ? (
          <section>
            <p className="font-weight-bolder text-center">Gracias</p>
            <p className="text-center text-dark">En breve te contactaremos</p>
          </section>
        )
        : <button type="submit" className="btn btn-dark">Enviar</button>}
      {status === "ERROR" && <p className="text-center text-warning">Ocurrió un error, intentalo más tarde</p>}
    </form>
  );
}

export default MoreInfoForm;

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
              <label htmlFor="last_name" className="font-weight-bold">Apellidos</label>
              <input type="text" className="form-control" id="last_name" name="Apellidos" />
            </div>
            <div className="form-group">
              <label htmlFor="adress" className="font-weight-bold">Dirección</label>
              <input type="text" className="form-control" id="adress" name="Dirección" />
            </div>
            <div className="form-group">
              <label htmlFor="city" className="font-weight-bold">Ciudad</label>
              <input type="text" className="form-control" id="city" name="Ciudad" />
            </div>
            <div className="form-group">
              <label htmlFor="city" className="font-weight-bold">Estado</label>
              <select className="form-control" name="Estado" id="state">
                <option value="" disabled selected>Selecciona</option>
                <option value="Aguascalientes">Aguascalientes</option>
                <option value="Baja California">Baja California</option>
                <option value="Baja California Sur">Baja California Sur</option>
                <option value="Campeche">Campeche</option>
                <option value="Chiapas">Chiapas</option>
                <option value="Chihuahua">Chihuahua</option>
                <option value="CDMX">Ciudad de México</option>
                <option value="Coahuila">Coahuila</option>
                <option value="Colima">Colima</option>
                <option value="Durango">Durango</option>
                <option value="Estado de México">Estado de México</option>
                <option value="Guanajuato">Guanajuato</option>
                <option value="Guerrero">Guerrero</option>
                <option value="Hidalgo">Hidalgo</option>
                <option value="Jalisco">Jalisco</option>
                <option value="Michoacán">Michoacán</option>
                <option value="Morelos">Morelos</option>
                <option value="Nayarit">Nayarit</option>
                <option value="Nuevo León">Nuevo León</option>
                <option value="Oaxaca">Oaxaca</option>
                <option value="Puebla">Puebla</option>
                <option value="Querétaro">Querétaro</option>
                <option value="Quintana Roo">Quintana Roo</option>
                <option value="San Luis Potosí">San Luis Potosí</option>
                <option value="Sinaloa">Sinaloa</option>
                <option value="Sonora">Sonora</option>
                <option value="Tabasco">Tabasco</option>
                <option value="Tamaulipas">Tamaulipas</option>
                <option value="Tlaxcala">Tlaxcala</option>
                <option value="Veracruz">Veracruz</option>
                <option value="Yucatán">Yucatán</option>
                <option value="Zacatecas">Zacatecas</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="cp" className="font-weight-bold">Código Postal</label>
              <input type="text" className="form-control" id="cp" name="Código Postal" maxLength="5" />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="font-weight-bold">Correo electrónico</label>
              <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" />
            </div>
            <div className="form-group">
              <label htmlFor="phone" className="font-weight-bold">Teléfono</label>
              <input type="tel" className="form-control" id="phone" name="Teléfono" />
            </div>
            <div className="form-group d-flex justify-content-around">
              <div>
                <input type="radio" id="original" name="Tipo" value="Original" style={{ marginRight: `${5}px` }} />
                <label for="original" className="font-weight-bold">Original</label>
              </div>
              <div>
                <input type="radio" id="print" name="Tipo" value="Original" style={{ marginRight: `${5}px` }} />
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

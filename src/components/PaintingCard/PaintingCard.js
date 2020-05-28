import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Auth';
import { deletePaintingById } from '../../modules/firebaseUsage';
import FadeIn from 'react-fade-in';
import Swal from 'sweetalert2';
import './paintingCard.scss';
import MoreInfoForm from '../MoreInfoForm/MoreInfoForm';

const PaintingCard = ({ title, price, printPrice, description, img, technique, size, paintingId, printSize, printStock }) => {
  const { currentUser, userInfo } = useContext(AuthContext);
  const [details, setDetails] = useState(true);
  const [about, setAbout] = useState(false);
  const [contact, setContact] = useState(false);

  const deletePainting = () => {
    Swal.fire({
      title: `Deseas eliminar ${title}`,
      text: 'No podrás revertir esto',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        Swal.showLoading();
        deletePaintingById(paintingId)
          .then(() => {
            Swal.fire(
              'Pintura eliminada',
              `${title} fue eliminada`,
              'success'
            ).then(() => window.location.reload())
          })
      }
    })
  }

  return (
    <div className="col-12 col-md-6 col-lg-3">
      <FadeIn>
        <div className="card">
          <img className="card-img-top" src={img} alt={img.title} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <hr />
            <section>
              <p>{`$${price} MXN`}</p>
              <ul className="nav">
                <li className="nav-item">
                  <p className={`nav-link ${details ? 'active' : ''}`} onClick={() => {setAbout(false); setDetails(true); setContact(false); }}>Detalles</p>
                </li>
                <li className="nav-item">
                  <p className={`nav-link ${about ? 'active' : ''}`} onClick={() => {setAbout(true); setDetails(false); setContact(false); }}>Acerca de</p>
                </li>
                <li className="nav-item">
                  <p className={`nav-link ${contact ? 'active' : ''}`} onClick={() => {setAbout(false); setDetails(false); setContact(true); }}>Adquirir</p>
                </li>
              </ul>
              {details &&
                <section className="section-container">
                  <p className="font-weight-bold">Original</p>
                  <ul>
                    <li>{technique}</li>
                    <li>{size}</li>
                    <li>2020</li>
                  </ul>
                  <p className="font-weight-bold">Print</p>
                  <ul>
                    <li>{`Precio: $${printPrice} MXN`}</li>
                    <li>Impresión digital sobre papel, seriadas y firmadas.</li>
                    <li>{printSize}</li>
                    <li>{`Unicamente ${printStock} existentes.`}</li>
                  </ul>
                </section>}
              {about && <p>{description}</p>}
              {contact && <MoreInfoForm painting={title} setContact={setContact} />}
              <div className="d-flex justify-content-around">
                {currentUser && userInfo
                  ? <button onClick={() => deletePainting()} type="button" className="btn btn-danger">Eliminar</button>
                  : null}
              </div>
            </section>
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default PaintingCard;

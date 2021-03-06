import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Auth';
import { deletePaintingById } from '../../modules/firebaseUsage';
import FadeIn from 'react-fade-in';
import Swal from 'sweetalert2';
import './paintingCard.scss';
import { MoreInfoForm } from '../MoreInfoForm';
import { SetHTML } from '../SetHTML';

const PaintingCard = ({
  title, price, printPrice,
  img, technique, size, paintingId,
  printSize, paypal
}) => {
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
    <div className="col-12 col-md-6 col-lg-4">
      <FadeIn>
        <div className="card">
          <img className="card-img-top" src={img} alt={img.title} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <hr />
            <section>
              <ul className="nav">
                <li className="nav-item">
                  <p className={`nav-link ${details ? 'active' : ''}`} onClick={() => { setAbout(false); setDetails(true); setContact(false); }}>Detalles</p>
                </li>
                <li className="nav-item">
                  <p className={`nav-link ${about ? 'active' : ''}`} onClick={() => { setAbout(true); setDetails(false); setContact(false); }}>Acerca de</p>
                </li>
                <li className="nav-item">
                  <p className={`nav-link ${contact ? 'active' : ''} text-info`} onClick={() => { setAbout(false); setDetails(false); setContact(true); }}>Adquirir</p>
                </li>
              </ul>
              {details &&
                <section className="section-container">
                  <p className="font-weight-bold">Original</p>
                  <ul>
                    { price &&  <li>{`$${price} MXN`}</li>}
                    <li>{technique}</li>
                    { price && <li>{size}</li>}
                  </ul>
                  <p className="font-weight-bold">Print</p>
                  <ul>
                    <li>{`$${printPrice} MXN`}</li>
                    <li>{printSize}</li>
                  </ul>
                </section>}
              {about && <p>
                Los prints son impresiones sobre papel de arte de alta calidad, cada print está firmado y seriado. El enmarcado es una elegante moldura de poliestireno negro.
                </p>}
              {contact && (
                <div>
                  <p className="font-weight-bold">Paga con Paypal</p>
                  <SetHTML paypalButton={paypal} />
                  <br />
                  <hr />
                  <br />
                  <p className="font-weight-bold">¿No cuentas con Paypal?</p>
                  <MoreInfoForm painting={title} setContact={setContact} />
                </div>
              )}
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

import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Auth';
import { deletePainting } from '../../modules/firebaseUsage';
import FadeIn from 'react-fade-in';
import Swal from 'sweetalert2';
import './paintingCard.scss';
import MoreInfoForm from '../MoreInfoForm/MoreInfoForm';

const PaintingCard = ({ title, price, description, img, technique, size }) => {
  const { currentUser, userInfo } = useContext(AuthContext);
  const [details, setDetails] = useState(true);
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
        deletePainting(title)
          .then(() => {
            Swal.fire(
              'Pintura eliminada',
              `${title} fue eliminada`,
              'success'
            )
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
            {contact
              ? <MoreInfoForm painting={title} setContact={setContact} />
              : (
                <section>
                  <p>{`$${price} MXN`}</p>
                  <ul className="nav">
                    <li className="nav-item">
                      <p className={`nav-link ${details ? 'active' : ''}`} onClick={() => setDetails(true)}>Detalles</p>
                    </li>
                    <li className="nav-item">
                      <p className={`nav-link ${!details ? 'active' : ''}`} onClick={() => setDetails(false)}>Acerca de</p>
                    </li>
                  </ul>
                  {details
                    ? <ul>
                      <li>{technique}</li>
                      <li>{size}</li>
                      <li>2020</li>
                    </ul>
                    : <p>{description}</p>}
                    <div className="d-flex justify-content-around">
                      { currentUser && userInfo
                        ? <button onClick={() => deletePainting()} type="button" className="btn btn-danger">Eliminar</button>
                        : <button onClick={() => setContact(true)} type="button" className="btn btn-dark">Adquirir</button> }
                    </div>
                </section>
              )}
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default PaintingCard;

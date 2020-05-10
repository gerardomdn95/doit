import React, { useState } from 'react';
import FadeIn from 'react-fade-in';
// import calamardo from '../../assets/jpg/calamardo.jpg';
import './paintingCard.scss';

const PaintingCard = ({title, price, description, img}) => {
  const [details, setDetails] = useState(true);

  return (
    <div className="col-12 col-md-6 col-lg-3">
      <FadeIn>
        <div className="card">
          <img className="card-img-top" src={img} alt={img.title} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <hr />
            <p>{`$${price} MXN`}</p>
            <ul className="nav">
              <li className="nav-item">
                <p className={`nav-link ${details ? 'active' : ''}`} onClick={() => setDetails(true)}>Detalles</p>
              </li>
              <li className="nav-item">
                <p className={`nav-link ${!details ? 'active' : ''}`} onClick={() => setDetails(false)}>Acerca de</p>
              </li>
            </ul>
            { details 
              ? <ul>
                  <li>Óleo</li>
                  <li>15,25 x 19 in.</li>
                  <li>2020</li>
                </ul>
              : <p>{description}</p>}
            <div className="d-flex justify-content-center">
              <button type="button" className="btn btn-dark">Adquirir</button>
            </div>
            {/* <div className="d-flex justify-content-around">
              <button type="button" className="btn btn-primary">Modificar</button>
              <button type="button" className="btn btn-danger">Eliminar</button>
            </div> */}
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default PaintingCard;
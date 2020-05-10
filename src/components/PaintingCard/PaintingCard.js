/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';
import FadeIn from 'react-fade-in';
import calamardo from '../../assets/jpg/calamardo.jpg';
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
                <p className={`nav-link ${details ? 'active' : ''}`} onClick={() => setDetails(!details)}>Detalles</p>
              </li>
              <li className="nav-item">
                <p className={`nav-link ${!details ? 'active' : ''}`} onClick={() => setDetails(!details)}>Acerca de</p>
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
              <button type="button" class="btn btn-dark">Solicita información</button>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default PaintingCard;
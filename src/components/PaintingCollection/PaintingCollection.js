import React, { useEffect, useState } from 'react';
import { PaintingCard } from '../../components/PaintingCard';
import { getPaintings } from '../../modules/firebaseUsage';
import './paintingCollection.scss'

export const PaintingCollection = () => {

  const [paintings, setPaintings] = useState([]);

  useEffect(() => {
    getPaintings()
      .then((data) => setPaintings(data));
  }, []);

  const renderPaintings = () => (
    paintings.length > 0
      ? paintings.map((painting) =>
        <PaintingCard
          key={painting.title}
          title={painting.title}
          description={painting.description}
          price={painting.price}
          img={painting.img}
          technique={painting.technique}
          size={painting.size}
        />)
      : (
        <div className="col-12 spinner-container">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )
  )

  return (
    <div className="navbar-light bg-light">
      <div className="container">
        <div className="row">
          { paintings ? renderPaintings() : <p>Ocurrió un error al obtener las pinturas</p>}
        </div>
      </div>
    </div>
  )
}

export default PaintingCollection;
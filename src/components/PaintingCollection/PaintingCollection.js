import React, { useEffect, useState } from 'react';
import { PaintingCard } from '../../components/PaintingCard';
import { getPaintings } from '../../modules/firebaseUsage';
import './paintingCollection.scss'

export const PaintingCollection = () => {

  const [paintings, setPaintings] = useState([]);

  useEffect(() => {
    getPaintings()
      .then((data) => setPaintings(data));
  }, [paintings]);

  return (
    <div>
      <div className="container">
        <div className="row">
          {paintings.length > 0
            ? paintings.map((painting) =>
              <PaintingCard
                key={painting.title}
                title={painting.title}
                description={painting.description}
                price={painting.price}
                img={painting.img}
              />)
            : (
              <div className="col-12 spinner-container">
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            )}
        </div>
      </div>
    </div>
  )
}

export default PaintingCollection;
import React from 'react';
import main from '../../assets/jpg/main.jpg';
import FadeIn from 'react-fade-in';
import './mainLandingSection.scss'

const MainLandingSection = () => {

  return (
    <main className="main-container bg-dark">
      <div className="container">
        <div className="main-content">
          <FadeIn>
            <div className="card">
              <img className="img-fluid" src={main} alt="" />
            </div>
            <p className="text-light">Artista mexicano ecléctico.</p>
          </FadeIn>
        </div>
      </div>
    </main>
  );
}

export default MainLandingSection;

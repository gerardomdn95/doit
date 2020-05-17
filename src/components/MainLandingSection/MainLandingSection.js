import React from 'react';
import main from '../../assets/png/main.png';
import FadeIn from 'react-fade-in';
import './mainLandingSection.scss'

const MainLandingSection = () => {

  return (
    <main className="main-container bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <FadeIn>
              <div className="card">
                <img className="img-fluid" src={main} alt="" />
              </div>
            </FadeIn>
          </div>
          <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
            <h1 className="text-light">About me</h1>
            <p className="text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, iste, odio deleniti eaque numquam molestias qui non quis natus provident a. Ipsa quidem fuga labore necessitatibus dolorum suscipit iure commodi!</p>
            <p className="text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi cupiditate labore dicta nemo voluptatem, repellendus assumenda, illum corrupti mollitia consequatur architecto qui quia, quam ea! Ullam quis repudiandae dolor distinctio!</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainLandingSection;

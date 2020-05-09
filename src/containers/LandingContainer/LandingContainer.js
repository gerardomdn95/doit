import React from 'react';
import { AppNav } from '../../common/AppNav';
import { MainLandingSection } from '../../components/MainLandingSection';
import { Footer } from '../../common/Footer';

const LandingContainer = () => {
  return (
    <div>
      <AppNav />
      <MainLandingSection />
      <Footer />
    </div>
  );
};

export default LandingContainer;

import React from 'react';
import { AppNav } from '../../common/AppNav';
import { MainLandingSection } from '../../components/MainLandingSection';
import { PaintingCollection } from '../../components/PaintingCollection';
import { Footer } from '../../common/Footer';

const LandingContainer = () => {
  return (
    <div>
      <AppNav />
      <MainLandingSection />
      <PaintingCollection />
      <Footer />
    </div>
  );
};

export default LandingContainer;

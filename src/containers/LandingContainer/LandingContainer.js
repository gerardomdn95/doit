import React from 'react';
import { MainLandingSection } from '../../components/MainLandingSection';
import { PaintingCollection } from '../../components/PaintingCollection';
import { Footer } from '../../common/Footer';

const LandingContainer = () => {
  return (
    <div>
      <MainLandingSection />
      <PaintingCollection />
      <Footer />
    </div>
  );
};

export default LandingContainer;

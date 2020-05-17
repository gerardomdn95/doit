import React from 'react';
import { MainLandingSection } from '../../components/MainLandingSection';
import { PaintingCollection } from '../../components/PaintingCollection';

const LandingContainer = () => {
  return (
    <div>
      <MainLandingSection />
      <PaintingCollection />
    </div>
  );
};

export default LandingContainer;

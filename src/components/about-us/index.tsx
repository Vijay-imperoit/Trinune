import React, { Suspense } from 'react';
import Header from '../landing-page/header';
import HeroSection from './hero-section/index.tsx';
const OurProcess = React.lazy(() => import('./our-process/index.tsx'));
const OurVision = React.lazy(() => import('./our-vision/index.tsx'));
const LeadershipTeam = React.lazy(() => import('./our-team/index.tsx'));
const OurHistory = React.lazy(() => import('./our-history/index.tsx'));
const Client = React.lazy(() => import('../landing-page/clients/index.tsx'));
const Footer = React.lazy(() => import('../blogs/footer/index.tsx'));

const AboutUs = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Suspense fallback={<div></div>}>
        <OurProcess />
        <OurVision />
        <LeadershipTeam />
        <OurHistory />
        <Client />
        <Footer />
      </Suspense>
    </>
  );
};

export default AboutUs;

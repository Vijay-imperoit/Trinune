import React, { Suspense } from 'react';
import HeroSection from './hero-section';
import Header from '../landing-page/header';

const Awards = React.lazy(() => import('./awards'));
const Featured = React.lazy(() => import('./featured'));
const AchievedClients = React.lazy(() => import('./achived-clients'));
const Footer = React.lazy(() => import('../blogs/footer'));

const Achievements = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Suspense fallback={<div></div>}>
        <Awards />
        <Featured />
        <AchievedClients />
        <Footer />
      </Suspense>
    </>
  );
};

export default Achievements;

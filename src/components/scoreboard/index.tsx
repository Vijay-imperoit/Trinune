import React, { Suspense } from 'react';
import HeroSection from './hero-section/index.tsx';
import Header from '../landing-page/header/index.tsx';
const ContactUs = React.lazy(()=> import("../landing-page/contact-us"));

const AboutScoreBoard = React.lazy(() => import('./about-scoreboard/index.tsx'));
const Footer = React.lazy(() => import('../blogs/footer/index.tsx'));

const ScoreBoard = () => {
  return (
    <>
      <Header isWhiteHeader={true} />
      <HeroSection />
      <Suspense fallback={<div></div>}>
        <AboutScoreBoard />
        <ContactUs />
        <Footer />
      </Suspense>
    </>
  );
};

export default ScoreBoard;

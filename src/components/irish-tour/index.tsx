import React, { Suspense } from 'react';
import HeroSection from './hero-section/index.tsx';
import Header from '../landing-page/header/index.tsx';
const ContactUs = React.lazy(()=> import("../landing-page/contact-us"));

const AboutIrishTour = React.lazy(() => import('./about-irishtour/index.tsx'));
const Footer = React.lazy(() => import('../blogs/footer/index.tsx'));

const IrishTour = () => {
  return (
    <>
      <Header isWhiteHeader={true} />
      <HeroSection />
      <Suspense fallback={<div></div>}>
        <AboutIrishTour />
        <ContactUs />
        <Footer />
      </Suspense>
    </>
  );
};

export default IrishTour;

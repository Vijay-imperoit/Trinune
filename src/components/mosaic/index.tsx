import React, { Suspense } from 'react';
import HeroSection from './hero-section/index.tsx';
import Header from '../landing-page/header/index.tsx';
const ContactUs = React.lazy(()=> import("../landing-page/contact-us"));

const AboutMosaic = React.lazy(() => import('./about-mosaic/index.tsx'));
const Footer = React.lazy(() => import('../blogs/footer/index.tsx'));

const Mosaic = () => {
  return (
    <>
      <Header isWhiteHeader={true} />
      <HeroSection />
      <Suspense fallback={<div></div>}>
        <AboutMosaic />
        <ContactUs />
        <Footer />
      </Suspense>
    </>
  );
};

export default Mosaic;

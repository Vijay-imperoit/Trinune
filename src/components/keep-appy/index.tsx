import React, { Suspense } from 'react';
import HeroSection from './hero-section/index.tsx';
import Header from '../landing-page/header/index.tsx';
const ContactUs = React.lazy(()=> import("../landing-page/contact-us"));

const AboutKeepAppy = React.lazy(() => import('./about-keepappy/index.tsx'));
const Footer = React.lazy(() => import('../blogs/footer/index.tsx'));

const KeepAppy = () => {
  return (
    <>
      <Header isWhiteHeader={true} />
      <HeroSection />
      <Suspense fallback={<div></div>}>
        <AboutKeepAppy />
        <ContactUs />
        <Footer />
      </Suspense>
    </>
  );
};

export default KeepAppy;

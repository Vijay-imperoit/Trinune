import React, { Suspense } from 'react';
import HeroSection from './hero-section/index.tsx';
import Header from '../landing-page/header/index.tsx';
const ContactUs = React.lazy(()=> import("../landing-page/contact-us"));

const AboutSureWash = React.lazy(() => import('./about-surewash/index.tsx'));
const Footer = React.lazy(() => import('../blogs/footer/index.tsx'));

const SureWash = () => {
  return (
    <>
      <Header isWhiteHeader={true} />
      <HeroSection />
      <Suspense fallback={<div></div>}>
        <AboutSureWash />
        <ContactUs />
        <Footer />
      </Suspense>
    </>
  );
};

export default SureWash;

import React, { Suspense } from 'react';
import HeroSection from './hero-section/index.tsx';
import Header from '../landing-page/header/index.tsx';
const ContactUs = React.lazy(()=> import("../landing-page/contact-us"));

const AboutUtrade = React.lazy(() => import('./about-utrade/index.tsx'));
const Footer = React.lazy(() => import('../blogs/footer/index.tsx'));

const Utrade = () => {
  return (
    <>
      <Header isWhiteHeader={true} />
      <HeroSection />
      <Suspense fallback={<div></div>}>
        <AboutUtrade />
        <ContactUs />
        <Footer />
      </Suspense>
    </>
  );
};

export default Utrade;

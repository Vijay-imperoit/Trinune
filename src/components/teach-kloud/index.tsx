import React, { Suspense } from 'react';
import HeroSection from './hero-section/index.tsx';
import Header from '../landing-page/header/index.tsx';
const ContactUs = React.lazy(()=> import("../landing-page/contact-us"));

const AboutTeachKloud = React.lazy(() => import('./about-teachkloud/index.tsx'));
const Footer = React.lazy(() => import('../blogs/footer/index.tsx'));

const TeachKloud = () => {
  return (
    <>
      <Header isWhiteHeader={true} />
      <HeroSection />
      <Suspense fallback={<div></div>}>
        <AboutTeachKloud />
        <ContactUs />
        <Footer />
      </Suspense>
    </>
  );
};

export default TeachKloud;

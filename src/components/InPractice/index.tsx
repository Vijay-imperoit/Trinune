import React, { Suspense } from 'react';
import HeroSection from './hero-section/index.tsx';
import Header from '../landing-page/header/index.tsx';
const ContactUs = React.lazy(()=> import("../landing-page/contact-us"));

const AboutInPractice = React.lazy(() => import('./about-inpractice/index.tsx'));
const Footer = React.lazy(() => import('../blogs/footer/index.tsx'));

const InPractice = () => {
  return (
    <>
      <Header isWhiteHeader={true} />
      <HeroSection />
      <Suspense fallback={<div></div>}>
        <AboutInPractice />
        <ContactUs />
        <Footer />
      </Suspense>
    </>
  );
};

export default InPractice;

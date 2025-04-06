import React, { Suspense } from 'react';
import HeroSection from './hero-section/index.tsx';
import Header from '../landing-page/header/index.tsx';
const ContactUs = React.lazy(()=> import("../landing-page/contact-us"));

const AboutDruidLearning = React.lazy(() => import('./about-druidlearning/index.tsx'));
const Footer = React.lazy(() => import('../blogs/footer/index.tsx'));

const DruidLearning = () => {
  return (
    <>
      <Header isWhiteHeader={true} />
      <HeroSection />
      <Suspense fallback={<div></div>}>
        <AboutDruidLearning />
        <ContactUs />
        <Footer />
      </Suspense>
    </>
  );
};

export default DruidLearning;

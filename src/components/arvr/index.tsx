import React, { Suspense } from 'react';
import HeroSection from './hero-section';
import Header from '../landing-page/header';

const VRAppDevelopment = React.lazy(() => import('./vr-app-development'));
const Industries = React.lazy(() => import('./industries'));
const Services = React.lazy(() => import('./services'));
const Portfolio = React.lazy(() => import('./portfolio'));
const BlogFooter = React.lazy(() => import('../blogs/footer'));

const ARVR = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Suspense fallback={<div></div>}>
        <VRAppDevelopment />
        <Industries />
        <Services />
        <Portfolio />
        <BlogFooter />
      </Suspense>
    </>
  );
};

export default ARVR;

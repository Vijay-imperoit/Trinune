import React, { Suspense } from 'react';
import Header from '../landing-page/header';
import HeroSection from './hero-section';

const UIUXSection = React.lazy(() => import('./ui-ux'));
const UIUXProduct = React.lazy(() => import('./ui-ux-product'));
const DesignStudio = React.lazy(() => import('./design-studio'));
const CaseStudies = React.lazy(() => import('./case-studies'));
const Client = React.lazy(() => import('../ios-app-development/clients'));
const BlogFooter = React.lazy(() => import('../blogs/footer'));

const UIUX = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Suspense fallback={<div></div>}>
        <UIUXSection />
        <UIUXProduct />
        <DesignStudio />
        <CaseStudies />
        <Client />
        <BlogFooter />
      </Suspense>
    </>
  );
};

export default UIUX;

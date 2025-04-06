import React, { Suspense } from 'react';
import HeroSection from './hero-section';
import Header from '../landing-page/header';

const ESGIntegration = React.lazy(() => import('./esg-integration'));
const ESGGoals = React.lazy(() => import('./esg-goals'));
const DegreeCoverage = React.lazy(() => import('./degree-coverage'));
const ESGExpand = React.lazy(() => import('./esg-expand'));
const Client = React.lazy(() => import('../ios-app-development/clients'));
const GetInTouch = React.lazy(() => import('./get-in-touch'));
// const FAQS = React.lazy(() => import('../mobile-app-development/faqs'));
const BlogFooter = React.lazy(() => import('../blogs/footer'));

const ESGSustainability = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Suspense fallback={<div></div>}>
        <ESGIntegration />
        <ESGGoals />
        <DegreeCoverage />
        <ESGExpand />
        <Client />
        <GetInTouch />
        {/* <FAQS type= {1}/> */}
        <BlogFooter />
      </Suspense>
    </>
  );
};

export default ESGSustainability;

import React, { Suspense } from 'react';
import HeroSection from './hero-section';
import Header from '../landing-page/header';

const Portfolio = React.lazy(() => import('./portfolio'));
const BlogFooter = React.lazy(() => import('../blogs/footer'));

const CaseStudies = () => {
  return (
    <>
      <Header isWhiteHeader={false} />
      <HeroSection />
      <Suspense fallback={<div></div>}>
        <Portfolio />
        <BlogFooter />
      </Suspense>
    </>
  );
};

export default CaseStudies;

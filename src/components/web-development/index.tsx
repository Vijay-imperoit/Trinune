import React, { Suspense } from 'react';
import Header from '../landing-page/header';
import WebDevelopmentHeroSection from './hero-section';
import { Web_AppFaq } from '../../utils/constants.ts';

const LeadingSection = React.lazy(() => import('./leading-section/index.tsx'));
const ExploreOurService = React.lazy(
  () => import('./explore-our-services/index.tsx')
);
const IndustriesMasteryService = React.lazy(
  () => import('./industries-mastery-service/index.tsx')
);
const AdvancedDevelopment = React.lazy(
  () => import('./advanced-development/index.tsx')
);
const RobustWebSection = React.lazy(
  () => import('./robust-web-section/index.tsx')
);
const ImperoWebDevelopment = React.lazy(
  () => import('./impero-web-development/index.tsx')
);
const FAQS = React.lazy(
  () => import('../mobile-app-development/faqs/index.tsx')
);
const Footer = React.lazy(() => import('../blogs/footer/index.tsx'));

const WebDevelopment = () => {
  return (
    <>
      <Header />
      <WebDevelopmentHeroSection />
      <Suspense fallback={<div></div>}>
        <LeadingSection />
        <ExploreOurService />
        <IndustriesMasteryService />
        <AdvancedDevelopment />
        <RobustWebSection />
        <ImperoWebDevelopment />
        <FAQS type={Web_AppFaq} />
        <Footer />
      </Suspense>
    </>
  );
};

export default WebDevelopment;

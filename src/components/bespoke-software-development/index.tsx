import React, { Suspense } from 'react';

import Header from '../landing-page/header';
import BespokeSolutions from './bespoke-solutions/index.tsx';
import { Be_SpokenFaq } from '../../utils/constants.ts';
const BespokeSolutions2 = React.lazy(
  () => import('./bespoke-solutions2/index.tsx')
);
const TopTireSection = React.lazy(() => import('./top-tire-section/index.tsx'));
const BespokeProcess = React.lazy(() => import('./bespoke-process/index.tsx'));
const IndustriesSection = React.lazy(
  () => import('./industries-section/index.tsx')
);
const Methodologies = React.lazy(() => import('./methodologies/index.tsx'));
const GetInTouch = React.lazy(() => import('./get-in-touch/index.tsx'));
const Client = React.lazy(
  () => import('../ios-app-development/clients/index.tsx')
);
const FAQS = React.lazy(
  () => import('../mobile-app-development/faqs/index.tsx')
);
const Footer = React.lazy(() => import('../blogs/footer'));

const BespokeSoftwareDevelopment = () => {
  return (
    <>
      <Header />
      <BespokeSolutions />
      <Suspense fallback={<div></div>}>
        <BespokeSolutions2 />
        <TopTireSection />
        <BespokeProcess />
        <IndustriesSection />
        <Methodologies />
        <GetInTouch />
        <Client />
        <FAQS type={Be_SpokenFaq} />
        <Footer />
      </Suspense>
    </>
  );
};

export default BespokeSoftwareDevelopment;

import React, { Suspense } from 'react';
import HeroSection from './hero-section';
import Header from '../landing-page/header';
import { AndroidFaq } from '../../utils/constants';

const Ideas = React.lazy(() => import('./ideas'));
const TopTierAndroid = React.lazy(() => import('./top-tier-android'));
const AndroidDevelopment = React.lazy(() => import('./android-development'));
const TechStack = React.lazy(() => import('./tech-stack'));
const DevelopmentProcess = React.lazy(() => import('./development-process'));
const GetInTouch = React.lazy(() => import('./get-in-touch'));
const FAQS = React.lazy(() => import('../mobile-app-development/faqs'));
const BlogFooter = React.lazy(() => import('../blogs/footer'));

const AndroidAppDevelopment = () => {
  return (
    <>
      <Header isWhiteHeader={true} />
      <HeroSection />
      <Suspense fallback={<div></div>}>
        <Ideas />
        <TopTierAndroid />
        <AndroidDevelopment />
        <TechStack />
        <DevelopmentProcess />
        <GetInTouch />
        <FAQS type={AndroidFaq} />
        <BlogFooter />
      </Suspense>
    </>
  );
};

export default AndroidAppDevelopment;

import React, { Suspense } from "react";
import HeroSection from "./hero-section";
import Header from "../landing-page/header";
import { MobileFaq } from '../../utils/constants';

const CustomAppDev = React.lazy(() => import("./custom-app-dev"));
const EndToEndApp = React.lazy(() => import("./end-to-end"));
const AppDevProcess = React.lazy(() => import("./app-dev-process"));
const AndroidTechStack = React.lazy(() => import("./android-tech-stack"));
const Portfolio = React.lazy(() => import("./portfolio"));
const GetInTouch = React.lazy(() => import("./get-in-touch"));
const FAQS = React.lazy(() => import("./faqs"));
const GameChangingSection = React.lazy(
  () => import("./game-changing-section")
);
const Footer = React.lazy(() => import("../blogs/footer"));

const MobileAppDevelopment = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Suspense fallback={<div></div>}>
        <CustomAppDev />
        <EndToEndApp />
        <AppDevProcess />
        <AndroidTechStack />
        <Portfolio />
        <GameChangingSection />
        <GetInTouch />
        <FAQS type= {MobileFaq}/>
        <Footer />
      </Suspense>
    </>
  );
};

export default MobileAppDevelopment;

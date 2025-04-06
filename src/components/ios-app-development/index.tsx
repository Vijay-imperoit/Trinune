import React, { Suspense } from "react";
import IOSService from "./ios-services/index.tsx";
import Header from "../landing-page/header/index.tsx";
import { IosFaq } from '../../utils/constants.ts';

const MobileAppSection = React.lazy(
  () => import("./mobile-apps-section/index.tsx")
);
const DevelopmentService = React.lazy(
  () => import("./development-services/index.tsx")
);
const RobustIOSSection = React.lazy(
  () => import("./robust-ios-section/index.tsx")
);
const TechStack = React.lazy(() => import("./tech-stack/index.tsx"));
const InnovativeSolutions = React.lazy(
  () => import("./innovative-solutions/index.tsx")
);
const CaseStudies = React.lazy(() => import("./case-studies/index.tsx"));
const CustomIOS = React.lazy(() => import("./custom-ios/index.tsx"));
const Client = React.lazy(() => import("./clients/index.tsx"));
const FAQS = React.lazy(
  () => import("../mobile-app-development/faqs/index.tsx")
);
const Footer = React.lazy(() => import("../blogs/footer/index.tsx"));

const IosAppDevelopment = () => {
  return (
    <>
      <Header />
      <IOSService />
      <Suspense fallback={<div></div>}>
        <MobileAppSection />
        <DevelopmentService />
        <RobustIOSSection />
        <TechStack />
        <InnovativeSolutions />
        <CaseStudies />
        <CustomIOS />
        <Client />
        <FAQS type= {IosFaq}/>
        <Footer />
      </Suspense>
    </>
  );
};

export default IosAppDevelopment;

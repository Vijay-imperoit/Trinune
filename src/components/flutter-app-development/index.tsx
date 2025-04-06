import React, { Suspense } from "react";
import Header from "../landing-page/header/index.tsx";
import MainSectionOfFlutterAppDev from "./main-section/index.tsx";
import { FlutterFaq } from '../../utils/constants.ts';

const HireFlutterDevelopers = React.lazy(
  () => import("./hire-flutter-developers/index.tsx")
);
const ExpertiseFlutterDeveloper = React.lazy(
  () => import("./expertise-flutter-developers/index.tsx")
);
const ThreeStepsToStarts = React.lazy(
  () => import("./three-steps-to-start/index.tsx")
);
const FlexibleEngagementModels = React.lazy(
  () => import("./flexible-engagement-models/index.tsx")
);
const FlutterAppDevelopmentProcess = React.lazy(
  () => import("./flutter-app-development-process/index.tsx")
);
const IndustriesWeSurve = React.lazy(
  () => import("./industries-we-surve/index.tsx")
);
const CaseStudies = React.lazy(() => import("./case-studies/index.tsx"));
const FAQS = React.lazy(
  () => import("../mobile-app-development/faqs/index.tsx")
);
const Footer = React.lazy(() => import("../blogs/footer/index.tsx"));

const FlutterAppDevelopment = () => {
  return (
    <>
      <Header />
      <MainSectionOfFlutterAppDev />
      <Suspense fallback={<div></div>}>
        <HireFlutterDevelopers />
        <ExpertiseFlutterDeveloper />
        <ThreeStepsToStarts />
        <FlexibleEngagementModels />
        <FlutterAppDevelopmentProcess />
        <IndustriesWeSurve />
        <CaseStudies />
        <FAQS type= {FlutterFaq}/>
        <Footer />
      </Suspense>
    </>
  );
};

export default FlutterAppDevelopment;

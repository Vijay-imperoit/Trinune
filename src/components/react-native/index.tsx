import React, { Suspense } from "react";
import Header from "../landing-page/header";
import HeroSection from "./hero-section/index.tsx";
import { ReactFaq } from '../../utils/constants.ts';

const ReactNativeFrame = React.lazy(
  () => import("./react-native-frame/index.tsx")
);
const ReactNativePerfection = React.lazy(
  () => import("./react-native-perfection/index.tsx")
);
const WorkProcess = React.lazy(() => import("./work-process/index.tsx"));
const DevelopmentService = React.lazy(
  () => import("./development-services/index.tsx")
);

const CaseStudies = React.lazy(
  () => import("../ios-app-development/case-studies/index.tsx")
);
const NextLevelInnovation = React.lazy(
  () => import("./next-level-innovation/index.tsx")
);
const FAQS = React.lazy(
  () => import("../mobile-app-development/faqs/index.tsx")
);
const Footer = React.lazy(() => import("../blogs/footer"));

const ReactNative = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Suspense fallback={<div></div>}>
        <ReactNativeFrame />
        <ReactNativePerfection />
        <WorkProcess />
        <DevelopmentService />
        <CaseStudies />
        <NextLevelInnovation />
        <FAQS type= {ReactFaq}/>
        <Footer />
      </Suspense>
    </>
  );
};

export default ReactNative;

import React, { Suspense } from "react";
import HeroSection from "./hero-section/index.tsx";
import LifeImpero from "./life-impero/index.tsx";
import HiringSection from "./hiring-section/index.tsx";
import WorkingAtImpero from "./working-at-impero/index.tsx";
import ImperianSpeaks from "./imperian-speaks/index.tsx";
import Header from "../landing-page/header/index.tsx";

const Footer = React.lazy(() => import("../blogs/footer/index.tsx"));

const Careers = () => {
  return (
    <>
      <Header isWhiteHeader={true} />
      <HeroSection />
      <Suspense fallback={<div></div>}>
        <LifeImpero />
        <HiringSection />
        <WorkingAtImpero />
        <ImperianSpeaks />
        <Footer />
      </Suspense>
    </>
  );
};

export default Careers;

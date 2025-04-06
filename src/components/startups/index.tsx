import React, { Suspense } from "react";
import CareerDescription from "./hero-section/index.tsx";
import Header from "../landing-page/header/index.tsx";

const TopBrandSection = React.lazy(
  () => import("./top-brand-section/index.tsx")
);
const ServicesSection = React.lazy(
  () => import("./services-section/index.tsx")
);
const GameChangingSection = React.lazy(
  () => import("./game-changing-section/index.tsx")
);
const LeadershipTeam = React.lazy(
  () => import("../about-us/our-team/index.tsx")
);
const Footer = React.lazy(() => import("../blogs/footer/index.tsx"));

const Startups = () => {
  return (
    <>
      <Header />
      <CareerDescription />
      <Suspense fallback={<div></div>}>
        <TopBrandSection />
        <ServicesSection />
        <GameChangingSection />
        <LeadershipTeam />
        {/* <FAQS type= {2}/> */}
        <Footer />
      </Suspense>
    </>
  );
};

export default Startups;

import React, { Suspense } from "react";
import Header from "../../landing-page/header";
import HeroSection from "./hero-section";
import FAQS from "../../mobile-app-development/faqs";
const ContactUs = React.lazy(()=> import("../../landing-page/contact-us"));
import { HealthcareFaq } from '../../../utils/constants';

const BlogFooter = React.lazy(() => import("../../blogs/footer"));
const HCSoftware = React.lazy(() => import("./healthcare-software/index"));
const HCServices = React.lazy(() => import("./healthtcare-services/index"));
const HCSuccessStories = React.lazy(() => import("./success-stories/index"));
const ImperoPartner = React.lazy(() => import("./impero-partner/index"));
const TechnologyExpertise = React.lazy(
  () => import("./technology-expertise/index")
);
const CustomHealthCare = React.lazy(() => import("./custom-healthcare/index"));

const HealthCare = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Suspense fallback={<div></div>}>
        <HCSoftware />
        <HCServices />
        <HCSuccessStories />
        <ImperoPartner />
        <TechnologyExpertise />
        <CustomHealthCare />
        <FAQS type={HealthcareFaq} />
        {/* <GetInTouch /> */}
        <ContactUs />
        <BlogFooter />
      </Suspense>
    </>
  );
};

export default HealthCare;

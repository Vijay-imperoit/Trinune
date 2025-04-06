import React, { Suspense } from "react";
import Header from "../../landing-page/header";
import HeroSection from "./hero-section";
import FAQS from "../../mobile-app-development/faqs";
const ContactUs = React.lazy(()=> import("../../landing-page/contact-us"));
import { eCommerceFaq } from '../../../utils/constants';

const BlogFooter = React.lazy(() => import("../../blogs/footer"));
const IndustrySoftware = React.lazy(() => import("./industry-software/index"));
const IndustryServices = React.lazy(() => import("./industry-services/index"));
const IndustrySuccessStories = React.lazy(
  () => import("./success-stories/index")
);
const ImperoPartner = React.lazy(() => import("./impero-partner/index"));
const TechnologyExpertise = React.lazy(
  () => import("./technology-expertise/index")
);
const CustomSF = React.lazy(() => import("./custom-sf/index"));

const ECommerce = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Suspense fallback={<div></div>}>
        <IndustrySoftware />
        <IndustryServices />
        <IndustrySuccessStories />
        <ImperoPartner />
        <TechnologyExpertise />
        <CustomSF />
        <FAQS type={eCommerceFaq} />
        {/* <GetInTouch /> */}
        <ContactUs />
        <BlogFooter />
      </Suspense>
    </>
  );
};

export default ECommerce;

import React, { Suspense } from "react";
import HeroSection from "./hero-section/index.tsx";
import Header from "../landing-page/header/index.tsx";
const ContactUs = React.lazy(()=> import("../landing-page/contact-us"));

const AboutExamfly = React.lazy(() => import("./about-examfly/index.tsx"));
const Footer = React.lazy(() => import("../blogs/footer/index.tsx"));

const Examfly = () => {
  return (
    <>
      <Header isWhiteHeader={true} />
      <HeroSection />
      <Suspense fallback={<div></div>}>
        <AboutExamfly />
        <ContactUs />
        <Footer />
      </Suspense>
    </>
  );
};

export default Examfly;

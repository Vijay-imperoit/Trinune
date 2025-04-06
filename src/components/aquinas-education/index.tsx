import React, { Suspense } from "react";
import HeroSection from "./hero-section/index.tsx";
import Header from "../landing-page/header/index.tsx";
const ContactUs = React.lazy(()=> import("../landing-page/contact-us"));

const AboutEquinas = React.lazy(
  () => import("./about-aquinas-education/index.tsx")
);
const Footer = React.lazy(() => import("../blogs/footer/index.tsx"));

const EquinasEducation = () => {
  return (
    <>
      <Header isWhiteHeader={true} />
      <HeroSection />
      <Suspense fallback={<div></div>}>
        <AboutEquinas />
        <ContactUs />
        <Footer />
      </Suspense>
    </>
  );
};

export default EquinasEducation;

import React, { Suspense } from "react";
import HeroSection from "./hero-section/index.tsx";
import Header from "../landing-page/header/index.tsx";
const ContactUs = React.lazy(()=> import("../landing-page/contact-us"));

const AboutNameDown = React.lazy(() => import("./about-namedown/index.tsx"));
const Footer = React.lazy(() => import("../blogs/footer/index.tsx"));

const NameDown = () => {
  return (
    <>
      <Header isWhiteHeader={true} />
      <HeroSection />
      <Suspense fallback={<div></div>}>
        <AboutNameDown />
        <ContactUs />
        <Footer />
      </Suspense>
    </>
  );
};

export default NameDown;

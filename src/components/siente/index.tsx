import React, { Suspense } from "react";
import HeroSection from "./hero-section/index.tsx";
import Header from "../landing-page/header/index.tsx";
const ContactUs = React.lazy(()=> import("../landing-page/contact-us"));

const AboutSiente = React.lazy(() => import("./about-siente/index.tsx"));
const Footer = React.lazy(() => import("../blogs/footer/index.tsx"));

const Siente = () => {
  return (
    <>
      <Header isWhiteHeader={true} />
      <HeroSection />
      <Suspense fallback={<div></div>}>
        <AboutSiente />
        <ContactUs />
        <Footer />
      </Suspense>
    </>
  );
};

export default Siente;

import React, { Suspense } from "react";
import HeroSection from "./hero-section/index.tsx";
import Header from "../landing-page/header/index.tsx";
const ContactUs = React.lazy(()=> import("../landing-page/contact-us"));

const AboutKemas = React.lazy(() => import("./about-kemas/index.tsx"));
const Footer = React.lazy(() => import("../blogs/footer/index.tsx"));

const Kemas = () => {
  return (
    <>
      <Header isWhiteHeader={true} />
      <HeroSection />
      <Suspense fallback={<div></div>}>
        <AboutKemas />
        <ContactUs />
        <Footer />
      </Suspense>
    </>
  );
};

export default Kemas;

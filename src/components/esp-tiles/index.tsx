import React, { Suspense } from "react";
import HeroSection from "./hero-section/index.tsx";
import Header from "../landing-page/header/index.tsx";
const ContactUs = React.lazy(()=> import("../landing-page/contact-us"));

const AboutESPTiles = React.lazy(() => import("./about-esptiles/index.tsx"));
const Footer = React.lazy(() => import("../blogs/footer/index.tsx"));

const ESPTiles = () => {
  return (
    <>
      <Header isWhiteHeader={true} />
      <HeroSection />
      <Suspense fallback={<div></div>}>
        <AboutESPTiles />
        <ContactUs />
        <Footer />
      </Suspense>
    </>
  );
};

export default ESPTiles;

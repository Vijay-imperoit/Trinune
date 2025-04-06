import React, { Suspense } from "react";
import HeroSection from "./hero-section/index.tsx";
import Header from "../landing-page/header/index.tsx";
const ContactUs = React.lazy(()=> import("../landing-page/contact-us"));

const AboutEthiCart = React.lazy(() => import("./about-ethicart/index.tsx"));
const Footer = React.lazy(() => import("../blogs/footer/index.tsx"));

const EthiCart = () => {
  return (
    <>
      <Header isWhiteHeader={true} />
      <HeroSection />
      <Suspense fallback={<div></div>}>
        <AboutEthiCart />
        <ContactUs />
        <Footer />
      </Suspense>
    </>
  );
};

export default EthiCart;

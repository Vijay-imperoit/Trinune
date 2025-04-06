import React, { Suspense } from "react";
import HeroSection from "./hero-section/index.tsx";
import Header from "../landing-page/header/index.tsx";
const ContactUs = React.lazy(()=> import("../landing-page/contact-us"));

const AboutDonaghmore = React.lazy(
  () => import("./about-donaghmore/index.tsx")
);
const Footer = React.lazy(() => import("../blogs/footer/index.tsx"));

const Donaghmore = () => {
  return (
    <>
      <Header isWhiteHeader={true} />
      <HeroSection />
      <Suspense fallback={<div></div>}>
        <AboutDonaghmore />
        <ContactUs />
        <Footer />
      </Suspense>
    </>
  );
};

export default Donaghmore;

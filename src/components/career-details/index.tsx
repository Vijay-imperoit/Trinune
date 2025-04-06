import React, { Suspense } from "react";
import Header from "../landing-page/header/index.tsx";
import CareerDescription from "./career-description/index.tsx";

const Footer = React.lazy(() => import("../blogs/footer/index.tsx"));

const CareerDetails = () => {
  return (
    <>
      <Header isWhiteHeader={true} />
      <CareerDescription />
      <Suspense fallback={<div></div>}>
        <Footer />
      </Suspense>
    </>
  );
};

export default CareerDetails;

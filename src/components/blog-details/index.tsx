import React, { Suspense } from "react";
import Header from "../landing-page/header/index.tsx";
import CombinedSection from './form-section/index.tsx';


// const FormSection = React.lazy(() => import("./form-section/index.tsx"));
const Footer = React.lazy(() => import("../blogs/footer/index.tsx"));

const BlogDetails = () => {
  return (
    <>
      <Header isWhiteHeader={true} />
      <Suspense fallback={<div></div>}>
      <CombinedSection/>
      <Footer />
      </Suspense>
    </>
  );
};

export default BlogDetails;

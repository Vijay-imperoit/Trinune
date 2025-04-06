import React, { Suspense } from "react";
import BlogMain from "./blogs-content/index.tsx";
import Header from "../landing-page/header/index.tsx";

const BlogList = React.lazy(() => import("./blogs-list/index.tsx"));
const Footer = React.lazy(() => import("./footer/index.tsx"));

const Blogs = () => {
  return (
    <>
      <Header isWhiteHeader={true} />
      <BlogMain />
      <Suspense fallback={<div></div>}>
        <BlogList />
        <Footer />
      </Suspense>
    </>
  );
};

export default Blogs;

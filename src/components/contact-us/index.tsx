import React, { Suspense } from 'react';
import FormSection from './form-section/index.tsx';
import Header from '../landing-page/header/index.tsx';
import EBookSection from './ebook-section/index.tsx';

const BlogFooter = React.lazy(() => import('../blogs/footer/index.tsx'));

const ContactUs = () => {
  return (
    <>
      <Header isWhiteHeader={true} />
      <FormSection />
      <Suspense fallback={<div></div>}>
      <EBookSection/>
        <BlogFooter />
      </Suspense>
    </>
  );
};

export default ContactUs;

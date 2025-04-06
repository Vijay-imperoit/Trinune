import React, { Suspense } from 'react';

const CaseStudies = React.lazy(
  () => import('./components/landing-page/case-studies')
);
const ClientFeedback = React.lazy(
  () => import('./components/landing-page/client-feedback')
);
const Client = React.lazy(() => import('./components/landing-page/clients'));
const ContactUs = React.lazy(
  () => import('./components/landing-page/contact-us')
);
const Facts = React.lazy(() => import('./components/landing-page/facts'));
const LeadershipTeam = React.lazy(
  () => import('./components/landing-page/leadership-team')
);
const Milestone = React.lazy(
  () => import('./components/landing-page/milestone')
);
const Services = React.lazy(() => import('./components/landing-page/services'));
const Solutions = React.lazy(
  () => import('./components/landing-page/solutions')
);
const BlogFooter = React.lazy(() => import('./components/blogs/footer'));
import Header from './components/landing-page/header';
import FirstPage from './components/landing-page/First-page';

function App() {
  return (
    <>
      <Header />
      <FirstPage />
      <Suspense fallback={<div></div>}>
        <CaseStudies />
        {/* <Services /> */}
        {/* <Facts />
        <Solutions />
        <Client />
        <LeadershipTeam />
        <Milestone />
        <ClientFeedback />
        <ContactUs />
        <BlogFooter /> */}
      </Suspense>
    </>
  );
}

export default App;

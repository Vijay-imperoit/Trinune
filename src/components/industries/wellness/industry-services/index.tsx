import { Col, Container, Row } from "react-bootstrap";
import "./style.css";

const IndustryServices = () => {
  return (
    <div className="section lasting-solutions-flutter custom-blog-cursor-white">
      <Container>
        <Row className="gy-5 align-items-start">
          <Col
            lg={5}
            className="sticky-lg-top top-50"
          >
            <h2 className="title-2 text-white mb-4">
              Our Innovative Wellness Services
            </h2>
            <p className="fs-20 fw-normal text-white mb-0">
              We help implement and maintain tailored, cost-effective technology
              solutions that support your wellness business goals and meet your
              clients' needs.
            </p>
          </Col>
          <Col
            lg={7}
            className="development-services-flutter no-scroll text-white"
          >
            <div className="py-4">
              <div className="card-body">
                <h3 className="mb-3">Custom Wellness Software Development</h3>
                <p className="fs-16 text-dark-gray mb-0">
                  Tailored wellness software solutions designed to optimize
                  program management and client engagement, from concept to
                  launch.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3 className="mb-3">Client Experience Optimization</h3>
                <p className="fs-16 text-dark-gray mb-0">
                  Strategies and tools to enhance client interactions, ensuring
                  a smooth, personalized wellness experience.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3 className="mb-3">Multi-Platform Wellness Integration</h3>
                <p className="fs-16 text-dark-gray mb-0">
                  Expertise in integrating wellness software across multiple
                  platforms, ensuring a seamless client experience anytime,
                  anywhere.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3 className="mb-3">Social and Community Engagement Tools</h3>
                <p className="fs-16 text-dark-gray mb-0">
                  Integrating community and social features into your wellness
                  services to enhance client interaction and build a loyal
                  community.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3 className="mb-3">
                  Monetization and Subscription Solutions
                </h3>
                <p className="fs-16 text-dark-gray mb-0">
                  Implementing tools and strategies to offer subscriptions,
                  in-app purchases, and membership options to drive revenue
                  while maintaining client satisfaction.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default IndustryServices;

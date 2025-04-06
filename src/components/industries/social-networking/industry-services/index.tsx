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
              Our Innovative Social Networking Services
            </h2>
            <p className="fs-20 fw-normal text-white mb-0">
              We help implement and maintain tailored, cost-effective technology
              solutions that support your social networking goals and enhance
              user engagement.
            </p>
          </Col>
          <Col
            lg={7}
            className="development-services-flutter no-scroll text-white"
          >
            <div className="py-4">
              <div className="card-body">
                <h3 className="mb-3">
                  Custom Social Networking Platform Development
                </h3>
                <p className="fs-16 text-dark-gray mb-0">
                  Tailored social networking platform solutions designed to
                  foster community engagement, user interaction, and content
                  sharing.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3 className="mb-3">User Experience Optimization</h3>
                <p className="fs-16 text-dark-gray mb-0">
                  Strategies and tools to enhance user interactions, ensuring
                  smooth, personalized social media experiences.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3 className="mb-3">Multi-Platform Integration</h3>
                <p className="fs-16 text-dark-gray mb-0">
                  Expertise in integrating social networking platforms across
                  multiple devices, ensuring seamless user experiences
                  everywhere.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3 className="mb-3">Social and Community Engagement Tools</h3>
                <p className="fs-16 text-dark-gray mb-0">
                  Integrating advanced features for social interaction,
                  community building, and content sharing to enhance user
                  engagement.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3 className="mb-3">
                  Monetization and Subscription Solutions
                </h3>
                <p className="fs-16 text-dark-gray mb-0">
                  Implementing subscription models, in-app purchases, and
                  advertising solutions to drive revenue while keeping user
                  satisfaction at the forefront.
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

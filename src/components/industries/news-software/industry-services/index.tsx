import { Col, Container, Row } from "react-bootstrap";
import "./style.css";

const IndustryServices = () => {
  return (
    <div className="section news-services custom-blog-cursor-white">
      <Container>
        <Row className="gy-5 align-items-start">
          <Col
            lg={5}
            className="sticky-lg-top top-50"
          >
            <h2 className="title-2 text-white mb-4">
              Our Innovative News Media Services
            </h2>
            <p className="fs-20 fw-normal text-white mb-0">
              We deliver cutting-edge technology solutions tailored to support
              your news delivery goals and enhance audience engagement.
            </p>
          </Col>
          <Col
            lg={7}
            className="development-services-news no-scroll text-white"
          >
            <div className="py-4">
              <div className="card-body">
                <h3 className="mb-3">Custom News Platform Development</h3>
                <p className="fs-16 text-dark-gray mb-0">
                  Tailored solutions to develop dynamic news platforms, enabling
                  efficient content delivery and audience engagement.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3 className="mb-3">Audience Experience Optimization</h3>
                <p className="fs-16 text-dark-gray mb-0">
                  Strategies and tools to enhance audience interactions,
                  providing personalized and seamless news consumption
                  experiences.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3 className="mb-3">Multi-Platform News Integration</h3>
                <p className="fs-16 text-dark-gray mb-0">
                  Expertise in integrating news platforms across various
                  devices, ensuring consistent and reliable access to content.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3 className="mb-3">Security and Compliance Tools</h3>
                <p className="fs-16 text-dark-gray mb-0">
                  Implementing advanced security measures to protect sensitive
                  information and ensure compliance with media regulations.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3 className="mb-3">
                  Monetization and Revenue Growth Solutions
                </h3>
                <p className="fs-16 text-dark-gray mb-0">
                  Implementing subscription models, premium content, and revenue
                  optimization strategies to sustain growth while maintaining
                  audience trust and satisfaction.
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

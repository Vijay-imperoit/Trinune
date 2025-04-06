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
              Our Innovative Banking Services
            </h2>
            <p className="fs-20 fw-normal text-white mb-0">
              We help implement and maintain tailored, cost-effective technology
              solutions that support your banking goals and enhance customer
              satisfaction.
            </p>
          </Col>
          <Col
            lg={7}
            className="development-services-flutter no-scroll text-white"
          >
            <div className="py-4">
              <div className="card-body">
                <h3 className="mb-3">Custom Banking Platform Development</h3>
                <p className="fs-16 text-dark-gray mb-0">
                  Tailored banking platform solutions designed to foster secure
                  transactions, enhance customer interactions, and simplify
                  financial services.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3 className="mb-3">Customer Experience Optimization</h3>
                <p className="fs-16 text-dark-gray mb-0">
                  Strategies and tools to enhance customer interactions,
                  ensuring smooth, personalized banking experiences.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3 className="mb-3">Multi-Platform Banking Integration</h3>
                <p className="fs-16 text-dark-gray mb-0">
                  Expertise in integrating banking platforms across multiple
                  devices, ensuring seamless customer experiences everywhere.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3 className="mb-3">Security and Compliance Tools</h3>
                <p className="fs-16 text-dark-gray mb-0">
                  Implementing advanced security protocols to protect customer
                  data and ensure compliance with financial regulations.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3 className="mb-3">
                  Monetization and Revenue Growth Solutions
                </h3>
                <p className="fs-16 text-dark-gray mb-0">
                  Implementing subscription models, digital payments, and
                  revenue optimization strategies while maintaining high
                  customer satisfaction.
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

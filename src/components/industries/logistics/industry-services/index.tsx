import { Col, Container, Row } from "react-bootstrap";
import "./style.css";

const IndustryServices = () => {
  return (
    <div className="section logistics-services custom-blog-cursor-white">
      <Container>
        <Row className="gy-5 align-items-start">
          <Col
            lg={5}
            className="sticky-lg-top top-50"
          >
            <h2 className="title-2 text-white mb-4">
              Our Innovative Logistics Services
            </h2>
            <p className="fs-20 fw-normal text-white mb-0">
              We deliver cutting-edge technology solutions tailored to support
              your logistics operations and enhance supply chain efficiency.
            </p>
          </Col>
          <Col
            lg={7}
            className="development-services-logistics no-scroll text-white"
          >
            <div className="py-4">
              <div className="card-body">
                <h3 className="mb-3">Custom Logistics Platform Development</h3>
                <p className="fs-16 text-dark-gray mb-0">
                  Tailored solutions to develop dynamic logistics platforms,
                  enabling efficient supply chain management and real-time
                  tracking.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3 className="mb-3">Operational Efficiency Optimization</h3>
                <p className="fs-16 text-dark-gray mb-0">
                  Strategies and tools to enhance logistics operations, optimize
                  routes, and improve fleet management.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3 className="mb-3">Real-Time Tracking and Monitoring</h3>
                <p className="fs-16 text-dark-gray mb-0">
                  Implementing advanced tracking systems to ensure real-time
                  visibility and control over shipments and deliveries.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3 className="mb-3">Security and Compliance Tools</h3>
                <p className="fs-16 text-dark-gray mb-0">
                  Advanced security measures to safeguard sensitive data and
                  ensure compliance with industry regulations.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3 className="mb-3">Revenue Growth and Cost Optimization</h3>
                <p className="fs-16 text-dark-gray mb-0">
                  Implementing cost-saving solutions and optimizing logistics
                  operations to maximize profitability and sustain growth.
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

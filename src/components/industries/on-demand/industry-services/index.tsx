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
              Our Innovative On Demand services
            </h2>
            <p className="fs-20 fw-normal text-white mb-0">
              We will help you implement and maintain a tailored, cost-effective
              technology solution that supports your business goals and best
              meets your patients' needs.
            </p>
          </Col>
          <Col
            lg={7}
            className="development-services-flutter no-scroll text-white"
          >
            <div className="py-4">
              <div className="card-body">
                <h3 className="mb-3">Custom On Demand Software Development</h3>
                <p className="fs-16 text-dark-gray mb-0">
                  Advanced analytics services that transform raw data into
                  actionable insights, enabling informed decision-making and
                  strategic planning for ondemand services.
                </p>
              </div>
            </div>
            <div className="py-4">
              <div className="card-body">
                <h3 className="mb-3">Data Analytics and Insights</h3>
                <p className="fs-16 text-dark-gray mb-0">
                  Advanced analytics services that transform raw data into
                  actionable insights, enabling informed decision-making and
                  strategic planning for ondemand services.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3 className="mb-3">Service Management Systems</h3>
                <p className="fs-16 text-dark-gray mb-0">
                  Robust tools that streamline service delivery, enhance
                  customer experience, and provide real-time tracking and
                  management of on-demand services.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3 className="mb-3">
                  Customer Relationship Management (CRM) Solutions
                </h3>
                <p className="fs-16 text-dark-gray mb-0">
                  Comprehensive systems that help businesses manage customer
                  interactions, improve engagement, and foster loyalty in the
                  on-demand marketplace.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3 className="mb-3">Payment Processing Solutions</h3>
                <p className="fs-16 text-dark-gray mb-0">
                  Secure and efficient payment systems that facilitate seamless
                  transactions, enhance customer experience, and reduce
                  operational costs.
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

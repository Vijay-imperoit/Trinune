import { Col, Container, Row } from "react-bootstrap";
import "./style.css";

const HCServices = () => {
  return (
    <div className="section lasting-solutions-flutter custom-blog-cursor-white">
      <Container>
        <Row className="gy-5 align-items-start">
          <Col
            lg={5}
            className="sticky-lg-top top-50"
          >
            <h2 className="title-2 text-white mb-4">
              Our Innovative Manufacturing services
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
                <h3 className="mb-3">
                  Custom Manufacturing Software Development
                </h3>
                <p className="fs-16 text-dark-gray mb-0">
                  Tailored manufacturing solutions designed to meet the unique
                  needs of your operations, from inventory management systems to
                  comprehensive production planning tools.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3 className="mb-3">Data Analytics and Insights</h3>
                <p className="fs-16 text-dark-gray mb-0">
                  Advanced analytics services that transform raw data into
                  actionable insights, enabling informed decision-making and
                  strategic planning.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3 className="mb-3">Supply Chain Management Solutions</h3>
                <p className="fs-16 text-dark-gray mb-0">
                  Robust tools and frameworks to optimize your supply chain,
                  ensuring efficiency, cost-effectiveness, and timely delivery
                  of products.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3 className="mb-3">Quality Control Systemse</h3>
                <p className="fs-16 text-dark-gray mb-0">
                  Comprehensive solutions that enhance product quality, reduce
                  defects, and ensure compliance with industry standards.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3 className="mb-3">Regulatory Compliance Tools</h3>
                <p className="fs-16 text-dark-gray mb-0">
                  Solutions designed to help manufacturing companies navigate
                  complex regulatory landscapes, ensuring adherence to industry
                  standards and reducing compliance risks.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HCServices;

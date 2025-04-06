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
              Our Innovative Education services
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
                <h3 className="mb-3">Custom Education Software Development</h3>
                <p className="fs-16 text-dark-gray mb-0">
                  Tailored educational solutions designed to meet the unique
                  needs of your institution, from learning management systems to
                  comprehensive student information systems.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3 className="mb-3">Data Analytics and Insights</h3>
                <p className="fs-16 text-dark-gray mb-0">
                  Advanced analytics services that transform raw data into
                  actionable insights, enabling informed decision-making and
                  strategic planning for educators and administrators.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3 className="mb-3">E-Learning Platforms</h3>
                <p className="fs-16 text-dark-gray mb-0">
                  Robust tools and frameworks to facilitate online learning,
                  ensuring accessibility, engagement, and effective knowledge
                  transfer for students.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3 className="mb-3">Assessment and Evaluation Systems</h3>
                <p className="fs-16 text-dark-gray mb-0">
                  Comprehensive solutions that enhance the assessment process,
                  providing real-time feedback and ensuring alignment with
                  educational standards
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3 className="mb-3">Regulatory Compliance Tools</h3>
                <p className="fs-16 text-dark-gray mb-0">
                  Solutions designed to help educational institutions navigate
                  complex regulatory landscapes, ensuring adherence to
                  accreditation standards and reducing compliance risks.
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

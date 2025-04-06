import { Col, Container, Row } from "react-bootstrap";
import "./style.css";

const IndustryServices = () => {
  return (
    <div className="section finance-services custom-blog-cursor-white">
      <Container>
        <Row className="gy-5 align-items-start">
          <Col
            lg={5}
            className="sticky-lg-top top-50"
          >
            <h2 className="title-2 text-white mb-4">
              Our Innovative Finance Services
            </h2>
            <p className="fs-20 fw-normal text-white mb-0">
              We deliver cutting-edge technology solutions tailored to support
              your logistics operations and enhance supply chain efficiency.
            </p>
          </Col>
          <Col
            lg={7}
            className="development-services-finance no-scroll text-white"
          >
            <div className="py-4">
              <div className="card-body">
                <h3 className="mb-3">Custom Finance Platform Development</h3>
                <p className="fs-16 text-dark-gray mb-0">
                  Tailored fintech solutions designed to meet the unique needs
                  of your financial institution, from mobile banking apps to
                  comprehensive trading platforms.
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
                <h3 className="mb-3">Risk Management Solutions</h3>
                <p className="fs-16 text-dark-gray mb-0">
                  Robust tools and frameworks to identify, assess, and mitigate
                  financial risks, ensuring compliance and safeguarding your
                  assets.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3 className="mb-3">Payment Processing Systems</h3>
                <p className="fs-16 text-dark-gray mb-0">
                  Secure and efficient payment solutions that facilitate
                  seamless transactions, enhance customer experience, and reduce
                  operational costs.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3 className="mb-3">Regulatory Compliance Tools</h3>
                <p className="fs-16 text-dark-gray mb-0">
                  Solutions designed to help financial institutions navigate
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

export default IndustryServices;

import { Col, Container, Row } from "react-bootstrap";
import { IMAGES } from "../../../../utils/staticJSON";

const HCSoftware = () => {
  return (
    <section className="section custom-blog-cursor">
      <Container>
        <Row>
          <Col lg={8} className="text-center mx-auto">
            <h2 className="title-2 mb-4">
              What you get with Impero’s healthcare software development
            </h2>
          </Col>
        </Row>
        <Row className="gy-4 align-items-lg-stretch">
          <Col lg={6} className="order-lg-last">
            <img
              className="img-fluid fit-img"
              loading="lazy"
              width="562"
              height="619"
              src={IMAGES.esgPrinciple}
              alt="esg"
            />
          </Col>
          <Col lg={6} className="align-self-lg-center">
            <div className="card-body">
              <p className="fs-20 mb-4">
                Our custom healthcare software development services are tailored
                to help medical institutions enhance patient experiences and
                streamline operations. With over 15 years in the software
                engineering market and extensive experience developing our own
                healthcare solutions, we understand the sector's unique
                challenges.
              </p>
              <p className="fs-20">
                Our advanced healthcare software solutions automate essential
                tasks like data collection, data processing, and complex
                analyses, improving the efficiency of medical staff.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HCSoftware;

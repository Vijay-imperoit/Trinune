import { Col, Container, Row } from 'react-bootstrap';
import { IMAGES } from '../../../utils/staticJSON';
import './style.css';

const Milestone = () => {
  return (
    <section className="section scroll-section custom-blog-cursor-white">
      <Container>
        <div className="title-box">
          <h2 className="title-2 text-white">A milestone in its own</h2>
        </div>
        <Row className="scroll-item align-items-center mb-4 mb-md-5">
          <Col
            md={8}
            lg={5}
          >
            <p className="fs-24 fw-bolder text-white">
              Recognised as Top Mobile App Development Company by Clutch for the
              2nd consecutive years & still counting!
            </p>
          </Col>
          <Col
            xs="auto"
            className="mx-auto ms-md-auto me-md-0"
          >
            <img
              className="img-fluid"
              src={IMAGES.mobileClutch1x}
              width="208"
              height="230"
              alt="mobile-clutch"
              loading="lazy"
            />
          </Col>
        </Row>
        <Row className="scroll-item align-items-center mb-4 mb-md-5">
          <Col
            md={8}
            lg={5}
          >
            <p className="fs-24 fw-bolder text-white">
              With our excellent offerings & 100% client satisfaction results,
              we are glad to be featured in the Forbes’ Company in Focus 2021
              list.
            </p>
          </Col>
          <Col
            xs="auto"
            className="mx-auto ms-md-auto me-md-0"
          >
            <img
              className="img-fluid"
              src={IMAGES.forbes1x}
              width="208"
              height="230"
              alt="mobile-clutch"
              loading="lazy"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Milestone;

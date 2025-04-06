import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { IMAGES } from "../../../utils/staticJSON";
import AnimatedImageWithOpacity from '../../../global/AnimatedImageWithOpacity';

const GetInTouch = () => {
  return (
    <section className="section-get-in-touch-android pb-0 custom-blog-cursor-white">
      <Container>
        <Row className="gy-4">
          <Col
            xs={12}
            md={6}
            lg={9}
            className="d-flex flex-column align-items-start justify-content-center text-center text-md-start"
          >
            <h3 className="title">
              Elevate Your Business with Android Application
            </h3>
            <p className="sub-title">
              Ready to elevate your business with a standout Android app?
              Connect with us to transform your vision into a high-impact,
              user-friendly solution.
            </p>
            <a href="/contact-us" className="btn btn-primary mx-auto mx-md-0 custom-cursor">
              Get in Touch
            </a>
          </Col>

          {/* Image Column */}
          <Col
            xs={12}
            md={6}
            lg={3}
            className="text-center d-flex align-items-center justify-content-center"
          >
            <AnimatedImageWithOpacity
              className="img-fluid"
              src={IMAGES.androidHero5}
              width="233"
              height="465"
              alt="mobile"
              // loading="lazy"  
            />
          </Col>
        </Row>

      </Container>
    </section>
  );
};

export default GetInTouch;

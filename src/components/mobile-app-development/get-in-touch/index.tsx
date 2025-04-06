import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { IMAGES } from "../../../utils/staticJSON";
import AnimatedImageWithOpacity from '../../../global/AnimatedImageWithOpacity';

const GetInTouch = () => {
  return (
    <section className="section section-get-in-touch-mobile pb-0 custom-blog-cursor-white">
      <Container>
        <Row className="gy-4">
          <Col lg={9}>
            <h3 className="title">
              Client-focused, future-ready mobile expertise.
            </h3>
            <p className="sub-title">
              Experience a client-centric approach with a future-ready team
              delivering cutting-edge mobile app solutions designed to meet your
              unique needs.
            </p>
            <a
              href="/contact-us"
              className="btn btn-primary custom-cursor"
            >
              Get in Touch
            </a>
          </Col>
          <Col
            lg={3}
            className="text-center"
          >
            <AnimatedImageWithOpacity
              className="img-fluid"
              src={IMAGES.iPhoneXSilver}
              width="250"
              height="250"
              alt="mobile"
              loading="lazy"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default GetInTouch;

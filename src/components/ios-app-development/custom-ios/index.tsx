import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { IMAGES } from "../../../utils/staticJSON";
import AnimatedImageWithOpacity from '../../../global/AnimatedImageWithOpacity';

const CustomIOS = () => {
  return (
    <section className="section section-get-in-touch-ios pb-0 custom-blog-cursor-white">
      <Container>
        <Row className="gy-4">
          <Col lg={8}>
            <h3 className="title">
              Ready to Elevate Your Business with Custom iOS App Development?
            </h3>
            <p className="sub-title">
              Unlock your business potential with top-tier iOS app development.
              Connect with us to transform your ideas into innovative solutions
              and drive success.
            </p>
            <a
              href="/contact-us"
              className="btn btn-primary custom-cursor"
            >
              Get in Touch
            </a>
          </Col>
          <Col
            lg={4}
            className="text-center"
          >
            <AnimatedImageWithOpacity
              className="img-fluid"
              src={IMAGES.getInTouch}
              width="210"
              height="210"
              alt="mobile"
              loading="lazy"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CustomIOS;

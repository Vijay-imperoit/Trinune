import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { IMAGES } from "../../../utils/staticJSON";
import AnimatedImageWithOpacity from '../../../global/AnimatedImageWithOpacity';

const ReactNativeFrame = () => {
  return (
    <section className="section position-relative overflow-hidden custom-blog-cursor">
      <Container>
        <Row className="justify-content-center text-center gy-4">
          <Col lg={9}>
            <div className="title-box text-center">
              <h2 className="title-2 mb-0">
                Elevate Your Mobile Experience with Our Expert React Native
                Development
              </h2>
            </div>
          </Col>
          <Col
            xs={10}
            className="text-start"
          >
            <AnimatedImageWithOpacity
              className="img-fluid"
              src={IMAGES.reactNativeHero2}
              width="800"
              height="581"
              alt=""
              loading="lazy"
            />
          </Col>
          <Col xs={12}>
            <a
              href="/contact-us"
              className="btn btn-outline-primary custom-cursor"
            >
              Let’s talk
            </a>
          </Col>
        </Row>
        <div className="native-frame"></div>
      </Container>
    </section>
  );
};

export default ReactNativeFrame;

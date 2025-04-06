import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { IMAGES } from "../../../utils/staticJSON";
import AnimatedImageWithOpacity from '../../../global/AnimatedImageWithOpacity';

const Ideas = () => {
  return (
    <section className="section app-development-section custom-blog-cursor">
      <Container>
        <Row className="justify-content-center text-center gy-4">
          <Col lg={10}>
            <div className="title-box text-center">
              <p className="text-with-pill dark shimmer">Android Development</p>
              <h2 className="title-2">
                Transform Ideas into Success with Impero’s Android App
                Development.
              </h2>
            </div>
          </Col>
          <Col xs={12} className="position-relative">
            <div className="bugdroid-star"></div>
            <div className="bugdroid-star2"></div>
            <div className="bugdroid-star3"></div>
            <AnimatedImageWithOpacity
              className="img-fluid"
              src={IMAGES.androidHero2}
              width="594"
              height="538"
              alt="illustration"
              loading="lazy"
            />
          </Col>
          <Col xs={12}>
            <a href="/contact-us" className="btn btn-outline-primary">
              Let’s talk
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Ideas;

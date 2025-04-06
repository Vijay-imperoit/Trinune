import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { IMAGES } from "../../../utils/staticJSON";
import AnimatedImageWithOpacity from '../../../global/AnimatedImageWithOpacity';
import AnimatedImage from '../../../global/AnimatedImage';

const HeroSection = () => {
  return (
    <section className="hero-section-aquinas section-aquinas-hero overflow-hidden custom-blog-cursor">
      <Container className="pt-5">
        <Row className="h-100 align-items-center">
          <Col lg={6}>
            <div className="hero-contain">
              <AnimatedImageWithOpacity
                className="img-fluid logo-img"
                src={IMAGES.aquinasLogo}
                width="170"
                height="110"
                alt="logo"
                loading="lazy"
              />
              <p className="fs-24 fw-400 mb-2">App for</p>
              <p className="fs-24 fw-bolder bottom-line position-relative">
                Seamless School Staff Booking
              </p>
              <h1 className=" main-text">
                Connecting schools with qualified education staff—just Look,
                Click, Book!
              </h1>
            </div>
          </Col>
          <Col lg={6}>
            <div className="img-box">
              <AnimatedImage
                className="img-fluid"
                src={IMAGES.aquinasMobile}
                width="180"
                height="280"
                alt="iphone-full"
                loading="lazy"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;

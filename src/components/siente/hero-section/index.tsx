import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { IMAGES } from "../../../utils/staticJSON";
import AnimatedImageWithOpacity from '../../../global/AnimatedImageWithOpacity';
import AnimatedImage from '../../../global/AnimatedImage';

const HeroSection = () => {
  return (
    <section className="hero-section-siente section-siente-hero overflow-hidden custom-blog-cursor">
      <Container className="pt-5">
        <Row className="h-100 align-items-center">
          <Col lg={6}>
            <div className="hero-contain">
              <AnimatedImageWithOpacity
                className="img-fluid logo-img"
                src={IMAGES.sienteLogo}
                width="170"
                height="110"
                alt="logo"
                loading="lazy"
              />
              <p className="fs-24 fw-400 mb-2">App for</p>
              <p className="fs-24 fw-bolder bottom-line position-relative">
                Wellness Through Guided Meditation
              </p>
              <h1 className=" main-text">
                Improving the well-being of 500,000 users through guided
                meditation.
              </h1>
            </div>
          </Col>
          <Col lg={6}>
            <div className="img-box">
              <AnimatedImage
                className=""
                src={IMAGES.sienteOneMobile}
                width="250"
                height="450"
                alt="iphone-full"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;

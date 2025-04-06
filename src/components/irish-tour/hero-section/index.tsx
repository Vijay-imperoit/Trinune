import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { IMAGES } from "../../../utils/staticJSON";
import AnimatedImageWithOpacity from '../../../global/AnimatedImageWithOpacity';
import AnimatedImage from '../../../global/AnimatedImage';

const HeroSection = () => {
  return (
    <section className="hero-section-irish section-irish-hero overflow-hidden custom-blog-cursor">
      <Container className="pt-5">
        <Row className="h-100 align-items-center">
          <Col lg={6}>
            <div className="hero-contain">
              <AnimatedImageWithOpacity
                className="logo-img"
                src={IMAGES.irishLogo}
                width="170"
                height="110"
                alt="logo"
                loading="lazy"
              />
              <p className="fs-24 fw-400 mb-2">App for</p>
              <p className="fs-24 fw-bolder bottom-line position-relative">
              Personalized Tour Experience
              </p>
              <h1 className=" main-text">
              An interactive multi-lingual tour guide app for tourists who are visiting Ireland!
              </h1>
            </div>
          </Col>
          <Col lg={6}>
            <div className="img-box">
              <AnimatedImage
                className="img-fluid"
                src={IMAGES.irishMobile}
                width="400"
                height="400"
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

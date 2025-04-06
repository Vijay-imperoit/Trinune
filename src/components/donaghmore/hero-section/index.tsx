import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { IMAGES } from "../../../utils/staticJSON";
import AnimatedImage from '../../../global/AnimatedImage';
import AnimatedImageWithOpacity from '../../../global/AnimatedImageWithOpacity';

const HeroSection = () => {
  return (
    <section className="hero-section-donaghmore section-donaghmore-hero overflow-hidden custom-blog-cursor">
      <Container className="pt-5">
        <Row className="h-100 align-items-center">
          <Col lg={6}>
            <div className="hero-contain">
              <AnimatedImageWithOpacity
                className="img-fluid logo-img"
                src={IMAGES.donaghmoreMuseumLogo}
                width="170"
                height="110"
                alt="logo"
                loading="lazy"
              />
              <p className="fs-24 fw-400 mb-2">App for</p>
              <p className="fs-24 fw-bolder bottom-line position-relative">
                Exploring Museum
              </p>
              <h1 className=" main-text">
                Lay your eyes on 300 years old artefacts coming to life at
                Donaghmore Museum!
              </h1>
            </div>
          </Col>
          <Col lg={6}>
            <div className="img-box">
              <AnimatedImage
                className=""
                src={IMAGES.donaghmore1}
                width="250"
                height="480"
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

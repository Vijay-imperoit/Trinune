import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { IMAGES } from "../../../utils/staticJSON";
import AnimatedImage from '../../../global/AnimatedImage';
import AnimatedImageWithOpacity from '../../../global/AnimatedImageWithOpacity';

const HeroSection = () => {
  return (
    <section className="hero-section-ethicart section-ethicart-hero overflow-hidden custom-blog-cursor">
      <Container className="pt-5">
        <Row className="h-100 align-items-center">
          <Col lg={6}>
            <div className="hero-contain">
              <AnimatedImageWithOpacity
                className="img-fluid logo-img"
                src={IMAGES.ethicartLogo}
                width="74"
                height="87"
                alt="logo"
                loading="lazy"
              />
              <p className="fs-24 fw-400 mb-2">App for</p>
              <p className="fs-24 fw-bolder bottom-line position-relative">
                Ethical Purchasing!
              </p>
              <h1 className=" main-text">
                Ethicart! A complete solution to practice ethical purchasing!
              </h1>
            </div>
          </Col>
          <Col lg={6}>
            <div className="img-box">
              <AnimatedImage
                className=""
                src={IMAGES.ethicartM1}
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

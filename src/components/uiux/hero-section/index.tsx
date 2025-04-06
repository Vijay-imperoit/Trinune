import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { IMAGES } from "../../../utils/staticJSON";
import AnimatedImage from '../../../global/AnimatedImage';

const HeroSection = () => {
  return (
    <section className="hero-section2-uiux custom-blog-cursor-white">
      <Container className="py-5">
        <Row className="h-100 align-items-center py-lg-5">
          <Col
            xs={12}
            lg={6}
          >
            <div className="hero-contain-uiux">
              <h1 className="main-title text-gradient">
                Enhance your brand
                <br /> with Stunning
                <span className="text-gradient-style3">
                  {' '}
                  UI/UX. <span className="ms-4 set-shape-uiux"></span>
                </span>
              </h1>
              <p className="sub-title mb-30">
                Create exceptional user experiences with our custom UI/UX
                designs that elevate your brand and engage your audience for
                lasting impact.
              </p>
              <a
                href="/contact-us"
                className="btn btn-primary custom-cursor"
              >
                Get in touch
              </a>
            </div>
          </Col>
          <Col
            lg={6}
            className="text-center uiux-design-app"
          >
            <div className="figma"></div>
            <div className="adobe-ai"></div>
            <AnimatedImage
              className="img-fluid"
              src={IMAGES.uiuxHero1}
              width="269"
              height="534"
              alt="uiux"
            />
            <div className="adobe-ps"></div>
            <div className="adobe-xd"></div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;

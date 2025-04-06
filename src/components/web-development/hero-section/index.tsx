import { Col, Container, Row } from 'react-bootstrap';
import './style.css';
import { IMAGES } from '../../../utils/staticJSON';
import AnimatedImage from '../../../global/AnimatedImage';

const WebDevelopmentHeroSection = () => {
  return (
    <div className="hero-section2-web half-circle-bg-web custom-blog-cursor-white">
      <Container className="py-5">
        <Row className="gy-5 h-100 align-items-center pt-5">
          <Col
            lg={7}
            className="col-12 text-center text-lg-start"
          >
            <div className="hero-contain-web">
              <h1 className="main-title text-gradient">
                Empower business with
                <br /> our
                <span className="text-gradient-style3">
                  {' '}
                  WebApp Services
                  <span className="set-shape-web"></span>
                </span>
              </h1>
              <p className="sub-title mb-30 text-white">
                Transform your ideas into robust, feature-rich web applications
                that
                <br /> deliver innovation, user satisfaction, and measurable
                results.
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
            lg={5}
            className="text-center"
          >
            <AnimatedImage
              className="img-fluid"
              src={IMAGES.macBookWebDev}
              width="512"
              height="310"
              alt="web-development"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WebDevelopmentHeroSection;

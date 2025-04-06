import { Col, Container, Row } from 'react-bootstrap';
import './style.css';
import { IMAGES } from '../../../utils/staticJSON';
import AnimatedImage from '../../../global/AnimatedImage';

const IOSService = () => {
  return (
    <div className="hero-section2-ios custom-blog-cursor-white">
      <Container className="py-5">
        <Row className="h-100 align-items-center">
          <Col
            lg={7}
            xs={12}
          >
            <div className="hero-contain">
              <h1 className="main-title text-gradient">
                Transform business
                <br /> with our{' '}
                <span className="text-gradient-style3">
                  iOS Services<span className="set-shape-ios"></span>
                </span>
              </h1>
              <p className="sub-title mb-30">
                Our iOS services are designed to help your business grow by
                creating
                <br /> user-friendly, innovative apps tailored to your needs.
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
            className="text-center frame-bg-ios"
          >
            <div className="ios-app-store"></div>
            <div className="ios-name"></div>
            <AnimatedImage
              className="img-fluid"
              src={IMAGES.iosHero1}
              width="234"
              height="486"
              alt="appleIphone"
              loading="lazy"
            />
            <div className="ios-checkbox"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default IOSService;

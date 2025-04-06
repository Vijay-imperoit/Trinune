import { Col, Container, Row } from 'react-bootstrap';
import './style.css';
import { IMAGES } from '../../../utils/staticJSON';
import AnimatedImage from '../../../global/AnimatedImage';

const MainSectionOfFlutterAppDev = () => {
  return (
    <section className="hero-section-flutter custom-blog-cursor-white">
      <Container className="py-5">
        <Row className="h-100 align-items-center py-5">
          <Col
            lg={6}
            className="col-12"
          >
            <div className="hero-contain-flutter">
              <h1 className="main-title text-gradient">
                Elevate business with our{' '}
                <span className="text-gradient-style3">
                  Flutter Services<span className="set-shape-flutter"></span>
                </span>
              </h1>
              <p className="sub-title mb-30">
                Build powerful, responsive apps with Flutter, ensuring a smooth,
                consistent user experience across all devices.
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
            className="text-center frame-bg-flutter flutter-app"
          >
            <div className="flutter-silver"></div>
            <div className="setting-silver"></div>
            <AnimatedImage
              className="img-fluid"
              src={IMAGES.flutterHero1}
              width="261"
              height="518"
              alt="Iphone"
            />
            <div className="programming-silver"></div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MainSectionOfFlutterAppDev;

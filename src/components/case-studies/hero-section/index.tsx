import { Col, Container, Row } from 'react-bootstrap';
import './style.css';
import { IMAGES } from '../../../utils/staticJSON';
import AnimatedImage from '../../../global/AnimatedImage';

const HeroSection = () => {
  return (
    <section className="hero-section-case-main section-get-in-touch-case-studies overflow-hidden custom-blog-cursor-white">
      <Container className="pt-5">
        <Row className="h-100">
          <Col lg={12}>
            <div className="d-flex flex-column align-items-center justify-content-center hero-contain pb-4 h-100">
              <p className="text-with-pill dark">Our Work</p>
              <h1 className="fs-50 fw-bolder text-white text-center mb-3 main-text">
                <span className="text-gradient-style3">Transforming Ideas</span>
                <br />
                into Impactful Solutions
              </h1>
              <p className="fs-20 fw-normal text-white text-center mb-0">
                Unveil our successes and innovations
              </p>
            </div>
          </Col>
          <div className="text-center case-studies-hero">
            <AnimatedImage
              className="img-fluid"
              src={IMAGES.iPhoneCaseStudies}
              width="268"
              height="513"
              alt="iPhone"
            />
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;

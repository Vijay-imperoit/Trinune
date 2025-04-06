import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { IMAGES } from "../../../utils/staticJSON";
import AnimatedImage from '../../../global/AnimatedImage';

const HeroSection = () => {
  return (
    <section className="hero-section2-android if-white custom-blog-cursor">
      <Container>
        <Row className="h-100 align-items-center">
          <Col
            xs={12}
            lg={6}
          >
            <div className="hero-contain-android">
              <h1 className="main-title black">
                Elevate business with our
                <span className="text-gradient-style3">
                  {' '}
                  Android Service
                  <span className="set-shape-android"></span>
                </span>
              </h1>
              <p className="sub-title black mb-30">
                Unlock the full potential of your business with custom Android
                apps designed for performance, scalability, and user engagement.
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
            className="text-center frame-circle-android"
          >
            <div className="play-store"></div>
            <div className="android"></div>
            <AnimatedImage
              className="img-fluid"
              src={IMAGES.androidHero1}
              width="230"
              height="466"
              alt="android-app"
              loading="lazy"
            />
            <div className="robot"></div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;

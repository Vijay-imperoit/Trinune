import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { IMAGES } from "../../../utils/staticJSON";
import AnimatedImage from '../../../global/AnimatedImage';

const HeroSection = () => {
  return (
    <section className="hero-section2-react custom-blog-cursor-white">
      <Container
        fluid
        className="py-5"
      >
        <Row className="h-100 align-items-center pt-5">
          <Col
            lg={7}
            xs={12}
            className="text-center text-lg-start"
          >
            <div className="hero-contain-react ps-xl-5 ms-xl-5 ps-lg-5 p-4">
              <h1 className="main-title text-gradient">
                Empower business with our{' '}
                <span className="text-gradient-style3">
                  React Expertise
                  <span className="set-shape-react"></span>
                </span>
              </h1>
              <p className="sub-title mb-30 text-white">
                Leverage the power of React Native to build fast, cross-platform
                apps that deliver exceptional user experiences.
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
            className="text-center text-xxl-end right-side-img"
          >
            <AnimatedImage
              className="img-fluid"
              src={IMAGES.reactNativeHero1}
              width="680"
              height="419"
              alt="react-native"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;

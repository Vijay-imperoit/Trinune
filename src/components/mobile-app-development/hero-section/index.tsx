import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { IMAGES } from "../../../utils/staticJSON";
import AnimatedImage from '../../../global/AnimatedImage';

const HeroSection = () => {
  return (
    <section className="hero-section2-mobile custom-blog-cursor-white">
      <Container className="py-5">
        <Row className="h-100 align-items-center">
          <Col
            xs={12}
            lg={7}
          >
            <div className="hero-contain-mobile">
              <h1 className="main-title">
                Custom Application Development Services
                <span className="set-shape-mobile"></span>
              </h1>
              <p className="sub-title mb-30">
                We’ll help bring your complex software vision to life with our
                leading full-cycle custom application development service, so
                you can focus on delivering an incredible user experience.
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
              src={IMAGES.mobileAppHeroImg}
              width="500"
              height="500"
              alt="mobile-app"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;

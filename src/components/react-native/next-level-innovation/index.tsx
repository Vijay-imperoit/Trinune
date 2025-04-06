import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { IMAGES } from "../../../utils/staticJSON";
import AnimatedImageWithOpacity from '../../../global/AnimatedImageWithOpacity';

const NextLevelInnovation = () => {
  return (
    <section className="section section-get-in-touch green pb-0 custom-blog-cursor-white">
      <Container fluid>
        <Row className="gy-4 ">
          <Col
            lg={8}
            className="text-center text-lg-start"
          >
            <div className="ps-xl-5 ms-xl-5 ps-lg-5 p-4">
              <h3 className="title">
                Unlock Next-Level Innovation with Tailored React Native App
                Development
              </h3>
              <p className="sub-title">
                Our team is ready to turn your ideas into reality with expert
                React Native development. Connect with us today to start your
                journey towards exceptional mobile solutions.
              </p>
              <a
                href="/contact-us"
                className="btn btn-primary custom-cursor"
              >
                Get in Touch
              </a>
            </div>
          </Col>
          <Col
            lg={4}
            className="text-center align-self-end"
          >
            <AnimatedImageWithOpacity
              className="img-fluid"
              src={IMAGES.reactNativeHero3}
              width="228"
              height="472"
              alt="mobile"
              loading="lazy"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NextLevelInnovation;

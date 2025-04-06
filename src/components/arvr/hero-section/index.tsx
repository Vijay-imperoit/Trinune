import { Col, Container, Row } from "react-bootstrap";
import "./style.css";

const HeroSection = () => {
  return (
    <section className="hero-section2-arvr hero-img-arvr custom-blog-cursor-white">
      <Container className="py-5">
        <Row className="h-100 gy-4 align-items-center text-center text-md-start pt-5">
          <Col md={9} xl={8} className="text-white">
            <h2 className="title mb-20">VR App Development Services</h2>
            <p className="pera mb-3">
              We enable clients industry-wide to streamline processes, increase
              <br />
              productivity and deliver pioneering training and service using
              VR/MR /<br />
              AR technologies.
            </p>
            <a href="/contact-us" className="btn btn-primary mt-4 custom-cursor">
              Get in Touch
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;

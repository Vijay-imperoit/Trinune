import { Col, Container, Row } from "react-bootstrap";
import "./style.css";

const HeroSection = () => {
  return (
    <section className="hero-section2-wellness  hero-img-wellness custom-blog-cursor-white">
      <Container className="py-5">
        <Row className="h-100 gy-4 align-items-center text-center text-md-start py-5">
          <Col
            md={8}
            className="text-white"
          >
            <h2 className="title mb-20">
              Custom Wellness
              <br /> Software Development
            </h2>
            <p className="mb-3">
              We empower wellness businesses to thrive in a digital-first world
              through innovative custom wellness software solutions that enhance
              client experiences, optimize service delivery, and drive growth in
              the wellness industry.
            </p>
            <a
              href="/contact-us"
              className="btn btn-primary mt-4 custom-cursor"
            >
              Get expert advice
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;

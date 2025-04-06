import { Col, Container, Row } from "react-bootstrap";
import "./style.css";

const HeroSection = () => {
  return (
    <section className="hero-section2-mf hero-img-mf custom-blog-cursor-white">
      <Container className="py-5">
        <Row className="h-100 gy-4 align-items-center text-center text-md-start py-5">
          <Col
            md={8}
            className="text-white"
          >
            <h2 className="title mb-20">
              Custom Manufacturing
              <br /> Solutions Development
            </h2>
            <p className="mb-3">
              We empower manufacturing companies to innovate and excel in a
              rapidly evolving landscape through advanced technology, data
              analytics, and robust operational frameworks.
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

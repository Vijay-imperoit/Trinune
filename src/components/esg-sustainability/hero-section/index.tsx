import { Col, Container, Row } from "react-bootstrap";
import "./style.css";

const HeroSection = () => {
  return (
    <section className="hero-section2-esg hero-img-esg custom-blog-cursor-white">
      <Container className="py-5">
        <Row className="h-100 gy-4 align-items-center text-center text-md-start py-5">
          <Col
            md={8}
            className="text-white"
          >
            <h2 className="title mb-20">
              Empower your business
              <br /> with our ESG solutions
            </h2>
            <p className="mb-3">
              Unlock the potential of sustainable growth with our tailored ESG
              solutions, designed to drive environmental, social, and governance
              impact for your business.
            </p>
            <a
              href="/contact-us"
              className="btn btn-primary mt-4 custom-cursor"
            >
              Get in Touch
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;

import { Col, Container, Row } from "react-bootstrap";
import "./style.css";

const HeroSection = () => {
  return (
    <section className="hero-section2-ent hero-img-ent custom-blog-cursor-white">
      <Container className="py-5">
        <Row className="h-100 gy-4 align-items-center text-center text-md-start py-5">
          <Col
            md={8}
            className="text-white"
          >
            <h2 className="title mb-20">
              Custom Entertainment
              <br /> Softwware Development
            </h2>
            <p className="mb-3">
              We empower entertainment businesses to thrive in a dynamic
              landscape through innovative technology, data analytics, and
              robust operational frameworks that enhance audience engagement and
              service delivery.
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

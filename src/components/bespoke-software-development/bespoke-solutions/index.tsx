import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { IMAGES } from "../../../utils/staticJSON";
import AnimatedImage from '../../../global/AnimatedImage';

const BespokeSolutions = () => {
  return (
    <div className="hero-section2-bespoke custom-blog-cursor-white">
      <Container fluid className="py-5">
        <Row className="h-100 align-items-center py-5">
          <Col lg={6} className="col-12 text-center text-lg-start">
            <div className="hero-contain ps-xl-5 ms-xl-5 ps-lg-5 p-4">
              <h1 className="main-title text-gradient">
                Elevate business with
                <br /> our
                <span className="text-gradient-style3">
                  {" "}
                  Bespoke Solutions
                  <span className="set-shape-bespoke"></span>
                </span>
              </h1>
              <p className="sub-title mb-30">
                Transform your business with custom solutions tailored to your
                needs. Our bespoke services drive innovation and deliver
                exceptional, results-focused outcomes.
              </p>
              <a href="/contact-us" className="btn btn-primary custom-cursor">
                Get in touch
              </a>
            </div>
          </Col>
          <Col lg={6} className="text-center text-lg-end right-side-img2">
            <AnimatedImage
              className="img-fluid"
              src={IMAGES.macBook}
              width="600"
              height="600"
              alt="macbook"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BespokeSolutions;

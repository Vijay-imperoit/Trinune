import { Col, Container, Row } from "react-bootstrap";
import { IMAGES } from "../../../utils/staticJSON";
import "./style.css";
import AnimatedImageWithOpacity from '../../../global/AnimatedImageWithOpacity';
const CustomAppDevelopment = () => {
  return (
    <section className="section custom-blog-cursor">
      <Container>
        <Row className="justify-content-center gy-4 mb-lg-5 mb-4">
          <Col
            lg={11}
            className="text-center"
          >
            <div className="title-box mb-0">
              <h2 className="title-2 mb-3">
                What you can get with custom application development
              </h2>
              <p className="fs-18 fw-normal mb-0 mx-lg-2 font-main">
                With over one decades of software development experience across
                industries including insurance, finance, energy, logistics,
                government and others, we offer specialised technology expertise
                tailored to every sector.
              </p>
            </div>
          </Col>
          <Col
            lg={12}
            className="text-center"
          >
            <AnimatedImageWithOpacity
              className="img-fluid"
              src={IMAGES.mobileGrp}
              width="999"
              height="531"
              alt="mobile group"
              loading="lazy"
            />
          </Col>
          <Col className="col-12 text-center">
            <a href="/contact-us" className="btn btn-outline-primary mt-4 mt-md-5">
              Let’s Talk
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CustomAppDevelopment;

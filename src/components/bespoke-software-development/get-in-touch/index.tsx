import { Col, Container, Row } from "react-bootstrap";
import { IMAGES } from "../../../utils/staticJSON";
import "./style.css";
import AnimatedImageWithOpacity from '../../../global/AnimatedImageWithOpacity';

const GetInTouch = () => {
  return (
    <div className="section section-get-in-touch-bespoke custom-blog-cursor-white">
      <Container fluid>
        <Row className="row gy-4 align-items-center">
          <Col lg={7} className="text-center text-lg-start">
            <div className="ps-xl-5 ms-xl-5 ps-lg-5 p-4">
              <h3 className="title">
                Elevate Your Business with Bespoke Software Development
              </h3>
              <p className="sub-title">
                Ready to elevate your business with a standout Android app?
                Connect with us to transform your vision into a high-impact,
                user-friendly solution.
              </p>
              <a href="/contact-us" className="btn btn-primary custom-cursor">
                Get in Touch
              </a>
            </div>
          </Col>
          <Col lg={5} className="text-end text-xxl-end right-side-img2">
            <AnimatedImageWithOpacity
              className="img-fluid"
              src={IMAGES.bespokeMacBook}
              width="494"
              height="300"
              alt="mobile"
              loading="lazy"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GetInTouch;

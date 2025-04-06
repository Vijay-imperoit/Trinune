import { Col, Container, Row } from "react-bootstrap";
import { IMAGES } from "../../../../utils/staticJSON";
import "./style.css";
import AnimatedImageWithOpacity from "../../../../global/AnimatedImageWithOpacity";

const GetInTouch = () => {
  return (
    <div className="section section-get-in-touch-bespoke custom-blog-cursor-white">
      <Container fluid>
        <Row className="row gy-4 align-items-center">
          <Col
            lg={7}
            className="text-center text-lg-start"
          >
            <div className="ps-xl-5 ms-xl-5 ps-lg-5 p-4">
              <h3 className="title">
                Ready to Transform Your Entertainment Business with Custom
                Software?
              </h3>
              <p className="sub-title">
                Connect with us to discuss your needs and explore custom
                entertainment software solutions designed to enhance user
                experiences and streamline operations.
              </p>

              <a
                href="/contact-us"
                className="btn btn-primary custom-cursor"
              >
                Contact Us Now
              </a>
            </div>
          </Col>
          <Col
            lg={5}
            className="text-center text-xxl-end right-side-img2"
          >
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

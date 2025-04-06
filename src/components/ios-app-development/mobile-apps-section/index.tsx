import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { IMAGES } from "../../../utils/staticJSON";
import AnimatedImageWithOpacity from '../../../global/AnimatedImageWithOpacity';

const MobileAppSection = () => {
  return (
    <div className="section ios-innovation-sec overflow-hidden custom-blog-cursor">
      <div className="img-animate ios-img"></div>
      <div className="img-animate development-img"></div>
      <div className="img-animate app-store"></div>

      <Container>
        <Row className="justify-content-center gy-4">
          <Col
            lg={9}
            className="text-center"
          >
            <div className="title-box mb-0">
              <h2 className="title-2 mb-3">
                Revolutionizing mobile apps with cutting-edge innovation.
              </h2>
            </div>
          </Col>
          <Col
            lg={12}
            className="text-center"
          >
            <AnimatedImageWithOpacity
              className="img-fluid"
              src={IMAGES.iosHero2}
              width="582"
              height="630"
              alt="mobile"
              loading="lazy"
            />
          </Col>
          <Col className="col-12 text-center">
            <a
              href="/contact-us"
              className="btn btn-outline-primary mt-4 mt-md-5 custom-cursor"
            >
              Let’s Talk
            </a>
          </Col>
        </Row>
      </Container>

      <div className="img-animate apple-icon"></div>
      <div className="img-animate application-img"></div>
    </div>
  );
};

export default MobileAppSection;

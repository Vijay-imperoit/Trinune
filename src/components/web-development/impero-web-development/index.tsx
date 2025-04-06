import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { IMAGES } from "../../../utils/staticJSON";
import AnimatedImageWithOpacity from '../../../global/AnimatedImageWithOpacity';

const ImperoWebDevelopment = () => {
  return (
    <div className="section custom-blog-cursor">
      <Container>
        <div className="card card-linear-style1-web overflow-hidden">
          <div className="card-body pe-lg-0">
            <Row className="align-items-center gy-4">
              <Col lg={8}>
                <h3 className="title-3">
                  Why Partner with Impero IT for Web Development?
                </h3>
                <Row>
                  <Col lg={6}>
                    <p className="list-item">
                      5+ Years of Experienced Development Team
                    </p>
                    <p className="list-item">
                      After-launch 24/7 support mechanisms
                    </p>
                    <p className="list-item">
                      High-performing & efficient web app solutions
                    </p>
                  </Col>
                  <Col lg={6}>
                    <p className="list-item">Strict NDA policy</p>
                    <p className="list-item">Complete transparent approach</p>
                    <p className="list-item">
                      Robust & secure development approach
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col
                lg={4}
                className="text-center right-side-img"
              >
                <AnimatedImageWithOpacity
                  className="img-fluid"
                  src={IMAGES.macBookImperoWeb}
                  width="406"
                  height="246"
                  alt="MacBook Pro"
                  loading="lazy"
                />
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ImperoWebDevelopment;

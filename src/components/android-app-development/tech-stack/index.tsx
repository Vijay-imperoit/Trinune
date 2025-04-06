import { Col, Container, Row } from "react-bootstrap";
import { IMAGES } from "../../../utils/staticJSON";
import AnimatedImageWithOpacity from '../../../global/AnimatedImageWithOpacity';

const TechStack = () => {
  return (
    <section className="section bg-light-blue custom-blog-cursor">
      <Container>
        <Row className="gy-4 gy-lg-0 justify-content-center">
          <Col xs={12}>
            <div className="title-box text-center">
              <h2 className="title-2 mb-20">
                Cutting-Edge Android Tech Stack Overview
              </h2>
              <p className="mb-0">
                We leverage cutting-edge technologies to build exceptional
                mobile applications, ensuring top performance & innovation.
                Explore our suite of tools & frameworks driving app's success.
              </p>
            </div>
          </Col>
          <Col xs={12}>
            <Row className="justify-content-center align-items-center gy-4 gx-lg-5">
              <Col xs="auto">
                <AnimatedImageWithOpacity
                  className="img-fluid"
                  src={IMAGES.java}
                  alt="Java"
                  width="118"
                  height="118"
                  loading="lazy"
                />
              </Col>
              <Col xs="auto">
                <AnimatedImageWithOpacity
                  className="img-fluid"
                  src={IMAGES.kotlin}
                  alt="Kotlin"
                  width="118"
                  height="118"
                  loading="lazy"
                />
              </Col>
              <Col xs="auto">
                <AnimatedImageWithOpacity
                  className="img-fluid"
                  src={IMAGES.sqLite}
                  alt="Android Studio"
                  width="118"
                  height="118"
                  loading="lazy"
                />
              </Col>
              <Col xs="auto">
                <AnimatedImageWithOpacity
                  className="img-fluid"
                  src={IMAGES.IOS}
                  alt="AWS"
                  width="118"
                  height="118"
                  loading="lazy"
                />
              </Col>
              <Col xs="auto">
                <AnimatedImageWithOpacity
                  className="img-fluid"
                  src={IMAGES.cocoa}
                  alt="Google Fit"
                  width="118"
                  height="118"
                  loading="lazy"
                />
              </Col>
              <Col xs="auto">
                <AnimatedImageWithOpacity
                  className="img-fluid"
                  src={IMAGES.native}
                  alt="Google Assistant"
                  width="118"
                  height="118"
                  loading="lazy"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TechStack;

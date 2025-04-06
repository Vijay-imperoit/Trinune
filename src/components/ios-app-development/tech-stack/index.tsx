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
                Cutting-Edge iOS Tech Stack Overview
              </h2>
              <p className="mb-0">
                We leverage cutting-edge technologies to build exceptional
                mobile applications, ensuring top performance & innovation.
                Explore our suite of tools & frameworks driving app's success.
              </p>
            </div>
          </Col>
          <Col xs={12}>
            <Row className="justify-content-center align-items-center gy-4 gx-lg-4">
              <Col xs="auto">
                <AnimatedImageWithOpacity
                  className="img-fluid"
                  src={IMAGES.techStackImage1}
                  alt="Java"
                  width="118"
                  height="118"
                  loading="lazy"
                />
              </Col>
              <Col xs="auto">
                <AnimatedImageWithOpacity
                  className="img-fluid"
                  src={IMAGES.techStackImage2}
                  alt="Kotlin"
                  width="118"
                  height="118"
                  loading="lazy"
                />
              </Col>
              <Col xs="auto">
                <AnimatedImageWithOpacity
                  className="img-fluid"
                  src={IMAGES.techStackImage3}
                  alt="Android Studio"
                  width="118"
                  height="118"
                  loading="lazy"
                />
              </Col>
              <Col xs="auto">
                <AnimatedImageWithOpacity
                  className="img-fluid"
                  src={IMAGES.techStackImage4}
                  alt="AWS"
                  width="118"
                  height="118"
                  loading="lazy"
                />
              </Col>
              <Col xs="auto">
                <AnimatedImageWithOpacity
                  className="img-fluid"
                  src={IMAGES.techStackImage5}
                  alt="Google Fit"
                  width="118"
                  height="118"
                  loading="lazy"
                />
              </Col>
              <Col xs="auto">
                <AnimatedImageWithOpacity
                  className="img-fluid"
                  src={IMAGES.techStackImage6}
                  alt="Google Assistant"
                  width="118"
                  height="118"
                  loading="lazy"
                />
              </Col>
              <Col xs="auto">
                <AnimatedImageWithOpacity
                  className="img-fluid"
                  src={IMAGES.techStackImage7}
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

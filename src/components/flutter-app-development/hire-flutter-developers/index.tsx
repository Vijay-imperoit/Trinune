import { Col, Container, Row } from "react-bootstrap";
import { IMAGES } from "../../../utils/staticJSON";
import AnimatedImageWithOpacity from '../../../global/AnimatedImageWithOpacity';

const HireFlutterDevelopers = () => {
  return (
    <div className="section custom-blog-cursor">
      <Container>
        <Row className="gy-5 align-items-center">
          <Col lg={4}>
            <AnimatedImageWithOpacity
              className="img-fluid"
              loading="lazy"
              width="432"
              height="373"
              src={IMAGES.flutterHero2}
              alt="hire"
            />
          </Col>
          <Col lg={8}>
            <div className="text-box">
              <h2 className="title-2 mb-4">
                Hire Flutter Developers to Build Cross-Platform Apps
              </h2>
              <p className="fs-20 mb-4">
                Flutter, launched by Google in 2017, is a leading cross-platform
                toolkit for building apps across iOS, Android, Windows, and
                Linux, with benefits like a single codebase and a strong
                developer community.
              </p>
              <p className="fs-20 mb-0">
                Choose Impero IT for skilled Flutter developers. We create
                robust, natively compiled apps to help startups and businesses
                reach wider audiences quickly and efficiently.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HireFlutterDevelopers;

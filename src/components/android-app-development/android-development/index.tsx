import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { IMAGES } from "../../../utils/staticJSON";
import AnimatedImageWithOpacity from '../../../global/AnimatedImageWithOpacity';

const AndroidDevelopment = () => {
  return (
    <section className="section choose-android-section custom-blog-cursor">
      <Container>
        <Row className="gy-4">
          <Col xs={12}>
            <div className="title-box text-center">
              <h2 className="title-2">Why Choose Android Development?</h2>
            </div>
          </Col>
          <Col lg={4}>
            <div className="card border-left">
              <h5 className="title">Massive User Reach</h5>
              <p className="sub-text">
                Tap into a vast global audience with Android's extensive market
                share.
              </p>
            </div>
            <div className="card border-left">
              <h5 className="title">Enhanced Security</h5>
              <p className="sub-text">
                Benefit from robust security features ensuring your app’s safety
                and user data protection.
              </p>
            </div>
            <div className="card border-left">
              <h5 className="title">Third-Party Integrations</h5>
              <p className="sub-text">
                Easily integrate with various third-party services and APIs for
                enhanced functionality.
              </p>
            </div>
          </Col>
          <Col lg={4} className="text-center">
            <AnimatedImageWithOpacity
              className="img-fluid"
              src={IMAGES.androidHero4}
              width="255"
              height="476"
              alt="android phone illustration"
              loading="lazy"
            />
          </Col>
          <Col lg={4}>
            <div className="card border-right">
              <h5 className="title">High Level of Customization</h5>
              <p className="sub-text">
                Achieve tailored solutions with Android's flexible development
                environment.
              </p>
            </div>
            <div className="card border-right">
              <h5 className="title">Fast Android Tools</h5>
              <p className="sub-text">
                Leverage powerful tools that accelerate development and enhance
                app capabilities.
              </p>
            </div>
            <div className="card border-right">
              <h5 className="title">Low Investment, Higher ROIs</h5>
              <p className="sub-text">
                Enjoy cost-effective development with potential for substantial
                ROI.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AndroidDevelopment;

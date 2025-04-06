import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { IMAGES } from "../../../utils/staticJSON";
import AnimatedImageWithOpacity from '../../../global/AnimatedImageWithOpacity';

const EndToEndApp = () => {
  return (
    <section className="section lasting-solutions-mobile position-relative overflow-hidden custom-blog-cursor-white">
      <Container>
        <div className="mobile-skill"></div>
        <Row className="gy-4 align-items-center text-center text-md-start mb-5">
          <Col
            md={6}
            lg={5}
          >
            <div className="title-box mb-0">
              <h2 className="title-2 text-white mb-0">
                End-to-end application development services
              </h2>
            </div>
          </Col>
          <Col
            md={6}
            className="offset-lg-1"
          >
            <p className="text-white mb-0">
              We deliver a range of custom software products and solutions for
              desktop, web and mobile. With a team of more than 2000 software
              experts, we have you covered – from idea validation to custom app
              development, testing, governance and support.
            </p>
          </Col>
        </Row>
        <div className="development-services-mobile text-center text-md-start">
          <div className="card">
            <div className="card-body">
              <Row className=" gy-4">
                <Col md={4}>
                  <AnimatedImageWithOpacity
                    src={IMAGES.appStore}
                    className="img-fluid"
                    width="180"
                    height="180"
                    alt="app"
                    loading="lazy"
                  />
                </Col>
                <Col md={4}>
                  <h3 className="title mb-0 text-white">iOS App Development</h3>
                </Col>
                <Col md={4}>
                  <p className="pera mb-0 text-white">
                    Elevate your business with high-quality, future-ready iOS
                    apps from our expert UK team. Leveraging Swift and
                    Objective-C, we deliver secure, scalable solutions with
                    exceptional design and performance for iPhone and Apple
                    Watch.
                  </p>
                </Col>
              </Row>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <Row className="gy-4">
                <Col md={4}>
                  <AnimatedImageWithOpacity
                    src={IMAGES.flutter}
                    className="img-fluid"
                    width="150"
                    height="150"
                    alt="app"
                    loading="lazy"
                  />
                </Col>
                <Col md={4}>
                  <h3 className="title mb-0 text-white">
                    Android App Development
                  </h3>
                </Col>
                <Col md={4}>
                  <p className="pera mb-0 text-white">
                    Reach over 48% of UK users with high-performance Android
                    apps designed for mobile, tablets, wearables, and TV. Our
                    expert team ensures exceptional user experience and ROI,
                    delivering flawless apps ready for the Google Play Store
                  </p>
                </Col>
              </Row>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <Row className="gy-4">
                <Col md={4}>
                  <AnimatedImageWithOpacity
                    src={IMAGES.playstore}
                    className="img-fluid"
                    width="150"
                    height="150"
                    alt="app"
                    loading="lazy"
                  />
                </Col>
                <Col md={4}>
                  <h3 className="title mb-0 text-white">
                    Flutter App Development
                  </h3>
                </Col>
                <Col md={4}>
                  <p className="pera mb-0 text-white">
                    Unlock multi-platform potential with our Flutter apps,
                    offering exceptional features and cross-device
                    compatibility. Accelerate your launch and cost-effectively
                    build scalable, visually-rich apps for mobile, web, and
                    desktop
                  </p>
                </Col>
              </Row>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <Row className="gy-4">
                <Col md={4}>
                  <AnimatedImageWithOpacity
                    src={IMAGES.react}
                    className="img-fluid"
                    width="180"
                    height="180"
                    alt="app"
                    loading="lazy"
                  />
                </Col>
                <Col md={4}>
                  <h3 className="title mb-0 text-white">
                    React Native App Development
                  </h3>
                </Col>
                <Col md={4}>
                  <p className="pera mb-0 text-white">
                    Leverage our UK-based React Native experts to build
                    high-performance, native-like apps at half the cost and
                    time. From new projects to migrating existing apps, we
                    deliver cost-effective, top-quality solutions for rapid,
                    multi-platform launches.
                  </p>
                </Col>
              </Row>
            </div>
          </div>
        </div>
        <div className="mobile-strength"></div>
      </Container>
    </section>
  );
};

export default EndToEndApp;

import { Col, Container, Row } from "react-bootstrap";
import "./style.css";

const RobustIOSSection = () => {
  return (
    <section className="section custom-blog-cursor">
      <Container>
        <Row className="align-items-start">
          <Col
            lg={4}
            className="sticky-lg-top top-50"
          >
            <h2 className="title-2 mb-3">Robust iOS Development Processs</h2>
            <p className="sub-text">
              Experience a development process designed to fortify your app’s
              performance and reliability. We ensure your iOS app excels at
              every stage.
            </p>
          </Col>
          <Col
            lg={8}
            className="our-process-section-about"
          >
            <div className="card">
              <div className="card-body pt-lg-0">
                <Row>
                  <Col
                    lg={7}
                    xxl={6}
                  >
                    <h3 className="title-3">
                      <span className="number-text">01.</span>
                      <span className="bottom-line">Planning</span>
                    </h3>
                  </Col>
                  <Col
                    lg={5}
                    xxl={6}
                  >
                    <p className="sub-text">
                      We assess your vision and market needs to define the tech
                      stack and project scope, ensuring a tailored approach to
                      meet your goals.
                    </p>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <Row>
                  <Col
                    lg={7}
                    xxl={6}
                  >
                    <h3 className="title-3">
                      <span className="number-text">02.</span>
                      <span className="bottom-line">Design</span>
                    </h3>
                  </Col>
                  <Col
                    lg={5}
                    xxl={6}
                  >
                    <p className="sub-text">
                      We create intuitive, user-friendly designs with seamless
                      interfaces that reflect your brand, providing an engaging
                      and delightful user experience.
                    </p>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <Row>
                  <Col
                    lg={7}
                    xxl={6}
                  >
                    <h3 className="title-3">
                      <span className="number-text">03.</span>
                      <span className="bottom-line">Development</span>
                    </h3>
                  </Col>
                  <Col
                    lg={5}
                    xxl={6}
                  >
                    <p className="sub-text">
                      Our expert developers use the latest technologies to build
                      secure, scalable, and high-performance apps, following iOS
                      development best practices.
                    </p>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <Row>
                  <Col
                    lg={7}
                    xxl={6}
                  >
                    <h3 className="title-3">
                      <span className="number-text">04.</span>
                      <span className="bottom-line"> Testing</span>
                    </h3>
                  </Col>
                  <Col
                    lg={5}
                    xxl={6}
                  >
                    <p className="sub-text">
                      We conduct rigorous testing to ensure your app is
                      bug-free, stable, and performs optimally across devices
                      and iOS versions.
                    </p>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <Row>
                  <Col
                    lg={7}
                    xxl={6}
                  >
                    <h3 className="title-3">
                      <span className="number-text">05.</span>
                      <span className="bottom-line">Deployment</span>
                    </h3>
                  </Col>
                  <Col
                    lg={5}
                    xxl={6}
                  >
                    <p className="sub-text">
                      We oversee a smooth and efficient deployment, handling App
                      Store submission and ensuring a seamless launch and
                      approval process.
                    </p>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <Row>
                  <Col
                    lg={7}
                    xxl={6}
                  >
                    <h3 className="title-3">
                      <span className="number-text">06.</span>
                      <span className="bottom-line">Maintenance</span>
                    </h3>
                  </Col>
                  <Col
                    lg={5}
                    xxl={6}
                  >
                    <p className="sub-text">
                      We offer continuous maintenance, keeping your app secure,
                      up-to-date, and performing at its peak with regular
                      updates and optimizations.
                    </p>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default RobustIOSSection;

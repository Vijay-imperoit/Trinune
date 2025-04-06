import { Col, Container, Row } from "react-bootstrap";
import "./style.css";

const WorkProcess = () => {
  return (
    <section className="section custom-blog-cursor">
      <Container>
        <Row className="align-items-start">
          <Col
            lg={4}
            className="sticky-lg-top top-50"
          >
            <h2 className="title-2 mb-3">
              Get to know our work process for React Native
            </h2>
            <p className="sub-text">
              Our process is continuously refined to deliver intuitive,
              user-friendly React Native solutions tailored to your unique
              needs.
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
                    <p className="fs-20 fw-500">
                      Strategic Planning for Successful App Development
                    </p>
                    <p className="sub-text">
                      We kick off by thoroughly understanding your business
                      objectives, user requirements, and market landscape. This
                      helps us create a strategic roadmap, selecting the right
                      features, tools, and technologies to ensure the app's
                      success and align it with your goals.
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
                      <span className="bottom-line">Designing</span>
                    </h3>
                  </Col>
                  <Col
                    lg={5}
                    xxl={6}
                  >
                    <p className="fs-20 fw-500">
                      Crafting Intuitive and Engaging User Experiences
                    </p>
                    <p className="sub-text">
                      Our design team focuses on creating user-friendly,
                      visually captivating interfaces that provide a smooth,
                      engaging experience across both iOS and Android platforms.
                      We emphasize intuitive navigation and a seamless user
                      journey, reflecting your brand's identity.
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
                      <span className="bottom-line">CodeBase Development</span>
                    </h3>
                  </Col>
                  <Col
                    lg={5}
                    xxl={6}
                  >
                    <p className="fs-20 fw-500">
                      Building a Robust and Scalable Codebase
                    </p>
                    <p className="sub-text">
                      We build a robust, maintainable codebase using React
                      Native, ensuring efficient performance and scalability.
                      Our developers follow best practices to craft clean,
                      high-quality code that ensures long-term app success on
                      both platforms.
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
                      <span className="bottom-line">QA Testing</span>
                    </h3>
                  </Col>
                  <Col
                    lg={5}
                    xxl={6}
                  >
                    <p className="fs-20 fw-500">
                      Ensuring Quality and Performance
                    </p>
                    <p className="sub-text">
                      Our dedicated QA team conducts thorough testing to
                      identify any bugs, glitches, or usability issues. We focus
                      on optimizing the app’s functionality and performance,
                      ensuring it meets the highest standards for stability and
                      reliability before launch.
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
                    <p className="fs-20 fw-500">
                      Seamless Deployment for a Flawless Launch
                    </p>
                    <p className="sub-text">
                      We oversee the entire deployment process, ensuring your
                      app is fully optimized for release on both the App Store
                      and Google Play. We handle all the necessary steps, from
                      submission to approval, ensuring a smooth and hassle-free
                      launch.
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
                      <span className="bottom-line">Maintenance & Support</span>
                    </h3>
                  </Col>
                  <Col
                    lg={5}
                    xxl={6}
                  >
                    <p className="fs-20 fw-500">
                      Continuous Support for Long-Term App Success
                    </p>
                    <p className="sub-text">
                      After launch, we provide ongoing maintenance and support
                      to ensure your app stays up-to-date and functions
                      flawlessly. We offer bug fixes, feature updates, and
                      performance improvements to keep your app relevant and
                      performing optimally.
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

export default WorkProcess;

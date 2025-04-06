import { Col, Container, Row } from 'react-bootstrap';
import './style.css';

const OurProcess = () => {
  return (
    <section className="section custom-blog-cursor">
      <Container>
        <Row className="align-items-start">
          <Col
            lg={4}
            className="sticky-lg-top top-50"
          >
              <h2 className="title-2 mb-3">Our Process</h2>
            <p className="sub-text">
              Here’s a glimpse into our process: We simplify complexity to
              ensure a seamless experience. Clear and straightforward, we make
              your journey hassle-free.
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
                      <span className="number-text">01</span>
                      <span className="bottom-line">
                        Determining Your Goals
                      </span>
                    </h3>
                  </Col>
                  <Col
                    lg={5}
                    xxl={6}
                  >
                    <p className="sub-text">
                      When you share your vision, we turn it into action. We
                      refine your idea, leveraging our expertise to create a
                      clear, precise plan. Then, we provide a business x with
                      cost estimates, deliverables, milestones, and scope.
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
                      <span className="number-text">02</span>
                      <span className="bottom-line">UI/UX Designing</span>
                    </h3>
                  </Col>
                  <Col
                    lg={5}
                    xxl={6}
                  >
                    <p className="sub-text">
                      The second crucial step is UI/UX design, where we craft
                      the app or website's look and feel, interfaces and
                      graphics to enhance usability. Your feedback is essential
                      throughout this stage to ensure an engaging and effective
                      design.
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
                      <span className="number-text">03</span>
                      <span className="bottom-line">Development</span>
                    </h3>
                  </Col>
                  <Col
                    lg={5}
                    xxl={6}
                  >
                    <p className="sub-text">
                      This step involves extensive coding, where our team uses
                      the latest technologies to build your app or website. We
                      employ both Agile & Waterfall methodologies, adapting to
                      project needs for consistent, goal-aligned development.
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
                      <span className="number-text">04</span>
                      <span className="bottom-line">Quality Assurance</span>
                    </h3>
                  </Col>
                  <Col
                    lg={5}
                    xxl={6}
                  >
                    <p className="sub-text">
                      Our skilled testers tackle bugs to deliver a polished
                      final product, ready for the App Stores. At Impero, we
                      ensure top quality thorough testing & ongoing maintenance,
                      including complimentary post-launch checks
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
                      <span className="number-text">05</span>
                      <span className="bottom-line">Deployment</span>
                    </h3>
                  </Col>
                  <Col
                    lg={5}
                    xxl={6}
                  >
                    <p className="sub-text">
                      The final & integral part of the development process;
                      Deployment indicates releasing or launching your
                      app/website in the App market. After all those tweaks &
                      tests, this phase involves getting your app reviewed by
                      respective App Stores & getting it live.
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

export default OurProcess;

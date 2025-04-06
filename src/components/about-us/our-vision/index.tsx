import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { IMAGES } from "../../../utils/staticJSON";
import AnimatedImageWithOpacity from '../../../global/AnimatedImageWithOpacity';

const OurVision = () => {
  return (
    <>
      <section className="section our-vision-section-about custom-blog-cursor-white">
        <Container>
          <Row>
            <Col lg={5}>
              <p className="fs-24 fw-500 d-flex align-items-center gap-3">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="8.48438"
                    y="0.0147095"
                    width="12"
                    height="12"
                    transform="rotate(45 8.48438 0.0147095)"
                    fill="white"
                  />
                </svg>
                Our Essence
              </p>
            </Col>
            <Col lg={7} className="vertical-line">
              <div className="title-box">
                <h3 className="main-text">
                  Our - Vision, Story, Mission, & Values
                </h3>
                <p>
                  Discover the essence of our company: our vision, journey,
                  mission, and values
                  <br /> driving innovation and integrity.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section our-story-section-about custom-blog-cursor">
        <Container>
          <Row className="gx-lg-5 gy-3">
            <Col lg={5}>
              <div className="line"></div>
              <div className="d-flex align-items-center gap-3 mb-2">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="8.48438"
                    y="0.0147095"
                    width="12"
                    height="12"
                    transform="rotate(45 8.48438 0.0147095)"
                    fill="black"
                  />
                </svg>
                <h3 className="mb-1">Our Story</h3>
              </div>
              <p>
                Impero’s journey began with a vision to redefine technology.
                From our humble beginnings, we have grown into a global force,
                delivering solutions that inspire innovation and drive progress.
                Every step of our journey has been shaped by resilience,
                creativity, and an unwavering commitment to excellence
              </p>
              <p>
                Our growth has been fueled by partnerships with industries
                across the globe, where we’ve helped businesses overcome
                challenges with tailored, cutting-edge solutions. From creating
                breakthrough apps to building robust enterprise systems, we’ve
                consistently pushed boundaries to unlock new possibilities.
              </p >
              <p>
                As we expanded internationally, our focus remained on crafting
                impactful solutions. Each milestone reflects our dedication to
                transforming ideas into reality, empowering clients to achieve
                their ambitions.
              </p >
              <p>
                With a strong foundation and a vision for the future, Impero
                continues to innovate, inspire, and lead the way in delivering
                exceptional digital experiences.
              </p>
            </Col>
            <Col lg={7}>
              <div className="big-img-box">
                <AnimatedImageWithOpacity
                  className="main-img"
                  src={IMAGES.ourVision}
                  width="724"
                  height="403"
                  alt="our vision"
                  loading="lazy"
                />
              </div>
              <Row className="gy-3 mt-3">
                <Col xs={12}>
                  <h3>Our Mission & Vision</h3>
                  <p>
                    Our mission is to empower businesses with scalable
                    technology solutions that drive efficiency, innovation, and
                    growth. We deliver user-friendly systems tailored to each
                    client’s needs, simplifying complexity and enhancing
                    productivity. Our vision is to create a world where
                    technology integrates into business operations, unlocking
                    opportunities for long-term success.
                  </p>
                </Col>
                <Col lg={6}>
                  <Row className="gy-3 gx-lg-5">
                    <Col xs="auto">
                      <AnimatedImageWithOpacity
                        className="img-fluid"
                        src={IMAGES.ourStoryLogo1}
                        width="52"
                        height="52"
                        alt="graph"
                        loading="lazy"
                      />
                    </Col>
                    <Col>
                      <h5 className="fs-20 fw-semibold">High Performance</h5>
                      <p className="fs-14 fw-normal">
                        Delivering impactful results with precision and speed.
                      </p>
                    </Col>
                  </Row>
                </Col>
                <Col lg={6}>
                  <Row>
                    <Col xs="auto">
                      <AnimatedImageWithOpacity
                        className="img-fluid"
                        src={IMAGES.ourStoryLogo2}
                        width="52"
                        height="52"
                        alt="hand-shake"
                        loading="lazy"
                      />
                    </Col>
                    <Col>
                      <h5 className="fs-20 fw-semibold">Expert Team</h5>
                      <p className="fs-14 fw-normal">
                        Skilled professionals dedicated to your success.
                      </p>
                    </Col>
                  </Row>
                </Col>
                <Col lg={6}>
                  <Row className="gy-3 gx-lg-5">
                    <Col xs="auto">
                      <AnimatedImageWithOpacity
                        className="img-fluid"
                        src={IMAGES.ourStoryLogo3}
                        width="52"
                        height="52"
                        alt="graph"
                        loading="lazy"
                      />
                    </Col>
                    <Col>
                      <h5 className="fs-20 fw-semibold">Results Oriented</h5>
                      <p className="fs-14 fw-normal">
                        Focused on achieving measurable outcomes for your
                        business.
                      </p>
                    </Col>
                  </Row>
                </Col>
                <Col lg={6}>
                  <Row>
                    <Col xs="auto">
                      <AnimatedImageWithOpacity
                        className="img-fluid"
                        src={IMAGES.ourStoryLogo4}
                        width="52"
                        height="52"
                        alt="hand-shake"
                        loading="lazy"
                      />
                    </Col>
                    <Col>
                      <h5 className="fs-20 fw-semibold">Client Centric</h5>
                      <p className="fs-14 fw-normal">
                        Prioritizing your needs to ensure tailored solutions.
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default OurVision;

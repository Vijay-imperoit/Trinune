import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { IMAGES } from "../../../utils/staticJSON";
import { tns } from "tiny-slider/src/tiny-slider";
import "tiny-slider/dist/tiny-slider.css";
import { useEffect } from "react";

const AppDevProcess = () => {
  useEffect(() => {
    const slider1 = tns({
      container: ".mobile-slider2",
      loop: true,
      autoplayDirection: "forward",
      items: 1,
      speed: 2500,
      autoplay: true,
      autoplayHoverPause: true,
      mouseDrag: true,
      autoplayTimeout: 3000,
      swipeAngle: false,
      autoplayButtonOutput: false,
      controls: false,
      nav: false,
      gutter: 10,
      responsive: {
        540: {
          items: 2,
          gutter: 10,
        },
        768: {
          items: 2,
          gutter: 10,
        },
        1024: {
          items: 3,
          gutter: 20,
        },
      },
    });

    return () => {
      slider1.destroy();
    };
  }, []);

  return (
    <section className="section  custom-blog-cursor">
      <Container className="mb-5">
        <Row className="gy-4">
          <Col xs={12}>
            <h2 className="title-2 mb-0 word-wrap">
              Key steps in our application development process
            </h2>
            <div className="line-vr my-4"></div>
            <p>
              Once you’ve outlined your initial requirements, we’ll work with
              you to validate your product vision and assumptions, then we’ll
              handle project implementation. With a trusted Top 100 Global
              Outsourcing development company, your project is in safe hands.
            </p>
          </Col>
        </Row>
      </Container>
      <div className="mobile-slider2-section">
        <div className="mobile-slider2">
          <div className="slider-item">
            <div className="card">
              <div className="card-body">
                <div className="img-box">
                  <img
                    className="img-fluid"
                    src={IMAGES.map}
                    width="48"
                    height="48"
                    alt="map"
                    loading="lazy"
                  />
                </div>
                <div className="content-box-slider">
                  <h3 className="title">Planning</h3>
                  <p className="sub-text">
                    We assess your vision and market fit to select the right
                    tech stack and features, then create a phased development
                    strategy and finalise the project scope.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="slider-item">
            <div className="card">
              <div className="card-body">
                <div className="img-box">
                  <img
                    className="img-fluid"
                    src={IMAGES.galleryWhite}
                    width="40"
                    height="40"
                    alt="plan-notebook"
                    loading="lazy"
                  />
                </div>
                <div className="content-box-slider">
                  <h3 className="title">Designing</h3>
                  <p>
                    Our UI/UX team transforms your idea into stunning wireframes
                    and prototypes, crafting designs that ensure a seamless user
                    experience and set the stage for development.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="slider-item">
            <div className="card">
              <div className="card-body">
                <div className="img-box">
                  <img
                    className="img-fluid"
                    src={IMAGES.codeSnippet}
                    width="40"
                    height="40"
                    alt="gallery-wide"
                    loading="lazy"
                  />
                </div>
                <div className="content-box-slider">
                  <h3 className="title">Developing</h3>
                  <p className="sub-text">
                    Our expert team builds a robust front-end and back-end using
                    advanced tools and languages, while our QA team ensures a
                    bug-free, high-quality app through rigorous testing.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="slider-item">
            <div className="card">
              <div className="card-body">
                <div className="img-box">
                  <img
                    className="img-fluid"
                    src={IMAGES.rocket}
                    width="40"
                    height="40"
                    alt="code-snippet"
                    loading="lazy"
                  />
                </div>
                <div className="content-box-slider">
                  <h3 className="title">Deploying</h3>
                  <p className="sub-text">
                    We ensure a seamless deployment process by preparing your
                    application for launch, configuring the production
                    environment, and deploying it with precision to meet your
                    operational needs and market goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDevProcess;

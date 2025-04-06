import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { tns } from "tiny-slider/src/tiny-slider";
import "tiny-slider/dist/tiny-slider.css";
import { useEffect } from "react";
import { IMAGES } from "../../../utils/staticJSON";

const DevelopmentProcess = () => {
  useEffect(() => {
    const slider1 = tns({
      container: ".android-slider2",
      loop: true,
      items: 1,
      speed: 3000,
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
    <section className="section custom-blog-cursor">
      <Container>
        <Row className="gy-4">
          <Col xs={12}>
            <h2 className="title-2">
              Refined process for Android App development
            </h2>
            <div className="line-vr"></div>
            <p>
              Streamlined processes ensure top-quality Android app development,
              optimising every stage from
              <br /> concept to launch. Our approach guarantees seamless user
              experiences and high performance for
              <br /> your app.
            </p>
          </Col>
        </Row>
      </Container>

      <div className="android-slider2-section">
        <div className="android-slider2">
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
                  <h3 className="title">Discovery</h3>
                  <p className="sub-text">
                    In the Discovery phase, we evaluate your vision and market
                    fit to determine the ideal tech stack and features and
                    finalise the project scope to ensure a clear and actionable
                    roadmap.
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
                    src={IMAGES.planNotebook}
                    width="48"
                    height="48"
                    alt="plan-notebook"
                    loading="lazy"
                  />
                </div>
                <div className="content-box-slider">
                  <h3 className="title">Strategy</h3>
                  <p className="sub-text">
                    Our experts craft a solid strategy, selecting the right
                    Android-specific technologies, features, and tools to
                    deliver a scalable and effective app tailored to your needs.
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
                    width="48"
                    height="48"
                    alt="gallery-wide"
                    loading="lazy"
                  />
                </div>
                <div className="content-box-slider">
                  <h3 className="title">Designing</h3>
                  <p className="sub-text">
                    We focus on creating intuitive, responsive designs that
                    offer a seamless experience across Android devices, ensuring
                    an engaging and user-friendly interface.
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
                    width="48"
                    height="48"
                    alt="code-snippet"
                    loading="lazy"
                  />
                </div>
                <div className="content-box-slider">
                  <h3 className="title">Developing</h3>
                  <p className="sub-text">
                    Our skilled developers build high-quality, feature-rich
                    Android apps, utilizing the latest development frameworks
                    and following best practices for optimal performance and
                    security.
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

export default DevelopmentProcess;

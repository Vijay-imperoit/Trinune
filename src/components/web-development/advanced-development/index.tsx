import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { IMAGES } from "../../../utils/staticJSON";
import { tns } from "tiny-slider/src/tiny-slider";
import "tiny-slider/dist/tiny-slider.css";
import { useEffect } from "react";
const AdvancedDevelopment = () => {
  useEffect(() => {
    const frameworkSlider = tns({
      container: '.framework-slider-web',
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
      responsive: {
        540: {
          items: 2,
          gutter: 10,
        },
        768: {
          items: 2.1,
          gutter: 10,
        },
        1024: {
          items: 2.6,
          gutter: 20,
        },
        1350: {
          items: 3.3,
          gutter: 20,
        },
      },
    });
    return () => {
      frameworkSlider.destroy();
    };
  }, []);
  return (
    <div className="section framework-section-web custom-blog-cursor-white">
      <Container>
        <div className="title-box mb-lg-5">
          <Row className="gy-3">
            <Col lg={8}>
              <h2 className="title-2">
                Advanced frameworks to boost your web development!
              </h2>
            </Col>
            {/* <Col
              lg={4}
              className="align-self-end"
            >
              <div
                className="text-end"
                id="custom-control"
              >
                <button
                  className="btn-flush px-2"
                  aria-label="flush"
                >
                  <svg
                    width="20"
                    height="16"
                    viewBox="0 0 20 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 8L2 8M2 8L8 14M2 8L8 2"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <button className="btn-flush px-2" aria-label="flush">
                  <svg
                    width="20"
                    height="16"
                    viewBox="0 0 20 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 8H18M18 8L12 2M18 8L12 14"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </Col> */}
          </Row>
        </div>
      </Container>
      <div className="framework-slider-web">
        <div className="slider-item">
          <div className="card">
            <div className="card-body d-flex flex-column ">
              <h3 className="title">React JS</h3>
              <p className="text">
                React JS, a leading JavaScript library, ensures high performance
                and a seamless user experience for your web apps with the latest
                technology.
              </p>
              <div className="card-img react-js-bg mt-auto">
                <img
                  className="img-fluid"
                  src={IMAGES.react}
                  width="80"
                  height="80"
                  alt="react js"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="slider-item">
          <div className="card">
            <div className="card-body d-flex flex-column">
              <h3 className="title">Node JS</h3>
              <p className="text">
                NodeJS powers real-time, high-performance web applications. Hire
                our expert developers to build fast, scalable solutions with the
                speed and reliability of NodeJS.
              </p>
              <div className="card-img nodejs-bg mt-auto">
                <img
                  className="img-fluid"
                  src={IMAGES.nodejsWeb}
                  width="80"
                  height="80"
                  alt="node js"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="slider-item">
          <div className="card">
            <div className="card-body d-flex flex-column">
              <h3 className="title">PHP</h3>
              <p className="text">
                PHP is a leading scripting language for web development. At
                Impero IT, we excel in crafting impactful PHP-based web
                applications. Choose us for your PHP development needs.
              </p>
              <div className="card-img php-bg mt-auto">
                <img
                  className="img-fluid"
                  src={IMAGES.phpWeb}
                  width="80"
                  height="80"
                  alt="php"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="slider-item">
          <div className="card">
            <div className="card-body d-flex flex-column">
              <h3 className="title">.NET</h3>
              <p className="text">
                .NET is a framework created by Microsoft for web app
                development. With our skilled techie squad, we excel in
                developing. NET are totally secured & scalable for desktop.
              </p>
              <div className="card-img net-bg mt-auto">
                <img
                  className="img-fluid"
                  src={IMAGES.dotNetWeb}
                  width="82"
                  height="30"
                  alt=".net"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedDevelopment;

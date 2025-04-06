import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { tns } from "tiny-slider/src/tiny-slider";
import "tiny-slider/dist/tiny-slider.css";
import { useEffect } from "react";
import { IMAGES } from "../../../utils/staticJSON";

const ESGExpand = () => {
  useEffect(() => {
    const slider1 = tns({
      container: ".game-slider",
      loop: true,
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
      responsive: {
        540: {
          items: 2,
          gutter: 20,
        },
        768: {
          items: 2.6,
          gutter: 20,
        },
        1024: {
          items: 2.3,
          gutter: 20,
          edgePadding: 73,
        },
      },
    });
    return () => {
      slider1.destroy();
    };
  }, []);
  return (
    <section className="section bg-light-blue  custom-blog-cursor">
      <Container>
        <div className="title-box mb-lg-5">
          <Row className="gy-3">
            <Col lg={8}>
              <h2 className="title-2">Expanding the ESG framework solutions</h2>
              <p className="mb-0">
                Enhance your sustainability efforts with our comprehensive ESG
                solutions, designed to help businesses meet evolving regulatory
                standards.
              </p>
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
                  className="btn-flush"
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
                <button className="btn-flush" aria-label="flush">
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

      <div className="game-slider">
        <div className="slider-item services style2">
          <div className="card">
            <div className="card-body d-flex align-items-center">
              <div>
                <img
                  src={IMAGES.smartWater}
                  className="img-fluid mb-3"
                  alt="Smart water management services"
                  height="29"
                  width="29"
                  loading="lazy"
                />
                <h3 className="title mb-3">Smart water management services</h3>
                <p className="pera mb-0">
                  We help you utilise AI-driven tools to optimise water usage
                  and conservation efforts, significantly reducing waste and
                  ensuring sustainable water practices.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="slider-item services style2">
          <div className="card">
            <div className="card-body d-flex align-items-center">
              <div>
                <img
                  src={IMAGES.blockChainWaste}
                  className="img-fluid mb-3"
                  alt="Blockchain Waste Transparency"
                  height="29"
                  width="29"
                  loading="lazy"
                />
                <h3 className="title mb-3">Blockchain Waste Transparency</h3>
                <p className="pera mb-0">
                  Implement blockchain technology to track and verify recycling
                  processes, enhancing accountability and sustainability in
                  waste management.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="slider-item services style2">
          <div className="card">
            <div className="card-body d-flex align-items-center">
              <div>
                <img
                  src={IMAGES.workforceCommunity}
                  className="img-fluid mb-3"
                  alt="Workforce & Community Insights"
                  height="29"
                  width="29"
                  loading="lazy"
                />
                <h3 className="title mb-3">Workforce & Community Insights</h3>
                <p className="pera mb-0">
                  Leverage advanced data analytics to effectively monitor and
                  improve labour practices, community engagement, overall
                  operational efficiency, driving social responsibilities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ESGExpand;

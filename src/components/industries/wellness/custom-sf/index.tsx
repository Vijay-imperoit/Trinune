import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { tns } from "tiny-slider/src/tiny-slider";
import "tiny-slider/dist/tiny-slider.css";
import { useEffect } from "react";

const CustomSF = () => {
  useEffect(() => {
    const slider1 = tns({
      container: ".custom-wellness",
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
    <section className="section bg-light-blue custom-blog-cursor">
      <Container>
        <div className="title-box mb-lg-5">
          <Row className="gy-3">
            <Col lg={8}>
              <h2 className="title-2">
                The value of custom wellness
                <br />
                software for your bussiness success
              </h2>
            </Col>
          </Row>
        </div>
      </Container>

      <div className="custom-wellness">
        <div className="slider-item services style2">
          <div className="card">
            <div className="card-body d-flex align-items-center">
              <div>
                <div className="d-flex flex-wrap align-items-center">
                  <h2 className="me-3">01.</h2>
                  <h3 className="title">Enhance Client Experience</h3>
                </div>
                <p className="pera mb-0">
                  Our wellness software solutions deliver personalized client
                  experiences, optimizing service delivery, and ensuring
                  seamless interactions for greater customer satisfaction and
                  loyalty.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="slider-item services style2">
          <div className="card">
            <div className="card-body d-flex align-items-center">
              <div>
                <div className="d-flex flex-wrap align-items-center">
                  <h2 className="me-3">02.</h2>
                  <h3 className="title">Ensure Data Security</h3>
                </div>
                <p className="pera mb-0">
                  With strong security protocols, we safeguard client health
                  data, ensuring privacy and compliance with industry
                  regulations to provide a secure wellness environment.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="slider-item services style2">
          <div className="card">
            <div className="card-body d-flex align-items-center">
              <div>
                <div className="d-flex flex-wrap align-items-center">
                  <h2 className="me-3">03.</h2>
                  <h3 className="title">Leverage Analytics for Success</h3>
                </div>
                <p className="pera mb-0">
                  Our advanced analytics provide insights into client wellness
                  trends, helping businesses optimize their services, track
                  progress, and identify opportunities for growth in the
                  wellness market.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="slider-item services style2">
          <div className="card">
            <div className="card-body d-flex align-items-center">
              <div>
                <div className="d-flex flex-wrap align-items-center">
                  <h2 className="me-3">04.</h2>
                  <h3 className="title">Boost Operational Efficiency</h3>
                </div>
                <p className="pera mb-0">
                  We design integrated wellness solutions that streamline
                  operations, enhance service delivery, and ensure seamless
                  customer experiences across multiple touchpoints.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomSF;

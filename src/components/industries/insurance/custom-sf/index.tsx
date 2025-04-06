import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { tns } from "tiny-slider/src/tiny-slider";
import "tiny-slider/dist/tiny-slider.css";
import { useEffect } from "react";

const CustomSF = () => {
  useEffect(() => {
    const slider1 = tns({
      container: ".custom-insurance",
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
                The value of custom insurance software
                <br />
                for your business success
              </h2>
            </Col>
          </Row>
        </div>
      </Container>

      <div className="custom-insurance">
        <div className="slider-item services style2">
          <div className="card">
            <div className="card-body d-flex align-items-center">
              <div>
                <div className="d-flex flex-wrap align-items-center">
                  <h2 className="me-3">01.</h2>
                  <h3 className="title">Enhance Customer Engagement</h3>
                </div>
                <p className="pera mb-0">
                  Our insurance software solutions provide personalized
                  insurance experiences, boosting customer engagement, improving
                  loyalty, and fostering long-term client relationships.
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
                  <h3 className="title">Ensure Privacy and Security</h3>
                </div>
                <p className="pera mb-0">
                  With robust security protocols, we safeguard policyholder data
                  and ensure privacy, complying with insurance industry
                  regulations to provide a secure and trustworthy platform for
                  managing policies and claims.
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
                  <h3 className="title">Analytics for Business Growth</h3>
                </div>
                <p className="pera mb-0">
                  Our advanced analytics tools help track customer behavior,
                  assess claim trends, and optimize insurance strategies to
                  drive growth, enhance service offerings, and improve customer
                  satisfaction.
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
                  Our integrated insurance solutions streamline operations,
                  improving service delivery, and ensuring seamless policy
                  management and claim processing across multiple platforms and
                  devices.
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

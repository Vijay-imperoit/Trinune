import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { tns } from "tiny-slider/src/tiny-slider";
import "tiny-slider/dist/tiny-slider.css";
import { useEffect } from "react";

const CustomSF = () => {
  useEffect(() => {
    const slider1 = tns({
      container: ".custom-healthcare",
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
                The value of custom entertainment
                <br />
                software for your business success
              </h2>
            </Col>
          </Row>
        </div>
      </Container>

      <div className="custom-healthcare">
        <div className="slider-item services style2">
          <div className="card">
            <div className="card-body d-flex align-items-center">
              <div>
                <div className="d-flex flex-wrap align-items-center">
                  <h2 className="me-3">01.</h2>
                  <h3 className="title">Enhance Audience Engagement</h3>
                </div>
                <p className="pera mb-0">
                  Our entertainment solutions streamline processes, reduce
                  friction in user experiences, and enhance audience
                  interaction, allowing you to focus on delivering exceptional
                  content and experiences.
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
                  <h3 className="title">Strengthen Content Delivery</h3>
                </div>
                <p className="pera mb-0">
                  With our advanced content management systems, we help you
                  optimize content distribution, improve accessibility, and
                  ensure timely delivery of entertainment offerings.
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
                  <h3 className="title">Leverage Data for Growth</h3>
                </div>
                <p className="pera mb-0">
                  Our data analytics services provide actionable insights that
                  drive informed decisionmaking, helping you identify trends and
                  opportunities in the entertainment market.
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
                  <h3 className="title"> Improve Operational Efficiency</h3>
                </div>
                <p className="pera mb-0">
                  We design integrated operational solutions that enhance
                  visibility, coordination, and responsiveness, fostering better
                  relationships with customers and partners.
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

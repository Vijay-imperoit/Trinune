import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { tns } from "tiny-slider/src/tiny-slider";
import "tiny-slider/dist/tiny-slider.css";
import { useEffect } from "react";

const CustomSF = () => {
  useEffect(() => {
    const slider1 = tns({
      container: ".custom-real",
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
                The value of custom news software
                <br />
                for your business success
              </h2>
            </Col>
          </Row>
        </div>
      </Container>

      <div className="custom-real">
        <div className="slider-item services style2">
          <div className="card">
            <div className="card-body d-flex align-items-center">
              <div>
                <div className="d-flex flex-wrap align-items-center">
                  <h2 className="me-3">01.</h2>
                  <h3 className="title">Enhance Reader Engagement</h3>
                </div>
                <p className="pera mb-0">
                  Our custom news software solutions provide personalized news
                  experiences, enhancing reader engagement, fostering loyalty,
                  and building long-term audience relationships in the media
                  industry.
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
                  With robust security protocols, we protect user data and
                  ensure privacy, complying with media industry standards to
                  provide a secure and trustworthy platform for delivering news
                  content.
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
                  Our advanced analytics tools help track reader preferences,
                  monitor trending topics, and optimize content strategies to
                  drive growth, increase readership, and enhance audience
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
                  Our integrated news solutions streamline editorial and
                  publishing workflows, improving service delivery, and ensuring
                  seamless content distribution across multiple platforms and
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

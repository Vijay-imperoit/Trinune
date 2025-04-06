import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { tns } from "tiny-slider/src/tiny-slider";
import "tiny-slider/dist/tiny-slider.css";
import { useEffect } from "react";

const CustomHealthcare = () => {
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
                The value of custom healthcare
                <br />
                software for your medical organisation
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
                  <h3 className="title">Deliver better patient service</h3>
                </div>
                <p className="pera mb-0">
                  Enable a seamless customer experience for your patients,
                  allowing them to access their medical information anytime and
                  anywhere with advanced electronic health records software.
                  You'll save time and resources through powerful self-service
                  capabilities that allow your team to focus on care.
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
                  <h3 className="title">Manage medical data</h3>
                </div>
                <p className="pera mb-0">
                  Streamline and consolidate patient data and test results via a
                  central storage hub for seamless access that drives patient
                  and physician satisfaction. Saving time on administrative
                  tasks allows you to free up time to focus on delivering
                  high-quality patient care.
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
                  <h3 className="title">Automate to improve patient care</h3>
                </div>
                <p className="pera mb-0">
                  Reduce time spent on data collection, data processing and
                  complex test result analysis with healthcare software
                  development that lets you automate key stages of your lab
                  testing, increasing the efficiency of clinical staff.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomHealthcare;

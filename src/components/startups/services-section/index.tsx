import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { IMAGES } from "../../../utils/staticJSON";
// import { tns } from "tiny-slider/src/tiny-slider";
import "tiny-slider/dist/tiny-slider.css";
// import { useEffect } from "react";

const ServicesSection = () => {
  // useEffect(() => {
  //   const slider1 = tns({
  //     container: ".services-slider",
  //     loop: true,
  //     items: 1,
  //     speed: 3000,
  //     autoplay: true,
  //     autoplayHoverPause: false,
  //     mouseDrag: true,
  //     autoplayTimeout: 3000,
  //     swipeAngle: false,
  //     autoplayButtonOutput: false,
  //     controls: false,
  //     nav: false,
  //     gutter: 10,
  //     responsive: {
  //       540: {
  //         items: 2,
  //         gutter: 20,
  //       },
  //       768: {
  //         items: 2,
  //         gutter: 15,
  //       },
  //       1024: {
  //         items: 2.43,
  //         gutter: 56,
  //         edgePadding: 73,
  //       },
  //     },
  //   });
  //   return () => {
  //     slider1.destroy();
  //   };
  // }, []);
  return (
    <div className="section lasting-solutions-startups custom-blog-cursor-white">
      <Container>
        <Row className="gy-4 align-items-center">
          <Col
            lg={5}
            md={6}
          >
            <div className="title-box mb-0">
              <h2 className="title-2 text-white mb-0">
                A wide range of services to scale up your idea!
              </h2>
            </div>
          </Col>
          <Col
            md={6}
            className="offset-lg-1 d-flex justify-content-end"
          >
            <p className="fs-18 fw-normal text-white mb-0 space-para">
              Unlock your idea's potential with our diverse range of
              <br /> services designed to scale your vision to new heights.
            </p>
          </Col>
        </Row>

        <Row className="services-slider mt-5 gy-4">
          <Col
            md={6}
            lg={4}
            className="services style1 d-flex"
          >
            <div className="card w-100">
              <div className="card-body d-flex align-items-center">
                <div>
                  <img
                    src={IMAGES.ecosystem}
                    className="img-fluid mb-20"
                    alt="Complete Support Ecosystem"
                    loading="lazy"
                  />
                  <h3 className="title">Support Ecosystem</h3>
                </div>
              </div>
            </div>
          </Col>
          <Col
            md={6}
            lg={4}
            className="services style1 d-flex"
          >
            <div className="card w-100">
              <div className="card-body d-flex align-items-center">
                <div>
                  <img
                    src={IMAGES.careerGrowth}
                    className="img-fluid mb-20"
                    alt="Scalable Development"
                    loading="lazy"
                  />
                  <h3 className="title">Scalable Development</h3>
                </div>
              </div>
            </div>
          </Col>
          <Col
            md={6}
            lg={4}
            className="services style1 d-flex"
          >
            <div className="card w-100">
              <div className="card-body d-flex align-items-center">
                <div>
                  <img
                    src={IMAGES.sack_dollar}
                    className="img-fluid mb-20"
                    alt="dollar"
                    loading="lazy"
                  />
                  <h3 className="title">Cost Effective Services</h3>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ServicesSection;

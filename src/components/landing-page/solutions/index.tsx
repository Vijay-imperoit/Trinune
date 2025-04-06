import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { tns } from "tiny-slider/src/tiny-slider";
import "tiny-slider/dist/tiny-slider.css";
import { useEffect } from "react";
import { IMAGES } from "../../../utils/staticJSON";
const Solutions = () => {
  useEffect(() => {
    const slider1 = tns({
      container: ".my-slider",
      loop: true,
      items: 2,
      speed: 3000,
      nonce: "1",
      autoplay: true,
      autoplayHoverPause: false,
      mouseDrag: true,
      autoplayTimeout: 3000,
      swipeAngle: false,
      autoplayButtonOutput: false,
      controls: false,
      nav: false,
      gutter: 10,
      responsive: {
        640: {
          items: 3,
          gutter: 10,
        },
        768: {
          items: 4,
          gutter: 15,
        },
        1024: {
          items: 5,
          gutter: 20,
        },
      },
    });

    return () => {
      slider1.destroy();
    };
  }, []);
  return (
    <section className="section lasting-solutions custom-blog-cursor-white">
      <Container className="mb-30">
        <Row className="gy-4">
          <Col
            md={6}
            lg={4}
          >
            <div className="title-box mb-30">
              <h2 className="title-2 text-white">
                13 years of providing lasting solutions
              </h2>
            </div>
            <div className="d-flex align-items-center gap-3">
              <a
                href="/about-us"
                className="fs-16 fw-500 btn btn-primary text-white custom-cursor"
              >
                Read More
              </a>
              <a
                href="/careers"
                className="btn btn-outline-light text-white bg-transparent border-jet-color custom-cursor"
              >
                Join Our Team
              </a>
            </div>
          </Col>
          <Col
            md={6}
            className="offset-lg-2"
          >
            <p className="fs-18 fw-normal text-white mb-0">
              Impero is the partner of choice for many of the world's leading
              enterprises, SMEs and technology challengers. We help businesses
              elevate their value through custom software development, product
              design, QA and consultancy services.
            </p>
          </Col>
        </Row>
      </Container>
      <div
        className="my-slider"
        data-config='{
            "items": 2,
            "speed": 2000,
            "autoplayTimeout": 3000,
            "responsive": {
                "640": { "items": 3, "gutter": 10 },
                "768": { "items": 4, "gutter": 15 },
                "1024": { "items": 5, "gutter": 20 }
            }
        }'
      >
        <div className="slider-item">
          <div className="card">
            <div className="card-body">
              <img
                className="img-fluid"
                src={IMAGES.tourMeeting}
                width="200"
                height="200"
                alt="img"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className="slider-item">
          <div className="card">
            <div className="card-body">
              <img
                className="img-fluid"
                src={IMAGES.tourGroup}
                width="200"
                height="200"
                alt="img"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className="slider-item">
          <div className="card">
            <div className="card-body">
              <img
                className="img-fluid"
                src={IMAGES.companyGroup}
                width="200"
                height="200"
                alt="img"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className="slider-item">
          <div className="card">
            <div className="card-body">
              <img
                className="img-fluid"
                src={IMAGES.tourGroupPic}
                width="200"
                height="200"
                alt="img"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className="slider-item">
          <div className="card">
            <div className="card-body">
              <img
                className="img-fluid"
                src={IMAGES.tourImage10}
                width="200"
                height="200"
                alt="img"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className="slider-item">
          <div className="card">
            <div className="card-body">
              <img
                className="img-fluid"
                src={IMAGES.tourImage9}
                width="200"
                height="200"
                alt="img"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className="slider-item">
          <div className="card">
            <div className="card-body">
              <img
                className="img-fluid"
                src={IMAGES.tourImage8}
                width="200"
                height="200"
                alt="img"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className="slider-item">
          <div className="card">
            <div className="card-body">
              <img
                className="img-fluid"
                src={IMAGES.tourImage7}
                width="200"
                height="200"
                alt="img"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;

import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { tns } from "tiny-slider/src/tiny-slider";
import "tiny-slider/dist/tiny-slider.css";
import { useEffect } from "react";
import { IMAGES } from "../../../utils/staticJSON";

const ClientFeedback = () => {
  useEffect(() => {
    const slider3 = tns({
      container: ".reviews-slider-move-left",
      items: 1,
      speed: 2500,
      autoplay: true,
      loop: true,
      autoplayHoverPause: true,
      mouseDrag: true,
      autoplayTimeout: 3000,
      autoplayButtonOutput: false,
      controls: false,
      nav: false,
      gutter: 10,
      responsive: {
        640: {
          items: 2,
          gutter: 10,
        },
        768: {
          items: 2,
          gutter: 15,
        },
        1024: {
          items: 3,
          gutter: 30,
        },
      },
    });

    const slider4 = tns({
      container: ".reviews-slider-move-right",
      items: 1,
      speed: 2500,
      autoplay: true,
      loop: true,
      autoplayHoverPause: true,
      mouseDrag: true,
      autoplayDirection: "backward",
      autoplayTimeout: 3000,
      autoplayButtonOutput: false,
      controls: false,
      nav: false,
      gutter: 10,
      responsive: {
        640: {
          items: 2,
          gutter: 10,
        },
        768: {
          items: 2,
          gutter: 15,
        },
        1024: {
          items: 3,
          gutter: 30,
        },
      },
    });

    return () => {
      slider3.destroy();
      slider4.destroy();
    };
  }, []);
  return (
    <section className="section bg-light-blue custom-blog-cursor">
      <Container>
        <Row className="mb-3">
          <Col
            lg={8}
            className="mx-auto"
          >
            <div className="title-box text-center">
              <h2 className="title-2">See why clients ❤️ Impero</h2>
              <p>Our satisfied customers have the best words for our work</p>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="reviews-slider reviews-slider-move-left mb-30">
        <div className="slider-item">
          <div
            // href="#"
            className="card"
            aria-label="client-feedback"
          >
            <div className="card-head">
              <div
                className="start-group"
                role="img"
                aria-label="Rating"
              >
                <img
                  className="img-fluid"
                  src={IMAGES.orangeStar}
                  width="24"
                  height="24"
                  alt="start"
                  loading="lazy"
                />
                <img
                  className="img-fluid"
                  src={IMAGES.orangeStar}
                  width="24"
                  height="24"
                  alt="start"
                  loading="lazy"
                />
                <img
                  className="img-fluid"
                  src={IMAGES.orangeStar}
                  width="24"
                  height="24"
                  alt="start"
                  loading="lazy"
                />
                <img
                  className="img-fluid"
                  src={IMAGES.orangeStar}
                  width="24"
                  height="24"
                  alt="start"
                  loading="lazy"
                />
                <img
                  className="img-fluid"
                  src={IMAGES.orangeStar}
                  width="24"
                  height="24"
                  alt="start"
                  loading="lazy"
                />
              </div>
              <img
                className="img-fluid"
                src={IMAGES.clipPathGrp}
                width="28"
                height="28"
                alt="clip-path-group"
                loading="lazy"
              />
            </div>
            <p className="review-text">
              "The owner was very friendly and open-minded."
            </p>
            <p className="main-text">Adrian Ghender</p>
            <p className="sub-text">Crystal Code (CEO)</p>
          </div>
        </div>
        <div className="slider-item">
          <div
            // href="#"
            className="card"
            aria-label="client-feedback"
          >
            <div className="card-head">
              <div
                className="start-group"
                role="img"
                aria-label="Rating"
              >
                <img
                  className="img-fluid"
                  src={IMAGES.orangeStar}
                  width="24"
                  height="24"
                  alt="start"
                  loading="lazy"
                />
                <img
                  className="img-fluid"
                  src={IMAGES.orangeStar}
                  width="24"
                  height="24"
                  alt="start"
                  loading="lazy"
                />
                <img
                  className="img-fluid"
                  src={IMAGES.orangeStar}
                  width="24"
                  height="24"
                  alt="start"
                  loading="lazy"
                />
                <img
                  className="img-fluid"
                  src={IMAGES.orangeStar}
                  width="24"
                  height="24"
                  alt="start"
                  loading="lazy"
                />
                <img
                  className="img-fluid"
                  src={IMAGES.orangeStar}
                  width="24"
                  height="24"
                  alt="start"
                  loading="lazy"
                />
              </div>
              <img
                className="img-fluid"
                src={IMAGES.clipPathGrp}
                width="28"
                height="28"
                alt="clip-path-group"
                loading="lazy"
              />
            </div>
            <p className="review-text">
              "They also pay attention and understand us."
            </p>
            <p className="main-text">Ian Duffy</p>
            <p className="sub-text">Symposia. (Co-founder)</p>
          </div>
        </div>
        <div className="slider-item">
          <div
            // href="#"
            className="card"
            aria-label="client-feedback"
          >
            <div className="card-head">
              <div
                className="start-group"
                role="img"
                aria-label="Rating"
              >
                <img
                  className="img-fluid"
                  src={IMAGES.orangeStar}
                  width="24"
                  height="24"
                  alt="start"
                  loading="lazy"
                />
                <img
                  className="img-fluid"
                  src={IMAGES.orangeStar}
                  width="24"
                  height="24"
                  alt="start"
                  loading="lazy"
                />
                <img
                  className="img-fluid"
                  src={IMAGES.orangeStar}
                  width="24"
                  height="24"
                  alt="start"
                  loading="lazy"
                />
                <img
                  className="img-fluid"
                  src={IMAGES.orangeStar}
                  width="24"
                  height="24"
                  alt="start"
                  loading="lazy"
                />
                <img
                  className="img-fluid"
                  src={IMAGES.orangeStar}
                  width="24"
                  height="24"
                  alt="start"
                  loading="lazy"
                />
              </div>
              <img
                className="img-fluid"
                src={IMAGES.clipPathGrp}
                width="28"
                height="28"
                alt="clip-path-group"
                loading="lazy"
              />
            </div>
            <p className="review-text">
              "They had vast knowledge in the app development industry."
            </p>
            <p className="main-text">Maximiliano Trevino</p>
            <p className="sub-text">Nauatili LLC (Founder)</p>
          </div>
        </div>
        <div className="slider-item">
          <div
            // href="#"
            className="card"
            aria-label="client-feedback"
          >
            <div className="card-head">
              <div
                className="start-group"
                role="img"
                aria-label="Rating"
              >
                <img
                  className="img-fluid"
                  src={IMAGES.orangeStar}
                  width="24"
                  height="24"
                  alt="start"
                  loading="lazy"
                />
                <img
                  className="img-fluid"
                  src={IMAGES.orangeStar}
                  width="24"
                  height="24"
                  alt="start"
                  loading="lazy"
                />
                <img
                  className="img-fluid"
                  src={IMAGES.orangeStar}
                  width="24"
                  height="24"
                  alt="start"
                  loading="lazy"
                />
                <img
                  className="img-fluid"
                  src={IMAGES.orangeStar}
                  width="24"
                  height="24"
                  alt="start"
                  loading="lazy"
                />
                <img
                  className="img-fluid"
                  src={IMAGES.orangeStar}
                  width="24"
                  height="24"
                  alt="start"
                  loading="lazy"
                />
              </div>
              <img
                className="img-fluid"
                src={IMAGES.clipPathGrp}
                width="28"
                height="28"
                alt="clip-path-group"
                loading="lazy"
              />
            </div>
            <p className="review-text">
              "My client base is impressed with the easy flow of the app and the
              user experience is very positive."
            </p>
            <p className="main-text">Avril McMonagle</p>
            <p className="sub-text">Early Edu (Lead Consultant)</p>
          </div>
        </div>
      </div>
      <div className="reviews-slider reviews-slider-move-right">
        <div className="slider-item">
          <div
            // href="#"
            className="card"
            aria-label="client-feedback"
          >
            <div className="card-head">
              <div
                className="start-group"
                role="img"
                aria-label="Rating"
              >
                <img
                  className="img-fluid"
                  src={IMAGES.orangeStar}
                  width="24"
                  height="24"
                  alt="start"
                  loading="lazy"
                />
                <img
                  className="img-fluid"
                  src={IMAGES.orangeStar}
                  width="24"
                  height="24"
                  alt="start"
                  loading="lazy"
                />
                <img
                  className="img-fluid"
                  src={IMAGES.orangeStar}
                  width="24"
                  height="24"
                  alt="start"
                  loading="lazy"
                />
                <img
                  className="img-fluid"
                  src={IMAGES.orangeStar}
                  width="24"
                  height="24"
                  alt="start"
                  loading="lazy"
                />
                <img
                  className="img-fluid"
                  src={IMAGES.orangeStar}
                  width="24"
                  height="24"
                  alt="start"
                  loading="lazy"
                />
              </div>
              <img
                className="img-fluid"
                src={IMAGES.clipPathGrp}
                width="28"
                height="28"
                alt="clip-path-group"
                loading="lazy"
              />
            </div>
            <p className="review-text">"You can trust Impero IT to deliver."</p>
            <p className="main-text">Emerald Takyi Buanya</p>
            <p className="sub-text"> Blackquest Digital Ghana(CEO & Founder)</p>
          </div>
        </div>
        <div className="slider-item">
          <div
            // href="#"
            className="card"
            aria-label="client-feedback"
          >
            <div className="card-head">
              <div
                className="start-group"
                role="img"
                aria-label="Rating"
              >
                <img
                  className="img-fluid"
                  src={IMAGES.orangeStar}
                  width="24"
                  height="24"
                  alt="start"
                  loading="lazy"
                />
                <img
                  className="img-fluid"
                  src={IMAGES.orangeStar}
                  width="24"
                  height="24"
                  alt="start"
                  loading="lazy"
                />
                <img
                  className="img-fluid"
                  src={IMAGES.orangeStar}
                  width="24"
                  height="24"
                  alt="start"
                  loading="lazy"
                />
                <img
                  className="img-fluid"
                  src={IMAGES.orangeStar}
                  width="24"
                  height="24"
                  alt="start"
                  loading="lazy"
                />
                <img
                  className="img-fluid"
                  src={IMAGES.orangeStar}
                  width="24"
                  height="24"
                  alt="start"
                  loading="lazy"
                />
              </div>
              <img
                className="img-fluid"
                src={IMAGES.clipPathGrp}
                width="28"
                height="28"
                alt="clip-path-group"
                loading="lazy"
              />
            </div>
            <p className="review-text">
              "They really understood me as a business person."
            </p>
            <p className="main-text">Keegan Gangadu</p>
            <p className="sub-text">Shop-a-lot App (Founder)</p>
          </div>
        </div>
        <div className="slider-item">
          <div
            // href="#"
            className="card"
            aria-label="client-feedback"
          >
            <div className="card-head">
              <div
                className="start-group"
                role="img"
                aria-label="Rating"
              >
                <img
                  className="img-fluid"
                  src={IMAGES.orangeStar}
                  width="24"
                  height="24"
                  alt="start"
                  loading="lazy"
                />
                <img
                  className="img-fluid"
                  src={IMAGES.orangeStar}
                  width="24"
                  height="24"
                  alt="start"
                  loading="lazy"
                />
                <img
                  className="img-fluid"
                  src={IMAGES.orangeStar}
                  width="24"
                  height="24"
                  alt="start"
                  loading="lazy"
                />
                <img
                  className="img-fluid"
                  src={IMAGES.orangeStar}
                  width="24"
                  height="24"
                  alt="start"
                  loading="lazy"
                />
                <img
                  className="img-fluid"
                  src={IMAGES.orangeStar}
                  width="24"
                  height="24"
                  alt="start"
                  loading="lazy"
                />
              </div>
              <img
                className="img-fluid"
                src={IMAGES.clipPathGrp}
                width="28"
                height="28"
                alt="clip-path-group"
                loading="lazy"
              />
            </div>
            <p className="review-text">
              "Their open communication helped make this project a true
              collaboration between our teams."
            </p>
            <p className="main-text">Lara Pairceir</p>
            <p className="sub-text">EthiCart (Cofounder & COO)</p>
          </div>
        </div>
        <div className="slider-item">
          <div
            // href="#"
            className="card"
            aria-label="client-feedback"
          >
            <div className="card-head">
              <div
                className="start-group"
                role="img"
                aria-label="Rating"
              >
                <img
                  className="img-fluid"
                  src={IMAGES.orangeStar}
                  width="24"
                  height="24"
                  alt="start"
                  loading="lazy"
                />
                <img
                  className="img-fluid"
                  src={IMAGES.orangeStar}
                  width="24"
                  height="24"
                  alt="start"
                  loading="lazy"
                />
                <img
                  className="img-fluid"
                  src={IMAGES.orangeStar}
                  width="24"
                  height="24"
                  alt="start"
                  loading="lazy"
                />
                <img
                  className="img-fluid"
                  src={IMAGES.orangeStar}
                  width="24"
                  height="24"
                  alt="start"
                  loading="lazy"
                />
                <img
                  className="img-fluid"
                  src={IMAGES.orangeStar}
                  width="24"
                  height="24"
                  alt="start"
                  loading="lazy"
                />
              </div>
              <img
                className="img-fluid"
                src={IMAGES.clipPathGrp}
                width="28"
                height="28"
                alt="clip-path-group"
                loading="lazy"
              />
            </div>
            <p className="review-text">
              "They were very patient in walking me through the entire process."
            </p>
            <p className="main-text">Ellice Zoe</p>
            <p className="sub-text">Divine You App (CEO & Founder)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientFeedback;

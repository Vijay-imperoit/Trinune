import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { IMAGES } from "../../../utils/staticJSON";
import { useEffect } from "react";
import { tns } from "tiny-slider/src/tiny-slider";
import "tiny-slider/dist/tiny-slider.css";
import $ from "jquery";
import "magnific-popup";
import "magnific-popup/dist/magnific-popup.css";
import AnimatedImageWithOpacity from '../../../global/AnimatedImageWithOpacity';

const LifeImpero = () => {
  useEffect(() => {
    // Initialize the first slider
    const slider1 = tns({
      container: ".my-slider-careers",
      loop: true,
      items: 1,
      speed: 2500,
      autoplay: true,
      autoplayDirection: "forward",
      autoplayHoverPause: false,
      autoplayTimeout: 3000,
      swipeAngle: false,
      autoplayButtonOutput: false,
      controls: false,
      nav: false,
      gutter: 10,
      responsive: {
        640: {
          items: 1,
          gutter: 10,
        },
        768: {
          items: 5,
          gutter: 15,
        },
        1024: {
          items: 4,
          gutter: 15,
        },
      },
    });
  
    // Initialize the second slider
    const slider2 = tns({
      container: ".my-slider-careers2",
      loop: true,
      items: 1,
      speed: 2500,
      autoplay: true,
      autoplayDirection: "backward",
      autoplayHoverPause: false,
      autoplayTimeout: 3000,
      swipeAngle: false,
      autoplayButtonOutput: false,
      controls: false,
      nav: false,
      gutter: 10,
      responsive: {
        640: {
          items: 1,
          gutter: 10,
        },
        768: {
          items: 5,
          gutter: 15,
        },
        1024: {
          items: 4,
          gutter: 15,
        },
      },
    });
  
    // Initialize the YouTube popup
    $(document).ready(function () {
      $(".popup-youtube").magnificPopup({
        type: "iframe",
        iframe: {
          patterns: {
            youtube: {
              index: "youtu.be/",
              id: function (url: any) {
                const match = url.match(/youtu\.be\/([^\?]+)/); // Extract video ID from short URL
                if (match && match[1]) {
                  return match[1];
                }
                // Fallback to standard YouTube URL handling
                const fallbackMatch = url.match(/[?&]v=([^&]+)/);
                return fallbackMatch ? fallbackMatch[1] : null;
              },
              src: "https://www.youtube.com/embed/%id%?autoplay=1",
            },
          },
          srcAction: "iframe_src",
        },
      });
    });
  
    // Cleanup function to destroy sliders and close popup
    return () => {
      slider1.destroy();
      slider2.destroy();
      $(".popup-youtube").magnificPopup("close");
    };
  }, []);
  
  
  return (
    <>
      <div className="section custom-blog-cursor">
        <Container>
          <Row>
            <Col
              lg={8}
              className="col-12"
            >
              <div className="title-box">
                <h2 className="title-2">Why work with us ?</h2>
                <p>
                  Join a dynamic culture of innovation, accelerate your career
                  growth, and contribute to exciting tech advancements at
                  Impero, where your ideas make a real impact.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="align-items-center gx-md-5">
            <Col lg={6}>
              {/* <AnimatedImageWithOpacity
                className="img-fluid blur-load"
                loading="lazy"
                width={562}
                height={619}
                src={IMAGES.whyImpero}
                alt=""
              /> */}
              <div
                className="imperian-speaks-box-careers2"
                //  style={{
                //   height: '619px',
                //   width: '562px'
                //  }}
              >
                <AnimatedImageWithOpacity
                  // className="fit-img"
                  className="img-fluid"
                  src={IMAGES.whyImpero}
                  width={560}
                  height={612}
                  alt=""
                  loading="lazy"
                />
                <a
                  href="https://youtu.be/DYUBmg7-8j8?si=pYVUBFjA4FxZ9WOG"
                  className="play-btn popup-youtube"
                  aria-label="playbtn"
                >
                  <AnimatedImageWithOpacity
                    className="img-fluid"
                    src={IMAGES.videoPlay}
                    width="60"
                    height="60"
                    alt="play-img"
                    loading="lazy"
                  />
                </a>
              </div>
            </Col>
            <Col lg={6}>
              <div className="d-inline-flex flex-column">
                <div className="text-box">
                  <h4>Where Talented Minds Thrive and Technology Evolves</h4>
                  <p>
                    Join a team where talent meets opportunity, and innovation
                    drives success. At Impero, you’ll grow alongside experts,
                    push boundaries in tech, and be part of a culture that
                    evolves with every challenge.
                  </p>
                </div>
                <ul className="default-list-careers ps-3">
                  <li className="list-box">
                    <h4 className="title">
                      Bringing back the brightest talent
                    </h4>
                    <p className="text">
                      Thrive in a culture of innovation, advance your career
                      with growth opportunities, and contribute to
                      groundbreaking technological advancements.
                    </p>
                  </li>
                  <li className="list-box">
                    <h4>Accomplished professionals</h4>
                    <p>
                      From Learning to leadership, you’ll find both at Peerbits.
                      This is your chance to discover plenty of career
                      advancements and take them to the next level.
                    </p>
                  </li>
                  <li className="list-box">
                    <h4>Research careers</h4>
                    <p>
                      With the aim of making an impact and solving real-world
                      problems, Peerbits have its door open for researchers
                      working to solve technology’s most exciting challenges..
                    </p>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="section bg-black  custom-blog-cursor-white">
        <Container className="mb-30">
          <Row className="gy-4 align-items-center">
            <Col
              lg={4}
              md={6}
            >
              <h3 className="fs-35 fw-bolder text-white mb-0">Life @ Impero</h3>
            </Col>
            <Col
              md={6}
              className="offset-lg-2"
            >
              <p className="fs-18 fw-normal text-white mb-0">
                Impero promotes a culture of impacting users’ lives with our
                innovations. And we are looking for people who share, understand
                our vision and contribute to it.
              </p>
            </Col>
          </Row>
        </Container>
        <div className="my-slider-careers text-white d-flex align-items-center">
          <div className="card bg-transparent">
            <div className="card-body p-1 p-md-2 d-flex justify-content-center align-items-center">
              <img
                className="img-fluid"
                src={IMAGES.lifeImpero1}
                width="100%"
                height="auto"
                alt="img"
                loading="lazy"
              />
            </div>
          </div>
          <div className="card bg-transparent">
            <div className="card-body p-1 p-md-2 d-flex justify-content-center align-items-center">
              <img
                className="img-fluid"
                src={IMAGES.lifeImpero2}
                width="100%"
                height="auto"
                alt="img"
                loading="lazy"
              />
            </div>
          </div>
          <div className="card bg-transparent">
            <div className="card-body p-1 p-md-2 d-flex justify-content-center align-items-center">
              <img
                className="img-fluid"
                src={IMAGES.lifeImpero3}
                width="100%"
                height="auto"
                alt="img"
                loading="lazy"
              />
            </div>
          </div>
          <div className="card bg-transparent">
            <div className="card-body p-1 p-md-2 d-flex justify-content-center align-items-center">
              <img
                className="img-fluid"
                src={IMAGES.lifeImpero4}
                width="100%"
                height="auto"
                alt="img"
                loading="lazy"
              />
            </div>
          </div>
          <div className="card bg-transparent">
            <div className="card-body p-1 p-md-2 d-flex justify-content-center align-items-center">
              <img
                className="img-fluid"
                src={IMAGES.lifeImpero5}
                width="100%"
                height="auto"
                alt="img"
                loading="lazy"
              />
            </div>
          </div>
          <div className="card bg-transparent">
            <div className="card-body p-1 p-md-2 d-flex justify-content-center align-items-center">
              <img
                className="img-fluid"
                src={IMAGES.lifeImpero6}
                width="100%"
                height="auto"
                alt="img"
                loading="lazy"
              />
            </div>
          </div>
          <div className="card bg-transparent">
            <div className="card-body p-1 p-md-2 d-flex justify-content-center align-items-center">
              <img
                className="img-fluid"
                src={IMAGES.lifeImpero7}
                width="100%"
                height="auto"
                alt="img"
                loading="lazy"
              />
            </div>
          </div>
          <div className="card bg-transparent">
            <div className="card-body p-1 p-md-2 d-flex justify-content-center align-items-center">
              <img
                className="img-fluid"
                src={IMAGES.lifeImpero8}
                width="100%"
                height="auto"
                alt="img"
                loading="lazy"
              />
            </div>
          </div>
          <div className="card bg-transparent">
            <div className="card-body p-1 p-md-2 d-flex justify-content-center align-items-center">
              <img
                className="img-fluid"
                src={IMAGES.lifeImpero9}
                width="100%"
                height="auto"
                alt="img"
                loading="lazy"
              />
            </div>
          </div>
          <div className="card bg-transparent">
            <div className="card-body p-1 p-md-2 d-flex justify-content-center align-items-center">
              <img
                className="img-fluid"
                src={IMAGES.lifeImpero10}
                width="100%"
                height="auto"
                alt="img"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className="my-slider-careers2 text-white d-flex align-items-center">
          <div className="card bg-transparent">
            <div className="card-body p-1 p-md-2 d-flex justify-content-center align-items-center">
              <img
                className="img-fluid"
                src={IMAGES.lifeImpero11}
                width="100%"
                height="auto"
                alt="img"
                loading="lazy"
              />
            </div>
          </div>
          <div className="card bg-transparent">
            <div className="card-body p-1 p-md-2 d-flex justify-content-center align-items-center">
              <img
                className="img-fluid"
                src={IMAGES.lifeImpero12}
                width="100%"
                height="auto"
                alt="img"
                loading="lazy"
              />
            </div>
          </div>
          <div className="card bg-transparent">
            <div className="card-body p-1 p-md-2 d-flex justify-content-center align-items-center">
              <img
                className="img-fluid"
                src={IMAGES.lifeImpero13}
                width="100%"
                height="auto"
                alt="img"
                loading="lazy"
              />
            </div>
          </div>
          <div className="card bg-transparent">
            <div className="card-body p-1 p-md-2 d-flex justify-content-center align-items-center">
              <img
                className="img-fluid"
                src={IMAGES.lifeImpero14}
                width="100%"
                height="auto"
                alt="img"
                loading="lazy"
              />
            </div>
          </div>
          <div className="card bg-transparent">
            <div className="card-body p-1 p-md-2 d-flex justify-content-center align-items-center">
              <img
                className="img-fluid"
                src={IMAGES.lifeImpero15}
                width="100%"
                height="auto"
                alt="img"
                loading="lazy"
              />
            </div>
          </div>
          <div className="card bg-transparent">
            <div className="card-body p-1 p-md-2 d-flex justify-content-center align-items-center">
              <img
                className="img-fluid"
                src={IMAGES.lifeImpero16}
                width="100%"
                height="auto"
                alt="img"
                loading="lazy"
              />
            </div>
          </div>
          <div className="card bg-transparent">
            <div className="card-body p-1 p-md-2 d-flex justify-content-center align-items-center">
              <img
                className="img-fluid"
                src={IMAGES.tourImage10}
                width="100%"
                height="auto"
                alt="img"
                loading="lazy"
              />
            </div>
          </div>
          <div className="card bg-transparent">
            <div className="card-body p-1 p-md-2 d-flex justify-content-center align-items-center">
              <img
                className="img-fluid"
                src={IMAGES.lifeImpero18}
                width="100%"
                height="auto"
                alt="img"
                loading="lazy"
              />
            </div>
          </div>
          <div className="card bg-transparent">
            <div className="card-body p-1 p-md-2 d-flex justify-content-center align-items-center">
              <img
                className="img-fluid"
                src={IMAGES.lifeImpero19}
                width="100%"
                height="auto"
                alt="img"
                loading="lazy"
              />
            </div>
          </div>
          <div className="card bg-transparent">
            <div className="card-body p-1 p-md-2 d-flex justify-content-center align-items-center">
              <img
                className="img-fluid"
                src={IMAGES.lifeImpero20}
                width="100%"
                height="auto"
                alt="img"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LifeImpero;

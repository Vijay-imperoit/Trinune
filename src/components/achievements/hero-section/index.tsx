import { Col, Container, Row } from 'react-bootstrap';
import './style.css';
import { useEffect } from 'react';
import 'tiny-slider/dist/tiny-slider.css';
import confetti from "canvas-confetti";

const HeroSection = () => {

  useEffect(() => {

var duration = 3 * 1000;
var animationEnd = Date.now() + duration;
var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

function randomInRange(min: any, max: any) {
  return Math.random() * (max - min) + min;
}

var interval = setInterval(function() {
  var timeLeft = animationEnd - Date.now();

  if (timeLeft <= 0) {
    return clearInterval(interval);
  }

  var particleCount = 50 * (timeLeft / duration);
  confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
  confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
}, 250);
// var count = 200;
// var defaults = {
//   origin: { y: 0.2 }
// };

// function fire(particleRatio, opts) {
//   confetti({
//     ...defaults,
//     ...opts,
//     particleCount: Math.floor(count * particleRatio)
//   });
// }

// fire(0.25, {
//   spread: 26,
//   startVelocity: 55,
// });
// fire(0.2, {
//   spread: 60,
// });
// fire(0.35, {
//   spread: 100,
//   decay: 0.91,
//   scalar: 0.8
// });
// fire(0.1, {
//   spread: 120,
//   startVelocity: 25,
//   decay: 0.92,
//   scalar: 1.2
// });
// fire(0.1, {
//   spread: 120,
//   startVelocity: 45,
// });
  }, []);

  return (
    <>
      <section className="bg-black position-relative custom-blog-cursor-white">
        <div className="pettan-line right"></div>
        <div className="pettan-line left"></div>
        <div className="cup-effect"></div>
        <Container className="py-5">
          <Row className="h-100 py-5 d-flex flex-column align-items-center">
            <Col
              xs={12}
              lg={8}
              className="mx-auto text-center mt-4"
            >
              <h1 className="fs-50 fw-bolder text-white text-center mb-3 main-text">
                Discover our Success Story of{' '}<br></br>
                <span className="text-gradient-style3">Our Achievements</span>
              </h1>
              <p className="fs-20 fw-normal text-white text-center">
                Explore how Impero IT Services Pvt. Ltd. turns innovation into
                impact
                <br /> with our exceptional achievements and success stories.
              </p>
            </Col>
          </Row>
        </Container>
        <div className="star-effect"></div>
        <div className="overflow-hidden">
          <div className="divider">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 60"
            >
              <path
                fill="currentColor"
                d="M0,0V60H1440V0A5771,5771,0,0,1,0,0Z"
              />
            </svg>
          </div>
        </div>
      </section>
      {/* <section className="bg-light-purple success-story-achievement">
        <Container className="py-5">
          <Row className="align-items-center align-items-lg-start justify-content-center position-relative">
            <div
              className="position-absolute custom-btn me-3"
              id="custom-control"
            >
              <button
                className="btn-flush"
                aria-label="left"
              >
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29.794 5.41316C16.2134 5.41316 5.20711 16.4213 5.20711 30C5.20711 43.5788 16.2134 54.5869 29.794 54.5869C43.3727 54.5869 54.3809 43.5788 54.3809 30C54.3809 16.4213 43.3727 5.41316 29.794 5.41316ZM29.794 52.62C17.3215 52.62 7.17399 42.4725 7.17399 30C7.17399 17.5275 17.3215 7.38004 29.794 7.38004C42.2684 7.38004 52.414 17.5275 52.414 30C52.414 42.4725 42.2684 52.62 29.794 52.62Z"
                    fill="currentColor"
                  />
                  <path
                    d="M28.3 19.4309L26.9087 18.0397L14.95 30.0003L26.9087 41.9609L28.3 40.5697L18.715 30.9847L42.5781 30.9847V29.0178L18.715 29.0178L28.3 19.4309Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
              <button
                className="btn-flush"
                style={{ position: 'absolute', right: 0 }}
                aria-label="right"
              >
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30.206 54.5868C43.7866 54.5868 54.7929 43.5787 54.7929 30C54.7929 16.4212 43.7866 5.41309 30.206 5.41309C16.6273 5.41309 5.61914 16.4212 5.61914 30C5.61914 43.5787 16.6273 54.5868 30.206 54.5868ZM30.206 7.37996C42.6785 7.37996 52.826 17.5275 52.826 30C52.826 42.4725 42.6785 52.62 30.206 52.62C17.7316 52.62 7.58602 42.4725 7.58602 30C7.58602 17.5275 17.7316 7.37996 30.206 7.37996Z"
                    fill="currentColor"
                  />
                  <path
                    d="M31.7 40.5691L33.0913 41.9603L45.05 29.9997L33.0913 18.0391L31.7 19.4303L41.285 29.0153H17.4219V30.9822H41.285L31.7 40.5691Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
            <Col
              xs={9}
              className="army-certificate"
            >
              <div className="certificate-slider d-flex align-items-center">
                <img
                  className="img-fluid"
                  src={IMAGES.certificates}
                  width="886"
                  height="440"
                  alt="cert"
                  loading="lazy"
                />
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center mt-2">
            <Col
              lg={11}
              className="text-center mt-4"
            >
              <h2 className="h2-title mb-3">
                Certificate of Excellence from Indian Army
              </h2>
              <p className="sab-text">
                The year was 2013 when we were accredited with the ‘Certificate
                of Excellence’ from the Indian Army for developing a customised
                ERP solution for EME 611 to manage, track and analyse inventory
                effectively across 12+ battalions.
              </p>
            </Col>
          </Row>
        </Container>
      </section> */}
    </>
  );
};

export default HeroSection;

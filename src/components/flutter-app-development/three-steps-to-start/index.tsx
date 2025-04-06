import { Col, Container, Row } from 'react-bootstrap';
import './style.css';
import { IMAGES } from '../../../utils/staticJSON';
import AnimatedImageWithOpacity from '../../../global/AnimatedImageWithOpacity';
// import { tns } from 'tiny-slider/src/tiny-slider';
// import 'tiny-slider/dist/tiny-slider.css';
// import { useEffect } from 'react';

const ThreeStepsToStarts = () => {
  // useEffect(() => {
  //   const slider1 = tns({
  //     container: '.flutter-slider',
  //     // loop: true,
  //     // items: 1,
  //     // speed: 3000,
  //     // autoplay: true,
  //     // autoplayHoverPause: false,
  //     // mouseDrag: true,
  //     // autoplayTimeout: 3000,
  //     // swipeAngle: false,
  //     // autoplayButtonOutput: false,
  //     // controlsContainer: '#custom-control2',
  //     // nav: false,
  //     // responsive: {
  //     //   450: {
  //     //     items: 2,
  //     //     gutter: 20,
  //     //   },
  //     //   768: {
  //     //     items: 2,
  //     //     gutter: 20,
  //     //   },
  //     //   1024: {
  //     //     items: 2,
  //     //     gutter: 20,
  //     //     edgePadding: 99,
  //     //   },
  //     // },
  //     loop: true,
  //     items: 1,
  //     slideBy: 'page',
  //     speed: 3000,
  //     nonce: '1',
  //     autoplay: true,
  //     autoplayHoverPause: true,
  //     mouseDrag: true,
  //     autoplayTimeout: 3000,
  //     autoplayDirection: 'forward',
  //     swipeAngle: false,
  //     autoplayButtonOutput: false,
  //     controls: false,
  //     nav: false,
  //     gutter: 10,
  //     rewind: false,
  //     preventActionWhenRunning: true,
  //     responsive: {
  //       450: {
  //         items: 2,
  //         gutter: 10,
  //       },
  //       768: {
  //         items: 2,
  //         gutter: 15,
  //       },
  //       1024: {
  //         items: 2,
  //         gutter: 20,
  //         edgePadding: 99,
  //       },
  //     },
  //   });
  //   return () => {
  //     slider1.destroy();
  //   };
  // }, []);

  return (
    <>
      <div className="section custom-blog-cursor">
        <Container>
          <Row className="justify-content-center gy-4 mb-lg-5 mb-4">
            <Col
              lg={9}
              className="text-center"
            >
              <div className="title-box mb-0">
                <h2 className="title-2 mb-3">
                  3 steps Easy Process to Hire Flutter Developers from Impero IT
                  Services
                </h2>
                <p className="fs-18 fw-normal mb-0">
                  Benefit from our skilled Flutter developers with 5+ years of
                  experience. Hire the top UK team for impressive Android and
                  iOS apps and start your project easily, showcasing your
                  vision.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="gy-4">
            <Col
              lg={4}
              className="order-lg-last d-flex"
            >
              <AnimatedImageWithOpacity
                className="img-fluid fit-img"
                src={IMAGES.flutterThreeSteps}
                width="410"
                height="410"
                alt="flutter"
                loading="lazy"
              />
            </Col>
            <Col
              lg={8}
              className="d-flex"
            >
              <div className="card bg-offset-white br-12px border-0">
                <div className="card-body p-4">
                  <Row className="flutter-developers mb-4">
                    <Col className="col-auto">
                      <AnimatedImageWithOpacity
                        src={IMAGES.ideaThreeSteps}
                        width="30"
                        height="34"
                        alt="idea"
                        loading="lazy"
                      />
                    </Col>
                    <Col>
                      <h3 className="title">Discuss Your Flutter App Idea</h3>
                      <p className="pera mb-0">
                        Connect with us to discuss your Flutter app idea. We'll
                        match you with a top Flutter developer suited for your
                        project.
                      </p>
                    </Col>
                  </Row>
                  <Row className="flutter-developers mb-4">
                    <Col className="col-auto">
                      <AnimatedImageWithOpacity
                        src={IMAGES.meterThreeSteps}
                        width="30"
                        height="34"
                        alt="meter"
                        loading="lazy"
                      />
                    </Col>
                    <Col>
                      <h3 className="title">Evaluate Their Skills</h3>
                      <p className="pera mb-0">
                        Allocate a hi-end task to our Flutter talent, test them
                        out, and get assured of our veteran Flutter developers’
                        expertise.
                      </p>
                    </Col>
                  </Row>
                  <Row className=" flutter-developers">
                    <Col className="col-auto">
                      <AnimatedImageWithOpacity
                        src={IMAGES.peopleThreeSteps}
                        width="30"
                        height="34"
                        alt="people"
                        loading="lazy"
                      />
                    </Col>
                    <Col>
                      <h3 className="title">
                        Make the Flutter pro a part of your team.
                      </h3>
                      <p className="pera mb-0">
                        Onboard your remote Flutter programmer, that will be an
                        asset to your team. Together, come out stronger with a
                        natively compiled Flutter
                      </p>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section bg-light-blue">
        <Container>
          <div className="title-box mb-lg-5">
            <Row className="gy-3">
              <Col lg={9}>
                <h2 className="title-2">
                  The many advantages of going for a Flutter app!
                </h2>
                <p className="mb-0 me-lg-5">
                  Unlock faster development, seamless cross-platform
                  performance, and cost-effective solutions with Flutter,
                  delivering high-quality apps that work flawlessly on both iOS
                  and Android.
                </p>
              </Col>
              {/* <Col
                lg={3}
                className="align-self-end"
              >
                <div
                  className="text-end"
                  id="custom-control2"
                >
                  <button
                    className="btn-flush"
                    aria-label="flush"
                  >
                    <svg
                      width="20"
                      height="16"
                      viewBox="0 0 20 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18 8L2 8M2 8L8 14M2 8L8 2"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                  <button className="btn-flush" aria-label="flush">
                    <svg
                      width="20"
                      height="16"
                      viewBox="0 0 20 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 8H18M18 8L12 2M18 8L12 14"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </Col> */}
            </Row>
          </div>
          <Row className="gy-4">
            <Col
              lg={4}
              md={6}
              className="flutter-services style3 d-flex"
            >
              <div className="card w-100">
                <div className="card-body">
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <span className="number">01.</span>
                    <h3 className="title mb-0">Easy Coding</h3>
                  </div>
                  <p className="mb-0">
                    With robust & scalable features like hot reload, Flutter has
                    emerged as the developer’s absolute favourite, ensuring
                    maximum conversions.
                  </p>
                </div>
              </div>
            </Col>
            <Col
              lg={4}
              md={6}
              className="flutter-services style3 d-flex"
            >
              <div className="card w-100">
                <div className="card-body">
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <span className="number">02.</span>
                    <h3 className="title mb-0">Single Code Based</h3>
                  </div>
                  <p className="mb-0">
                    With a single code base, Flutter developers avoid writing
                    multiple codes for different platforms. Leverage Flutter’s
                    benefits for both Android and iOS.
                  </p>
                </div>
              </div>
            </Col>
            <Col
              lg={4}
              md={6}
              className="flutter-services style3 d-flex"
            >
              <div className="card w-100">
                <div className="card-body">
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <span className="number">03.</span>
                    <h3 className="title mb-0">Faster Experience for Users</h3>
                  </div>
                  <p className="mb-0">
                    With a rich set of features, Flutter allows developers to
                    deliver smoother experiences, resulting in more leads and
                    exposure.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ThreeStepsToStarts;

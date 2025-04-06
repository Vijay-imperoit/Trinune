import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { IMAGES } from "../../../utils/staticJSON";
import { tns } from "tiny-slider/src/tiny-slider";
import "tiny-slider/dist/tiny-slider.css";
import { useEffect } from "react";
import AnimatedImageWithOpacity from "../../../global/AnimatedImageWithOpacity";

const AboutKeepAppy = () => {
  useEffect(() => {
    const keepappyUserSlider = tns({
      container: ".keepappy-user-slider",
      items: 1,
      speed: 2500,
      autoplay: true,
      loop: true,
      autoplayTimeout: 3000,
      swipeAngle: false,
      autoplayButtonOutput: false,
      autoplayHoverPause: true,
      mouseDrag: true,
      controls: false,
      nav: false,
      gutter: 10,
      responsive: {
        640: {
          items: 1,
          gutter: 10,
        },
        768: {
          items: 2,
          gutter: 20,
        },
        1024: {
          items: 2.8,
          gutter: 40,
        },
      },
    });

    return () => {
      keepappyUserSlider.destroy();
    };
  }, []);
  return (
    <>
      <section className="section custom-blog-cursor">
        <Container>
          <h2 className="fs-32 fw-700 mb-3 text-center">
            About <span className="keepappy-primary-color">KeepAppy</span>
          </h2>
          <p className="fs-20 fw-400 mb-5 text-center">
            To help people suffering from mental health-related issues, KeepAppy
            focuses on promoting positivity with 10+ exclusive features
            empowering users to take control of their mental health!
          </p>
          <Row className="align-items-center">
            <Col md={5} lg={3} className="text-center">
              <AnimatedImageWithOpacity
                className="img-fluid"
                src={IMAGES.keepAppys1}
                width="390"
                height="288"
                alt="keepappy"
                loading="lazy"
              />
            </Col>
            <Col md={7} lg={9}>
              <div className="card-body">
                <h3 className="fs-26 fw-700 mb-3">
                  The motivation behind launching KeepAppy!
                </h3>
                <p className="fs-20 fw-400">
                  Aimée-Louise Carton (co-founder) herself was a victim of
                  mental health issues. On the road to recovery, she looked on
                  the App Store for assistance. But found none that could really
                  help herself as a user. A determined individual, Carton began
                  to pen her own journey with KeepAppy.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section keepappy-primary-bg text-white custom-blog-cursor">
        <Container>
          {/* <div className="text-center set-involvement-img">
              <AnimatedImageWithOpacity
                className="img-fluid"
                src={IMAGES.keepAppys2}
                width="800"
                height="760"
                alt="keepappy"
                loading="lazy"
              />
            </div> */}
          <div className="mb-4 mb-lg-5">
            <h3 className="fs-32 fw-700 mb-3">Our Involvement </h3>
            <p className="fs-20 fw-400">
              We planned a thorough strategy taking into consideration issues
              and then started with UI/UX, iOS/Android application development,
              AR rendering and app launching.
            </p>
          </div>
          <div className="testimonial-keepappy-card">
            <p className="fs-22 fw-400 mb-4">
              My experiences with Impero has been wonderful in every way. Raza
              and the team are true professionals in the way they approach every
              project. They are particularly talented at app development, UX
              design and understanding the users needs.
            </p>
            <Row className="align-items-center gx-lg-3">
              <Col sm="auto">
                <AnimatedImageWithOpacity
                  className="img-fluid"
                  src={IMAGES.avtar}
                  width="70"
                  height="70"
                  alt="avtar"
                  loading="lazy"
                />
              </Col>
              <Col>
                <h4 className="fs-18 fw-500 mb-1">Aimée-Louise Carton</h4>
                <h5 className="fs-14 fw-400 mb-0">Co-Founder, KeepAppy</h5>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <section className="section about-keepappy custom-blog-cursor">
        <Container>
          <h3 className="fs-32 fw-700 text-center mb-5">
            Achievements &{" "}
            <span className="keepappy-primary-color">Recognitions</span>
          </h3>
          <Row className="align-items-center justify-content-center gy-4 gx-lg-5">
            <Col className="col-md d-flex flex-column align-items-center justify-content-center">
              <div
                className="card card-body keepappy-primary-bg-light br-8px mb-5 ms-md-auto me-lg-5"
                style={{ width: "min(300px , 100%)" }}
              >
                <h4 className="fs-18 fw-700 mb-2">
                  Successful Kickstarter Funding
                </h4>
                <p className="fs-18 fw-400 mb-0">
                  Raised over €30,000 through Kickstarter.
                </p>
              </div>
              <div
                className="card card-body keepappy-primary-bg-light br-8px ms-lg-auto"
                style={{ width: "min(226px , 100%)" }}
              >
                <h4 className="fs-18 fw-700 mb-2">Praised for UI/UX</h4>
                <p className="fs-18 fw-400 mb-0">
                  Applauded on Twitter for outstanding design.
                </p>
              </div>
            </Col>
            <Col md="auto" className="text-center">
              <AnimatedImageWithOpacity
                className="img-fluid mb-lg-5 pb-lg-5"
                src={IMAGES.keepAppy1x}
                width="200"
                height="130"
                alt="logo"
                loading="lazy"
              />
            </Col>
            <Col className="col-md d-flex flex-column align-items-center justify-content-center">
              <div
                className="card card-body keepappy-primary-bg-light br-8px mb-5  ms-lg-5 me-lg-auto"
                style={{ width: "min(284px , 100%)" }}
              >
                <h4 className="fs-18 fw-700 mb-2">Top Startup Recognition</h4>
                <p className="fs-18 fw-400 mb-0">
                  Chosen by Amazon CTO Werner Vogels at Web Summit 2019.
                </p>
              </div>
              <div
                className="card card-body keepappy-primary-bg-light mb-8px me-lg-auto"
                style={{ width: "min(320px , 100%)" }}
              >
                <h4 className="fs-18 fw-700 mb-2">
                  Mentorship by Gates Foundation
                </h4>
                <p className="fs-18 fw-400 mb-0">
                  Adopted for mentorship by Bill Gates & Melinda Gates
                  Foundation.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section keepappy-primary-bg-light custom-blog-cursor">
        <Container>
          <div className="text-center set-involvement-img ">
            <AnimatedImageWithOpacity
              className="img-fluid"
              src={IMAGES.keepAppys2}
              width="600"
              height="500"
              alt="keepappy"
              loading="lazy"
            />
          </div>
          <h3 className="mt-4 text-center text-sm-start">
            <span className="keepappy-primary-color">KeepAppy</span> Feature’s
          </h3>
          <Row className="keepappy-view px-lg-5 gx-0">
            <Col md={6} lg={4} className="card-item">
              <div className="d-flex flex-column card-body text-center justify-content-center align-items-center bg-transparent min-h-238px px-lg-5 rounded-0 border-0">
                <AnimatedImageWithOpacity
                  className="img-fluid mb-2"
                  src={IMAGES.heartKeepappy}
                  width="48"
                  height="48"
                  alt="heart"
                  loading="lazy"
                />
                <p className="fs-22 fw-500 mb-0">
                  Weekly & Monthly Health Reports
                </p>
              </div>
            </Col>
            <Col md={6} lg={4} className="card-item">
              <div className="d-flex flex-column card-body text-center justify-content-center align-items-center bg-transparent min-h-238px px-lg-5 rounded-0 border-0">
                <AnimatedImageWithOpacity
                  className="img-fluid mb-2"
                  src={IMAGES.reportKeepappy}
                  width="48"
                  height="48"
                  alt="report"
                  loading="lazy"
                />
                <p className="fs-22 fw-500 mb-0">
                  Tailored health reports generation
                </p>
              </div>
            </Col>
            <Col md={6} lg={4} className="card-item">
              <div className="d-flex flex-column card-body text-center justify-content-center align-items-center bg-transparent min-h-238px px-lg-5 rounded-0 border-0">
                <AnimatedImageWithOpacity
                  className="img-fluid mb-2"
                  src={IMAGES.mdiView}
                  width="48"
                  height="48"
                  alt="mdi"
                  loading="lazy"
                />
                <p className="fs-22 fw-500 mb-0">
                  AR based game feature with AR digital pet.
                </p>
              </div>
            </Col>
            <Col md={6} lg={4} className="card-item">
              <div className="d-flex flex-column card-body text-center justify-content-center align-items-center bg-transparent min-h-238px px-lg-5 rounded-0 border-0">
                <AnimatedImageWithOpacity
                  className="img-fluid mb-2"
                  src={IMAGES.smileKeepappy}
                  width="48"
                  height="48"
                  alt="smile"
                  loading="lazy"
                />
                <p className="fs-22 fw-500 mb-0">Multi Featured Wellness</p>
              </div>
            </Col>
            <Col md={6} lg={4} className="card-item">
              <div className="d-flex flex-column card-body text-center justify-content-center align-items-center bg-transparent min-h-238px px-lg-5 rounded-0 border-0">
                <AnimatedImageWithOpacity
                  className="img-fluid mb-2"
                  src={IMAGES.quotation}
                  width="48"
                  height="48"
                  alt="carbon"
                  loading="lazy"
                />
                <p className="fs-22 fw-500 mb-0">Articles & Quotes</p>
              </div>
            </Col>
            <Col md={6} lg={4} className="card-item">
              <div className="d-flex flex-column card-body text-center justify-content-center align-items-center bg-transparent min-h-238px px-lg-5 rounded-0 border-top-0 border-start-0 border-bottom-0 border-end-0">
                <AnimatedImageWithOpacity
                  className="img-fluid mb-2"
                  src={IMAGES.goalKeepappy}
                  width="48"
                  height="48"
                  alt="goal"
                  loading="lazy"
                />
                <p className="fs-22 fw-500 mb-0">Positive Goal Tracking.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section custom-blog-cursor">
        <div className="container-fluid">
          <div className="title-box">
            <h2 className="title-2 text-center">
              Let’s Hear from{" "}
              <span className="keepappy-primary-color">Users</span>
            </h2>
          </div>
          <div className="keepappy-user-slider">
            <div className="slider-item">
              <div className="card card-body">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <img
                    className="img-fluid"
                    src={IMAGES.keepAppy1x}
                    width="52"
                    height="52"
                    alt="logo"
                    loading="lazy"
                  />
                  <div className="d-flex align-items-center gap-2">
                    <img
                      className="img-fluid"
                      src={IMAGES.starsKeepappy}
                      width="24"
                      height="24"
                      alt="stars"
                      loading="lazy"
                    />
                    <img
                      className="img-fluid"
                      src={IMAGES.starsKeepappy}
                      width="24"
                      height="24"
                      alt="stars"
                      loading="lazy"
                    />
                    <img
                      className="img-fluid"
                      src={IMAGES.starsKeepappy}
                      width="24"
                      height="24"
                      alt="stars"
                      loading="lazy"
                    />
                    <img
                      className="img-fluid"
                      src={IMAGES.starsKeepappy}
                      width="24"
                      height="24"
                      alt="stars"
                      loading="lazy"
                    />
                  </div>
                </div>
                <p className="fs-18 fw-400 mb-3">
                  WOW! Just opened and signed into the @KeepAppy app. Really
                  amazing and warm experience so far ... can’t wait for some
                  videos or walkthroughs to show me how to use all the different
                  features 😉 BIG WELL DONE to @aimeecarton and @WillBenSims1 👏
                </p>
                <div className="separator-line border-light-gray mb-3"></div>
                <div className="mt-auto">
                  <h4 className="fs-16 fw-500 mb-1">Andriy Babiy</h4>
                  <p className="fs-14 fw-400 mb-0">@babiy_andriy</p>
                </div>
              </div>
            </div>
            <div className="slider-item">
              <div className="card card-body">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <img
                    className="img-fluid"
                    src={IMAGES.keepAppy1x}
                    width="52"
                    height="52"
                    alt="logo"
                    loading="lazy"
                  />
                  <div className="d-flex align-items-center gap-2">
                    <img
                      className="img-fluid"
                      src={IMAGES.starsKeepappy}
                      width="24"
                      height="24"
                      alt="stars"
                      loading="lazy"
                    />
                    <img
                      className="img-fluid"
                      src={IMAGES.starsKeepappy}
                      width="24"
                      height="24"
                      alt="stars"
                      loading="lazy"
                    />
                    <img
                      className="img-fluid"
                      src={IMAGES.starsKeepappy}
                      width="24"
                      height="24"
                      alt="stars"
                      loading="lazy"
                    />
                    <img
                      className="img-fluid"
                      src={IMAGES.starsKeepappy}
                      width="24"
                      height="24"
                      alt="stars"
                      loading="lazy"
                    />
                  </div>
                </div>
                <p className="fs-18 fw-400 mb-3">
                  The @KeepAppy interface looks amazing. Can’t wait to try out
                  all the different features. Congrats on all the hard work
                  @aimeecarton and @WillBenSims1
                </p>
                <div className="separator-line border-light-gray mb-3"></div>
                <div className="mt-auto">
                  <h4 className="fs-16 fw-500 mb-1">Sean Kelley</h4>
                  <p className="fs-14 fw-400 mb-0">@seankelleyTCD</p>
                </div>
              </div>
            </div>
            <div className="slider-item">
              <div className="card card-body">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <img
                    className="img-fluid"
                    src={IMAGES.keepAppy1x}
                    width="52"
                    height="52"
                    alt="logo"
                    loading="lazy"
                  />
                  <div className="d-flex align-items-center gap-2">
                    <img
                      className="img-fluid"
                      src={IMAGES.starsKeepappy}
                      width="24"
                      height="24"
                      alt="stars"
                      loading="lazy"
                    />
                    <img
                      className="img-fluid"
                      src={IMAGES.starsKeepappy}
                      width="24"
                      height="24"
                      alt="stars"
                      loading="lazy"
                    />
                    <img
                      className="img-fluid"
                      src={IMAGES.starsKeepappy}
                      width="24"
                      height="24"
                      alt="stars"
                      loading="lazy"
                    />
                    <img
                      className="img-fluid"
                      src={IMAGES.starsKeepappy}
                      width="24"
                      height="24"
                      alt="stars"
                      loading="lazy"
                    />
                  </div>
                </div>
                <p className="fs-18 fw-400 mb-3">
                  Just downloaded the @KeepAppy app and I am blown away at both
                  its design and features. So far it has been super easy to use
                  and I can’t wait to start inputting my vitals every day! It’s
                  available on the iOS and Play store now!
                </p>
                <div className="separator-line border-light-gray mb-3"></div>
                <div className="mt-auto">
                  <h4 className="fs-16 fw-500 mb-1">Erin Kehoe</h4>
                  <p className="fs-14 fw-400 mb-0">@ErinKehoe10</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="portfolio-style3 portfolio-card section custom-blog-cursor">
        <Container className="my-5">
          <div className="title-box text-center mb-5">
            <h2 className="title-2 mb-0">Read Next</h2>
          </div>
          <Row className="align-items-center gy-4">
            <Col lg={6}>
              <div className="info-card">
                <AnimatedImageWithOpacity
                  className="logo-img img-fluid"
                  src={IMAGES.scoreBoardCardLogo1x}
                  width="88"
                  height="78"
                  alt="logo"
                  loading="lazy"
                />
                <p className="main-text">
                  A fundraising platform to help athletes plan their fundraising
                  journey in USA!
                </p>
                <a href="/scoreboard" className="btn bg-white custom-cursor">
                  Explore More
                </a>
              </div>
            </Col>
            <Col lg={6}>
              <div className="grid-scoreboard-view">
                <div className="div1 pb-0 justify-content-end">
                  <AnimatedImageWithOpacity
                    className="img-fluid"
                    src={IMAGES.scoreBoardFive1x}
                    width="500"
                    height="252"
                    alt="scoreboard"
                    loading="lazy"
                  />
                </div>
                <div className="div2 pb-0 justify-content-end">
                  <AnimatedImageWithOpacity
                    className="img-fluid"
                    src={IMAGES.scoreBoardTwo1x}
                    width="168"
                    height="216"
                    alt="scoreboard"
                    loading="lazy"
                  />
                </div>
                <div className="div3 text-start align-items-start">
                  <p className="mb-1">15,000 Campaigns</p>
                  <p className="fw-normal">Boosted fundraising successes!</p>
                </div>
                <div className="div4 text-start align-items-start">
                  <p className="mb-1">$2 Million</p>
                  <p className="fw-normal">Sales in just 6 months</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AboutKeepAppy;

import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { IMAGES } from "../../../utils/staticJSON";
import AnimatedImageWithOpacity from '../../../global/AnimatedImageWithOpacity';

const AboutSiente = () => {
  return (
    <>
      <section className="section custom-blog-cursor">
        <Container className="text-center">
          <h2 className="fs-32 mb-3">
            About <span className="siente-primary-color">Siente</span>
          </h2>
          <p className="fs-20">
            Siente is the world’s first app based on the ‘create health’
            methodology by Facilisimo Foundation. Backed by scientific research
            and evidence, it helps users embrace positive changes and improve
            mental health and well-being through effective teaching and forming
            positive habits.
          </p>
          <p className="fs-20">
            Siente has been especially useful for reducing stress, better
            acceptance, flexibility, increased empathy, improving confidence,
            improving relationships, finding your purpose, and growing focus &
            precision.
          </p>
          <p className="fs-20">
            Siente is now a top-rated app for self-guided meditation and
            psychological positivity exercises amongst Spanish speakers.
          </p>
          <div className="row mt-5">
            <div className="col-lg-12">
              <AnimatedImageWithOpacity
                className="img-fluid w-100 lazyload border-10 max-500"
                width="1230"
                height="500"
                src={IMAGES.sienteScreenShot}
                alt="siente screenshot"
              />
            </div>
            <div className="col-lg-10 mx-auto pt-5">
              <div className="text-center mb-0">
                <h2 className="fs-26 text-black">
                  About Facilisimo Foundation
                </h2>
                <p className="fs-20">
                  Facilisimo foundation, a well-known name in the Spanish
                  community, boasts a collaborative community of more than 50M
                  users,
                </p>
                <p className="fs-20">
                  Their vision is to improve society by disseminating the
                  importance of mindfulness, correct food, and adequate physical
                  activity for people’s well-being.
                </p>
                <p className="fs-20">
                  As a non-profit, all the app proceeds support other non-profit
                  institutions committed to improving society’s well-being. They
                  also support noble causes for education and cancer research.
                </p>
                <p className="fs-20">
                  Siente app’s goal is to help users to adopt good mental health
                  and well-being by using the app on a daily basis for 10
                  minutes.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section bg_color--5 custom-blog-cursor">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="text-center mb-5">
                <h2 className="fs-32 mb-3">Our Involvement</h2>
                <p>
                  Impero is fortunate to be part of this non-profit project and
                  bring positive changes in society, thereby helping the world
                  be a better place.
                </p>
                <p>
                  While designs were provided by the client, we developed native
                  mobile applications on Android and iOS platforms.
                </p>
              </div>
            </div>
            <div className="col-12 text-center">
              <AnimatedImageWithOpacity
                className="img-fluid lazyload"
                height="530"
                width="900"
                src={IMAGES.sienteFiveMobile}
                alt="siente app screenshot"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section custom-blog-cursor">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 text-center align-self-center">
              <AnimatedImageWithOpacity
                className="img-fluid lazyload"
                src={IMAGES.sienteMobile1}
                alt="siente app screenshot"
              />
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0 align-self-center">
              <div className=" align-self-start mb-3">
                <h2 className="fs-32 ps-2">App features</h2>
              </div>
              <div>
                <ul className="liststyle bullet">
                  <li>
                    Identify the user's mental well-being using the Pemberton
                    index and create a personalised plan for mindfulness
                    sessions and positive psychology exercises.
                  </li>
                  <li>Guided meditation</li>
                  <li>Mindfulness sessions</li>
                  <li>Binaural beats therapy</li>
                  <li>Positive psychology exercises</li>
                  <li>Solidarity group meditations</li>
                  <li>
                    Reminders and notifications to maintain and establish
                    personal discipline
                  </li>
                </ul>
              </div>
              <div className="pt-4 download-app">
                <h3>Download app now!</h3>
                <a
                  href="https://play.google.com/store/apps/details?id=com.facilisimo.dotmind&hl=en_IN&gl=US"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AnimatedImageWithOpacity
                    className="img-fluid lazyload mt-1"
                    width="156"
                    height="46"
                    src={IMAGES.googlePlay}
                    alt="googleplay"
                  />
                </a>
                <a
                  href="https://apps.apple.com/us/app/siente-mindfulness/id1135427078#?platform=iphone"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AnimatedImageWithOpacity
                    className="img-fluid lazyload mt-1"
                    width="156"
                    height="46"
                    src={IMAGES.appStoreDownload}
                    alt="appstore"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg_color--5 custom-blog-cursor">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div>
                <div className="mb-3">
                  <h2 className="fs-32 ps-2">
                    Achievements &<br /> recognitions
                  </h2>
                </div>
                <ul className="liststyle bullet">
                  <li>
                    Helped over 500,000 users to inculcate positive personal
                    changes.
                  </li>
                  <li>Used in the network of 250+ distributors.</li>
                  <li>
                    Partnered with Gympass to collaborate with over 50,000 Gyms
                    & Studios.
                  </li>
                  <li>
                    Partnered with Global Humanitaria, I.E.S. Joaquín Rodrigo,
                    IES Cervantes, Asociación Red Nacional Infértiles and IES
                    Río Verde for various noble causes.
                  </li>
                  <li>
                    Consistently rated 4.7+ on Apple & Android Store across 10k+
                    reviews.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 align-self-center text-center mt-4 mt-lg-0">
              <AnimatedImageWithOpacity
                className="img-fluid lazyload border-10"
                width="528"
                height="501"
                src={IMAGES.sienteSC2}
                alt="man sitting at lake"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="feddback"
        className="section bg-647dbd custom-blog-cursor"
      >
        <div className="container testimonial-siente-card">
          <p className="fs-22 mb-4">
            We have been working with Impero for more than four years now, and I
            must say they are a trusted technology partner. The project’s scope
            was changed multiple times, but dedication, quality and result were
            always great. We are very impressed with the communication and
            support at every stage.
          </p>
          <Row className="align-items-center gx-lg-3">
            <Col sm="auto">
              <AnimatedImageWithOpacity
                className="img-fluid"
                src={IMAGES.sienteCTO}
                width="70"
                height="70"
                alt="avtar"
                loading="lazy"
              />
            </Col>
            <Col>
              <h4 className="fs-18 mb-1">Roberto Calderón</h4>
              <h5 className="fs-14 mb-0">CTO, Facilisimo Interactive SL</h5>
            </Col>
          </Row>
        </div>
      </section>

      <section className="portfolio-style1 portfolio-card portfolio-nursegreen section custom-blog-cursor">
        <Container className="my-5">
          <div className="title-box text-center mb-5">
            <h2 className="title-2 mb-0">Read Next</h2>
          </div>
          <Row className="align-items-center gy-4">
            <Col lg={6}>
              <div className="info-card">
                <AnimatedImageWithOpacity
                  className="logo-img img-fluid"
                  src={IMAGES.kemasLogo}
                  width="97"
                  height="84"
                  alt="logo"
                  loading="lazy"
                />
                <p className="main-text">
                  KEMAS - Software to help the Indian army maintain inventory &
                  service logs.
                </p>
                <a
                  href="/kemas"
                  className="btn bg-white custom-cursor"
                >
                  Explore More
                </a>
              </div>
            </Col>
            <Col lg={6}>
              <div className="grid-utrade-view grid-kemas-view">
                <div className="div1">
                  <p>
                    Eliminate inefficiencies and foster partnerships that drive
                    success
                  </p>
                </div>
                <div className="div2 bg-kemas justify-content-end p-3">
                  <p>
                    The Golden Katar Regiment's KEMAS tracks and analyzes arms
                    and equipment.
                  </p>
                </div>
                <div className="div3 justify-content-between">
                  <p>Certificate of Excellence by Indian Army</p>
                  <AnimatedImageWithOpacity
                    className="img-fluid mt-3"
                    src={IMAGES.kemasAward}
                    width="176"
                    height="250"
                    alt="kemas"
                    loading="lazy"
                  />
                </div>
                <div className="div4">
                  <Row className="row-cols-2 row-cols-sm-auto justify-content-between align-items-center gy-3">
                    <Col
                      lg={4}
                      className="d-flex flex-column flex-center"
                    >
                      <p className="lh-1">12+</p>
                      <p className="fs-14 fw-normal">Battalions Uses Kemas</p>
                    </Col>
                    <Col
                      lg={4}
                      className="d-flex flex-column flex-center"
                    >
                      <p className="lh-1">75%</p>
                      <p className="fs-14 fw-normal">Increase in Efficiency</p>
                    </Col>
                    <Col
                      lg={4}
                      className="d-flex flex-column flex-center"
                    >
                      <p className="lh-1">100%</p>
                      <p className="fs-14 fw-normal">Secure and Reliable</p>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AboutSiente;

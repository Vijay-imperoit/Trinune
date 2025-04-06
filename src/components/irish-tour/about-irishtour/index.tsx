import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { IMAGES } from "../../../utils/staticJSON";
import AnimatedImageWithOpacity from '../../../global/AnimatedImageWithOpacity';

const AboutIrishTour = () => {
  return (
    <>
      <section className="section custom-blog-cursor">
        <Container className="text-center">
          <h2 className="fs-32 mb-3 text-center">
            About <span className="irish-primary-color">Irish day tours</span>
          </h2>
          <p className="fs-20 fw-400">
            Irish Day Tours is part of the EI travel group, a leading name in
            Irish Tourism. They have catered 1M tourists in the past ten years
            and have conducted over 12000-day tours.
          </p>
          <p className="fs-20 fw-400">
            To increase the engagement of global tourists and to cater to them
            in their native language, we developed a mobile application where
            tourists can see tour timelines, text, and audio information on tour
            in their native language. Tourists can also bookmark and rate their
            experience.
          </p>
          <div className="col-lg-12 mt-5">
            <AnimatedImageWithOpacity
              className="img-fluid w-100 lazyload br-10"
              width="1230"
              height="500"
              src={IMAGES.irishBus}
              alt="siente screenshot"
            />
          </div>
        </Container>
      </section>
      <section>
        <div className="ptb--80 bg_color--5 custom-blog-cursor">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <div className="text-center mb-5">
                  <h2 className="fs-32 mb-3">Our Involvement</h2>
                  <p>
                    We provided a complete, turnkey app solution. Starting from
                    the feasibility study, concept validation to UI / UX
                    Designing, Android / iOS Application Development and app
                    launch.
                  </p>
                </div>
              </div>
              <div className="col-12 text-center">
                <AnimatedImageWithOpacity
                  className="img-fluid lazyload"
                  height="530"
                  width="1046"
                  src={IMAGES.irishApp}
                  alt="Irish day tours app screenshot"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="ptb--80 bg_color--1 custom-blog-cursor">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 text-center align-self-center">
                <AnimatedImageWithOpacity
                  className="img-fluid lazyload"
                  src={IMAGES.irishTour}
                  alt="irishTour"
                />
              </div>
              <div className="col-lg-6 mt-5 mt-lg-0 align-self-center">
                <div className="align-self-start mb-3">
                  <h2 className="fs-32 ps-2">App features</h2>
                </div>
                <ul className="liststyle bullet fs-20 py-2 my-4">
                  <li className="my-2">
                    Multilingual app supporting English, French, Italian, German
                    and Spanish languages.
                  </li>
                  <li className="my-2">
                    250+ voice-over commentaries in 5 different languages to
                    regale tourists with tales and folk fares of Ireland’s most
                    iconic tourist places.
                  </li>
                  <li className="my-2">
                    Offline access to ensure users don’t miss content due to
                    spotty connection during travelling.
                  </li>
                  <li className="my-2">
                    Detailed map, travel route, and plans of over 50+ tourist
                    sites.
                  </li>
                  <li className="my-2">
                    Ability to plan a visit, post feedback, and share app
                    content.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="ptb--80 irish-primary-bg custom-blog-cursor">
          <div className="container testimonial-irish-card">
            <p className="fs-22 fw-400 mb-4">
              We worked with Impero to develop a multilingual app for our day
              tour company Irish Day Tours. The project included loads of
              information in the form of text and audio of all our tours in five
              languages. We are very impressed with the communication and
              support at every stage.
            </p>
            <Row className="align-items-center gx-lg-3">
              <Col sm="auto">
                <AnimatedImageWithOpacity
                  className="img-fluid rounded-circle"
                  src={IMAGES.irishFounder}
                  width="70"
                  height="70"
                  alt="avtar"
                  loading="lazy"
                />
              </Col>
              <Col>
                <h4 className="fs-18 fw-500 mb-1">Stephen Power</h4>
                <h5 className="fs-14 fw-400 mb-0">
                  Marketing Manager, Irish day tours
                </h5>
              </Col>
            </Row>
          </div>
        </div>
      </section>

      <section className="portfolio-style2 portfolio-card portfolio-graygallery section custom-blog-cursor">
        <Container className="my-5">
          <div className="title-box text-center mb-5">
            <h2 className="title-2 mb-0">Read Next</h2>
          </div>
          <Row className="align-items-center gy-4">
            <Col lg={6}>
              <div className="info-card">
                <AnimatedImageWithOpacity
                  className="logo-img img-fluid"
                  src={IMAGES.esptileLogo}
                  width="94"
                  height="89"
                  alt="logo"
                  loading="lazy"
                />
                <p className="main-text">
                  A 94 page catalogue turned into an app! Enables quick booking
                  of tiles.
                </p>
                <a
                  href="/esp-tiles"
                  className="btn bg-white custom-cursor"
                >
                  Explore More
                </a>
              </div>
            </Col>
            <Col lg={6}>
              <div className="grid-keepappy-view grid-esptiles-view">
                <div className="div1 justify-content-between pb-0">
                  <p>Smart Tile Ordering with Real-Time Availability</p>
                  <AnimatedImageWithOpacity
                    className="img-fluid ms-auto"
                    src={IMAGES.esptileMobile}
                    width="185"
                    height="305"
                    alt="img"
                    loading="lazy"
                  />
                </div>
                <div className="div2">
                  <p>Used in the network of 250+ distributors.</p>
                </div>
                <div className="div3 align-items-start text-start">
                  <AnimatedImageWithOpacity
                    className="img-fluid mb-2"
                    src={IMAGES.target}
                    width="32"
                    height="32"
                    alt="target"
                    loading="lazy"
                  />
                  <p>
                    Efficient, quick and real-time ordering has saved
                    innumerable staff hours for the client.
                  </p>
                </div>
                <div className="div4">
                  <AnimatedImageWithOpacity
                    className="img-fluid"
                    src={IMAGES.esptileTwoMobile}
                    width="270"
                    height="318"
                    alt="img"
                    loading="lazy"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AboutIrishTour;

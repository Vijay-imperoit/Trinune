import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { IMAGES } from "../../../utils/staticJSON";
import "tiny-slider/dist/tiny-slider.css";
import AnimatedImageWithOpacity from '../../../global/AnimatedImageWithOpacity';

const AboutScoreBoard = () => {
  return (
    <>
      <section className="section about-scoreboard custom-blog-cursor">
        <Container>
          <h2 className="fs-32 fw-700 mb-3 text-center">
            About <span className="scoreboard-primary-color">ScoreBoard</span>
          </h2>
          <p className="fs-20 fw-400 text-center">
            An app that is specially developed to assist fundraisers. With
            Scoreboard FR, the athletes can effortlessly keep a clear record of
            the sales, statistics, verify sales and much more. Also, the
            Scoreboard app is an easy way out to convert manual work into an
            automated process.
          </p>
          <p className="fs-20 fw-400 mb-5 text-center">
            Furthermore, the Scoreboard app also allows athletes to sell their
            products online to prospective customers living miles away. The app
            also allows coaches of the athletes who don’t have a smartphone to
            record the sales.
          </p>
          <Row className="align-items-center">
            <Col
              lg={4}
              className="text-center"
            >
              <AnimatedImageWithOpacity
                className="img-fluid"
                src={IMAGES.scoreBoard4}
                width="390"
                height="288"
                alt="scoreboard"
                loading="lazy"
              />
            </Col>
            <Col lg={8}>
              <div className="card-body">
                <h3 className="fs-26 fw-700 mb-3">
                  The motivation behind launching Scoreboard FR!
                </h3>
                <p className="fs-20 fw-400">
                  Athletes were facing a lot of difficulties in calculating the
                  sales and keeping track of the Sales. Paul Osborne, the
                  founder of Scoreboard, wanted an app that could make the work
                  free of chaos.
                </p>
                <p className="fs-20 fw-400">
                  With combined efforts, we developed an app that could hit the
                  right direction and make the whole process of fundraising an
                  uncomplicated experience.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section scoreboard-primary-bg text-white custom-blog-cursor">
        <Container>
          <div className="text-center set-involvement-img">
            <AnimatedImageWithOpacity
              className="img-fluid"
              src={IMAGES.scoreBoard2}
              width="800"
              height="760"
              alt="scoreboard"
              loading="lazy"
            />
          </div>
          <div className="my-4">
            <h3 className="fs-32 fw-700 mb-3">Our Involvement </h3>
            <p className="fs-20 fw-400">
              We developed a systematic process that could support the athletes.
              Easy registration process followed by leaderboard, we developed
              Scoreboard to make the whole experience of fundraising an
              automated, userfriendly one.
            </p>
          </div>
          <div className="testimonial-scoreboard-card">
            <p className="fs-22 fw-400 mb-4">
              Impero responds to requests quickly, which is crucial when the app
              needs to be shown at events. In general, the team delivers
              satisfactory results within the timeline. Also, they’ve been
              really responsive, especially when I let them know there is a
              high-priority fix.
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
                <h4 className="fs-18 fw-500 mb-1">Paul Osborne</h4>
                <h5 className="fs-14 fw-400 mb-0">Founder, O2 Holdings Inc</h5>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <section className="my-5 pb-0 custom-blog-cursor">
        <Container className="">
          <h3 className="fs-32 fw-700 text-center mb-5">
            Achievements &{' '}
            <span className="scoreboard-primary-color">Recognitions</span>
          </h3>
          <Row className="align-items-center justify-content-center gy-4 gx-lg-5">
            <Col className="col-md d-flex flex-column align-items-center justify-content-center">
              <div
                className="card card-body scoreboard-primary-bg-light br-8px mb-5 ms-md-auto me-lg-5"
                style={{ width: 'min(300px , 100%)' }}
              >
                <h4 className="fs-18 fw-700 mb-2">
                  1-Step Registration Process
                </h4>
                <p className="fs-18 fw-400 mb-0">
                  Seamless onboarding for fundraising campaigns.
                </p>
              </div>
              <div
                className="card card-body scoreboard-primary-bg-light br-8px ms-lg-auto"
                style={{ width: 'min(226px , 100%)' }}
              >
                <h4 className="fs-18 fw-700 mb-2">
                  Trusted by 15,000+ Campaigns
                </h4>
                <p className="fs-18 fw-400 mb-0">
                  Empowered over 15,000 fundraising campaigns successfully.
                </p>
              </div>
            </Col>
            <Col
              md="auto"
              className="text-center"
            >
              <AnimatedImageWithOpacity
                className="img-fluid mb-lg-5 pb-lg-5"
                src={IMAGES.scoreBoardCardLogo1x}
                width="200"
                height="130"
                alt="logo"
                loading="lazy"
              />
            </Col>
            <Col className="col-md d-flex flex-column align-items-center justify-content-center">
              <div
                className="card card-body scoreboard-primary-bg-light br-8px mb-5 ms-lg-5 me-lg-auto"
                style={{ width: 'min(284px , 100%)' }}
              >
                <h4 className="fs-18 fw-700 mb-2">Athlete Dashboard Access</h4>
                <p className="fs-18 fw-400 mb-0">
                  Monitor total sales achieved by athletes in real time.
                </p>
              </div>
              <div
                className="card card-body scoreboard-primary-bg-light mb-8px me-lg-auto"
                style={{ width: 'min(320px , 100%)' }}
              >
                <h4 className="fs-18 fw-700 mb-2">
                  Effortless Data Management
                </h4>
                <p className="fs-18 fw-400 mb-0">
                  Easily save and retrieve past campaign data.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="scoreboard-primary-bg-light py-5 custom-blog-cursor">
        <Container>
          <div className="row gy-4">
            <div className="col-lg-7 align-self-center">
              <div className="text-center">
                <AnimatedImageWithOpacity
                  className="img-fluid"
                  src={IMAGES.scoreBoard3}
                  width="300"
                  height="300"
                  alt="scoreboard"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="col-lg-5 align-self-center">
              <div className=" align-self-start mb-3">
                <h2 className="fs-32 text-start">Scoreboard features</h2>
              </div>
              <div>
                <ul className="liststyle bullet fs-20 my-2">
                  <li className="my-2">Registration for fundraising campaigns.</li>
                  <li className="my-2">
                  Secure & free - Available 24/7
                  </li>
                  <li className="my-2">View total sales by athletes</li>
                  <li className="my-2">User-friendly log in</li>
                  <li className="my-2">Compare scores/sales between athletes</li>
                  <li className="my-2">Record the list of fundraisers</li>
                  <li className="my-2">Track products to be sold</li>
                  <li className="my-2">Save past data</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="portfolio-style2 portfolio-card section portfolio-bluelilac custom-blog-cursor">
        <Container className="my-5">
          <div className="title-box text-center mb-5">
            <h2 className="title-2 mb-0">Read Next</h2>
          </div>
          <Row className="align-items-center gy-4">
            <Col lg={6}>
              <div className="info-card">
                <AnimatedImageWithOpacity
                  className="logo-img img-fluid"
                  src={IMAGES.druidLearningLogo}
                  width="254"
                  height="65"
                  alt="logo"
                  loading="lazy"
                />
                <p className="main-text">
                  AI-Powered Tool for Effective Content Management and
                  Distribution
                </p>
                <a
                  href="/druidlearning"
                  className="btn bg-white custom-cursor"
                >
                  Explore More
                </a>
              </div>
            </Col>
            <Col lg={6}>
              <div className="grid-keepappy-view grid-druidlearning-view">
                <div className="div1 justify-content-between pb-0">
                  <p>Listed in “Top 100 Most Ambitious Companies in Ireland</p>
                  <AnimatedImageWithOpacity
                    className="img-fluid ms-auto"
                    src={IMAGES.druidLearningMobile}
                    width="220"
                    height="300"
                    alt="img"
                    loading="lazy"
                  />
                </div>
                <div className="div2">
                  <p>
                    Secured a place in the finals of the “National Startup
                    Awards”
                  </p>
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
                    Druid Learning was one of 6 to receive full STADIEM funding.
                  </p>
                </div>
                <div className="div4 pb-0 justify-content-end">
                  <AnimatedImageWithOpacity
                    className="img-fluid"
                    src={IMAGES.druidLearningTwoMobile}
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

export default AboutScoreBoard;

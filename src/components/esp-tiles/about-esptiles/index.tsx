import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { IMAGES } from "../../../utils/staticJSON";
import AnimatedImageWithOpacity from '../../../global/AnimatedImageWithOpacity';

const AboutESPTiles = () => {
  return (
    <>
      <section className="section custom-blog-cursor">
        <Container className="text-center">
          <h2 className="fs-32 mb-3">
            About <span className="esptiles-primary-color">ESP Tiles</span>
          </h2>
          <p className="fs-20">
            ESP Tiles Limited is a Tiles manufacturer based in Portlaoise,
            Ireland. They were traditionally distributing the paper-based
            catalogue until 2018, when we replaced it with a mobile app. Using
            mobile application distributors can instantly search, browse, filter
            and view various Tiles and order them directly from the app.
          </p>
          <p className="fs-20">
            One of the best benefits of the app is to show real-time tiles’
            real-time availability, through which distributors can instantly
            confirm the order with their customers. The app is integrated with
            the existing CRM system at ESP Tiles to enable a smooth flow of
            information to and from the application.
          </p>

          <div className="row mt-5">
            <div className="col-lg-12">
              <AnimatedImageWithOpacity
                className="img-fluid w-100 lazyload br-10"
                width="1230"
                height="500"
                src={IMAGES.espAbout}
                alt="siente screenshot"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="section bg_color--5 custom-blog-cursor">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="mb-5 text-center">
                <h2 className="mb-3 fs-32">Our Involvement</h2>
                <p className="fs-20">
                  We provided a complete, turnkey app solution. Starting from
                  the feasibility study, concept validation to UI / UX
                  Designing, Android/iOS Application Development, data feeding,
                  and app launch.
                </p>
              </div>
            </div>
            <div className="col-12 text-center">
              <AnimatedImageWithOpacity
                className="img-fluid lazyload"
                height="530"
                width="900"
                src={IMAGES.espM5}
                alt="siente app screenshot"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section custom-blog-cursor">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <iframe
                id="defframe"
                src="https://marvelapp.com/cbdb6jg?emb=1&iosapp=false&frameless=false"
                width="100%"
                height="500"
                allowTransparency={true}
                style={{ textAlign: 'center', verticalAlign: 'middle' }}
              />
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0 ">
              <div className=" align-self-start mb-3">
                <h2 className="fs-32 ps-2">App features</h2>
              </div>
              <div>
                <ul className="liststyle bullet">
                  <li>Search and Filter from thousands of different tiles.</li>
                  <li>Smart tiles suggestions.</li>
                  <li>View, search, mark as favourite.</li>
                  <li>
                    Suggested calculations for tiles requirements based on tiles
                    dimensions and room size.
                  </li>
                  <li>
                    Check availability and place an order with the manufacturer.
                  </li>
                </ul>
              </div>
              <div className="pt-5 download-app">
                <h3>Download app now!</h3>
                <a
                  href="https://play.google.com/store/apps/details?id=com.esptiles&hl=en_IN&gl=US"
                  target="_blank"
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
                  href="https://apps.apple.com/ie/app/esp-tiles/id1456755457"
                  target="_blank"
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
                  <h2 className="fs-32">
                    Achievements &<br />
                    recognitions
                  </h2>
                </div>
                <ul className="liststyle bullet">
                  <li>
                    Efficient, quick and real-time ordering has saved
                    innumerable staff hours for the client.
                  </li>
                  <li>Used in the network of 250+ distributors.</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 align-self-center text-center mt-4 mt-lg-0">
              <AnimatedImageWithOpacity
                className="img-fluid lazyload border-10"
                width="528"
                height="501"
                src={IMAGES.espAchivement}
                alt="man sitting at lake"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="feddback"
        className="section esptiles-primary-bg custom-blog-cursor-white"
      >
        <div className="container testimonial-esptiles-card">
          <p className="fs-22 fw-400 mb-4">
            Impero helped us achieve our goal of providing tiles information &
            availability instantly to our distributors. We are very impressed by
            how attentive and efficient they were to answer any queries! Our
            distributors and we are delighted with the outcome!
          </p>
          <Row className="align-items-center gx-lg-3">
            <Col sm="auto">
              <AnimatedImageWithOpacity
                className="img-fluid rounded-circle"
                src={IMAGES.espManager}
                width="70"
                height="70"
                alt="avtar"
                loading="lazy"
              />
            </Col>
            <Col>
              <h4 className="fs-18 mb-1">Leigh Anne</h4>
              <h5 className="fs-14 mb-0">Manager, ESP Tiles</h5>
            </Col>
          </Row>
        </div>
      </section>

      <section className="portfolio-style3 portfolio-card portfolio-bluecatskill section custom-blog-cursor">
        <Container className="my-5">
          <div className="title-box text-center mb-5">
            <h2 className="title-2 mb-0">Read Next</h2>
          </div>
          <Row className="align-items-center gy-4">
            <Col lg={6}>
              <div className="info-card">
                <AnimatedImageWithOpacity
                  className="logo-img img-fluid"
                  src={IMAGES.sienteLogo}
                  width="170"
                  height="70"
                  alt="logo"
                  loading="lazy"
                />
                <p className="main-text">
                  Improving the well-being of 500,000 users through guided
                  meditation.
                </p>
                <a
                  href="/siente"
                  className="btn bg-white custom-cursor"
                >
                  Explore More
                </a>
              </div>
            </Col>
            <Col lg={6}>
              <div className="grid-scoreboard-view grid-siente-view">
                <div className="div1 pb-0 justify-content-end">
                  <AnimatedImageWithOpacity
                    className="img-fluid"
                    src={IMAGES.sienteM5}
                    width="504"
                    height="308"
                    alt="scoreboard"
                    loading="lazy"
                  />
                </div>
                <div className="div2 pb-0 justify-content-end">
                  <AnimatedImageWithOpacity
                    className="img-fluid  w-100"
                    src={IMAGES.sienteTwoMobile}
                    width="116"
                    height="231"
                    alt="siente"
                    loading="lazy"
                  />
                </div>
                <div className="div3 text-start align-items-start py-3 px-3">
                  <p className="fw-500">Extensive Reach & Partnerships</p>
                  <p className="fw-normal">
                    Helped 250+ Distributor & 50k Gyms and Studios
                  </p>
                </div>
                <div className="div4 text-start align-items-start py-3 px-3">
                  <p className="fw-500">High Ratings and Noble Causes</p>
                  <p className="fw-normal">
                    Consistent Rating of 4.7+ & ties with Global Humanitarian
                    Org.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AboutESPTiles;

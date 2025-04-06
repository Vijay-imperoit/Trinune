import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { IMAGES } from "../../../utils/staticJSON";
import AnimatedImageWithOpacity from '../../../global/AnimatedImageWithOpacity';

const AboutITCarlow = () => {
  return (
    <>
      <section className="section about-siente custom-blog-cursor">
        <Container className="text-center">
          <h2 className="mb-3 fs-32">
            About{' '}
            <span className="itcarlow-primary-color">
              IT Carlow Student Info 101 App
            </span>
          </h2>
          <p className="fs-20">
            To assist thousands of students returning to the Carlow Wexford
            Campus, IT Carlow ruled out an app to reduce contact in
            unprecedented times. With the IT Carlow Info app, the students can
            easily access information about their college life without any
            difficulty.
          </p>
          <p className="fs-20 ">
            Regarded as a great resource, the app holds all the details of a
            student of the Carlow campus. In addition, with the app students can
            also download student forms & timetables.
          </p>

          <div className="row mt-5">
            <div className="col-lg-12">
              <AnimatedImageWithOpacity
                className="img-fluid w-100 lazyload border-10 max-500"
                width="1230"
                height="500"
                src={IMAGES.ITCarlowSC}
                alt="siente screenshot"
              />
            </div>
            <div className="col-lg-10 mx-auto pt-5">
              <div className="text-center mb-0">
                <h2 className="fs-26 text-black">About-IT Carlow</h2>
                <p className="fs-20">
                  Institute of Technology Carlow is one of the leading
                  technology college in Ireland. It offers full time & part time
                  courses, with campuses in Carlow, Wexford & Wicklow.
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
                <p className="fs-20">
                  We developed a cloud-based app for all the information about
                  the IT Carlow, Wexford campus. We started with creating a
                  user-friendly UI/UX design, and then the development of an
                  iOS/Android application was carried out.
                </p>
              </div>
            </div>
            <div className="col-12 text-center">
              <AnimatedImageWithOpacity
                className="img-fluid lazyload"
                height="530"
                width="900"
                src={IMAGES.ITCarlowM5}
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
                src="https://marvelapp.com/65gegc2?emb=1&iosapp=false&frameless=false"
                width="100%"
                height="500"
                allowTransparency={true}
                style={{ textAlign: 'center', verticalAlign: 'middle' }}
              />
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0 align-self-center">
              <div className=" align-self-start mb-3">
                <h2 className="fw-bold ps-2 text-191a4e">App features</h2>
              </div>
              <div>
                <ul className="liststyle bullet">
                  <li>In-app notifications</li>
                  <li>FAQ based app to solve students’ query.</li>
                  <li>Comprehensive guide</li>
                  <li>Cloud-based information</li>
                  <li>Access to thousands of answers at your fingertips.</li>
                  <li>All website links & PDFs in one app.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="feddback"
        className="section bg-19509c custom-blog-cursor"
      >
        <div className="container testimonial-itcarlow-card">
          <p className="fs-22 fw-400 mb-4">
            We are very impressed by the way the Students information app has
            turned out to be. The app was developed keeping in mind as an
            excellent resource for students as they start with a new academic
            year in unprecedented times. We must say that Impero has done a
            fantastic job; our students can totally rely upon the app for a
            substantial experience.
          </p>
          <Row className="align-items-center gx-lg-3">
            <Col sm="auto">
              <AnimatedImageWithOpacity
                className="img-fluid rounded-circle"
                src={IMAGES.ITCarlowVP}
                width="70"
                height="70"
                alt="avtar"
                loading="lazy"
              />
            </Col>
            <Col>
              <h4 className="fs-18 fw-500 mb-1">Declan Doyle</h4>
              <h5 className="fs-14 fw-400 mb-0">
                Vice president for Development and Research, Institute of
                Technology Carlow.
              </h5>
            </Col>
          </Row>
        </div>
      </section>

      <section className="portfolio-style2 portfolio-card portfolio-ottomangreen section custom-blog-cursor">
        <Container className="my-5">
          <div className="title-box text-center mb-5">
            <h2 className="title-2 mb-0">Read Next</h2>
          </div>
          <Row className="align-items-center gy-4">
            <Col lg={6}>
              <div className="info-card">
                <AnimatedImageWithOpacity
                  className="logo-img img-fluid"
                  src={IMAGES.ethicartLogo}
                  width="74"
                  height="87"
                  alt="logo"
                  loading="lazy"
                />
                <p className="main-text">
                  Ethicart! A complete solution to practice ethical purchasing!
                </p>
                <a
                  href="/ethicart"
                  className="btn bg-white custom-cursor"
                >
                  Explore More
                </a>
              </div>
            </Col>
            <Col lg={6}>
              <div className="grid-keepappy-view grid-ethicart-view">
                <div className="div1 justify-content-between pb-0">
                  <p>
                    Your Guide to
                    <br /> Sustainable Living
                  </p>
                  <AnimatedImageWithOpacity
                    className="img-fluid ms-auto"
                    src={IMAGES.ethicartMobile}
                    width="185"
                    height="305"
                    alt="img"
                    loading="lazy"
                  />
                </div>
                <div className="div2">
                  <p>
                    Ireland Rising Business Star at Web Summit 2020, praised for
                    UX, and partnered with UPS at Trinity College.
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
                    Featured in The Irish Times and Responsible Innovation
                    Summit, with 5-star ratings on both app stores.
                  </p>
                </div>
                <div className="div4">
                  <AnimatedImageWithOpacity
                    className="img-fluid"
                    src={IMAGES.ethicartTwoMobile}
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

export default AboutITCarlow;

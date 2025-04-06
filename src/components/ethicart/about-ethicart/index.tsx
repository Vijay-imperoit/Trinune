import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { IMAGES } from "../../../utils/staticJSON";
import AnimatedImageWithOpacity from '../../../global/AnimatedImageWithOpacity';

const AboutEthiCart = () => {
  return (
    <>
      <section className="section about-ethicart custom-blog-cursor">
        <Container className="text-center">
          <h2 className="mb-3 fs-32">
            About <span className="ethicart-primary-color">Ethicart</span>
          </h2>
          <p className="fs-20">
            Ethicart is a user-friendly app to lead consumers towards a more
            eco-friendly way of buying products. The easy-to-use ‘Scan & Know’
            feature helps users shop food products that are sustainable and on
            par with ethical standards.
          </p>
          <p className="fs-20">
            Ethicart enables you to become conscious consumers by shopping
            products that align with your values. On top of that, Ethicart
            suggests sustainable alternatives to ease you in switching over to
            more sustainable products.
          </p>

          <p className="fs-20">
            Besides, Ethicart is also a great guide to students of Trinity
            College, Dublin, to live a lifestyle that is high in sustainability.
          </p>

          <div className="row mt-5">
            <div className="col-lg-12">
              <AnimatedImageWithOpacity
                className="img-fluid w-100 lazyload br-10"
                width="1230"
                height="500"
                src={IMAGES.ethicart1}
                alt="siente screenshot"
              />
            </div>
            <div className="col-lg-10 mx-auto pt-5">
              <div className="text-center mb-0">
                <h2 className="fs-26">
                  The motivation behind launching Ethicart!
                </h2>
                <p className="fs-20">
                  Lara Páirceir & Laura Brennan (co-founders) observed that
                  people want to buy products with sustainability quotients. But
                  the lack of transparent information disconnects them from
                  buying what they want and what they actually buy.
                </p>
                <p className="fs-20">
                  Passionate about the environment and reducing adverse effects,
                  Lara & Laura set out on their journey with Ethicart. They
                  wanted an easy & convenient solution which could save people’s
                  time & provide information quickly. With Ethicart, ‘Scan &
                  Shop’ feature, it becomes easy for customers to become
                  conscious consumers.
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
                  We at Impero are very proud to be associated with Ethicart
                  that empowers users to incorporate sustainability in everyday
                  life. Clients Lara & Laura shared their vision, and we
                  developed a total turnkey native app solution for the iOS &
                  Android platform.
                </p>
              </div>
            </div>
            <div className="col-12 text-center">
              <AnimatedImageWithOpacity
                className="img-fluid lazyload"
                height="530"
                width="900"
                src={IMAGES.ethicartM5}
                alt="siente app screenshot"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section custom-blog-cursor custom-blog-cursor">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <iframe
                id="defframe"
                src="https://marvelapp.com/115c71d4?emb=1&iosapp=false&frameless=false"
                width="100%"
                height="500"
                allowTransparency={true}
                style={{ textAlign: 'center', verticalAlign: 'middle' }}
              />
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0 align-self-center">
              <div className=" align-self-start mb-3">
                <h2 className="fs-32 ps-2">App features</h2>
              </div>
              <div>
                <ul className="liststyle bullet">
                  <li>Fully functional mobile app.</li>
                  <li>Easy to use dashboard</li>
                  <li>Search or Scan to get information of a product</li>
                  <li>Discover more sustainable alternatives</li>
                  <li>
                    Breakdown of products based on sustainability criteria.
                  </li>
                  <li>User friendly UI</li>
                  <li>
                    Locate sustainable products on the campus (Trinity College
                    of Dublin)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg_color--5 custom-blog-cursor">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-start">
              <div>
                <div className="mb-3">
                  <h2 className="fs-32 ps-2">
                    Achievements &<br />
                    recognitions
                  </h2>
                </div>
                <ul className="liststyle bullet">
                  <li>Featured in ‘The Irish Times’.</li>
                  <li>Featured on ‘Responsible Innovation Summit’.</li>
                  <li>
                    Received a lot of positive feedback about the app's
                    interface & user experience (UX).
                  </li>
                  <li>
                    Recognised as Ireland Rising Business Star at the
                    International Web Summit 2020.
                  </li>
                  <li>5-star ratings on both App Store & Google Playstore.</li>
                  <li>
                    Partnered with UPS at Trinity college to educate and raise
                    awareness for sustainable solutions.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 align-self-center text-center mt-4 mt-lg-0">
              <AnimatedImageWithOpacity
                className="img-fluid lazyload border-10"
                width="528"
                height="501"
                src={IMAGES.ethicart2}
                alt="man sitting at lake"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="feddback custom-blog-cursor">
        <div className="ptb--80 ethicart-primary-bg custom-blog-cursor">
          <div className="container testimonial-ethicart-card">
            <p className="fs-22 fw-400 mb-4">
              We chose to work with Impero, as they really understood our vision
              as a social enterprise from the very beginning. We know they
              always go the extra mile, and we really do have a lot of trust in
              them. Raza and the team really met our expectations. They always
              offer a professional & personal service. They have made the whole
              experience of app development very approachable.
            </p>
            <Row className="align-items-center gx-lg-3">
              <Col sm="auto">
                <AnimatedImageWithOpacity
                  className="img-fluid rounded-circle"
                  src={IMAGES.ethicart3}
                  width="70"
                  height="70"
                  alt="avtar"
                  loading="lazy"
                />
              </Col>
              <Col>
                <h4 className="fs-18 fw-500 mb-1">
                  Lara Páirceir & Laura Brennan
                </h4>
                <h5 className="fs-14 fw-400 mb-0">Co-founders, Ethicart</h5>
              </Col>
            </Row>
          </div>
        </div>
      </section>

      <section className="portfolio-style3 portfolio-card portfolio-blueathens section custom-blog-cursor">
        <Container className="my-5">
          <div className="title-box text-center mb-5">
            <h2 className="title-2 mb-0">Read Next</h2>
          </div>
          <Row className="align-items-center gy-4">
            <Col lg={6}>
              <div className="info-card">
                <AnimatedImageWithOpacity
                  className="logo-img img-fluid"
                  src={IMAGES.irishLogo}
                  width="202"
                  height="80"
                  alt="logo"
                  loading="lazy"
                />
                <p className="main-text">
                  An interactive multi-lingual tour guide app for tourists who
                  are visiting Ireland!
                </p>
                <a
                  href="/irish-tour"
                  className="btn bg-white custom-cursor"
                >
                  Explore More
                </a>
              </div>
            </Col>
            <Col lg={6}>
              <div className="grid-scoreboard-view grid-irish-view">
                <div className="div1 pb-0 justify-content-end">
                  <AnimatedImageWithOpacity
                    className="img-fluid"
                    src={IMAGES.irishM5}
                    width="504"
                    height="308"
                    alt="scoreboard"
                    loading="lazy"
                  />
                </div>
                <div className="div2 bg-irish pb-0 justify-content-end">
                  <AnimatedImageWithOpacity
                    className="img-fluid"
                    src={IMAGES.irishMobile}
                    width="116"
                    height="231"
                    alt="irish"
                    loading="lazy"
                  />
                </div>
                <div className="div3 text-start align-items-start">
                  <p className="fw-normal">
                    Multilingual and Offline Access Supports English, French,
                    Italian, German,Spanish & Many more
                  </p>
                </div>
                <div className="div4 text-start align-items-start">
                  <p className="fw-normal">
                    Offers 250+ voice-over commentaries, & Comprehensive
                    Features
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

export default AboutEthiCart;

import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { IMAGES } from "../../../utils/staticJSON";
import "tiny-slider/dist/tiny-slider.css";
import { useEffect } from "react";
import { tns } from "tiny-slider";
import AnimatedImageWithOpacity from "../../../global/AnimatedImageWithOpacity";

const AboutUtrade = () => {
  useEffect(() => {
    const slider1 = tns({
      container: ".my-slider-utrade",
      loop: true,
      items: 1,
      speed: 3000,
      nonce: "1",
      autoplay: true,
      autoplayHoverPause: false,
      mouseDrag: true,
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
          items: 4.5,
          gutter: 15,
        },
        1024: {
          items: 4.5,
          gutter: 20,
        },
      },
    });

    return () => {
      slider1.destroy();
    };
  }, []);

  return (
    <>
      <section className="section custom-blog-cursor">
        <Container className="text-center">
          <h2 className="fs-32 fw-700 mb-3 text-center">
            About <span className="utrade-primary-color">Utrade</span>
          </h2>
          <p className="fs-20 fw-400">
            U-Trade is a robust, scalable, and user-friendly B2B commerce
            platform, meticulously engineered to revolutionise the supply chain
            for suppliers, including importers and manufacturers. This platform
            establishes a direct and efficient connection between suppliers and
            retailers by eliminating 6-7 intermediaries.
          </p>
          <p className="fs-20 fw-400 mb-5">
            Featuring over <strong>800+ screens</strong>, the platform offers
            suppliers a place to showcase and promote their diverse range of
            products. Simultaneously, the platform equips retailers with the
            ability to explore, select, and procure these products directly.
            Moreover, the interface integrates consumer-centric elements,
            simplifying the procurement experience for retailers significantly.
          </p>
        </Container>
      </section>
      <section>
        <Container>
          <Row className="align-items-center custom-blog-cursor">
            <Col md={6} lg={6}>
              <h3 className="fw-bold mb-4">Vision behind U-Trade</h3>
              <p className="fs-20 fw-400">
                The genesis of U-Trade stemmed from the challenges encountered
                within a manual framework. The daily process of manually
                planning product deliveries from warehouses to buyers, a long
                three-hour process to generate delivery plans for 25 trucks
                navigating diverse routes, and delays in goods loading often
                plagued the entire delivery schedule. Such delays led to many
                issues disturbing operational efficiency.
              </p>
              <p className="fs-20 fw-400">
                Furthermore, the conventional inventory management approach,
                involving manual product counting at warehouses every month,
                highlighted an additional area for improvement. Plus, the
                longstanding B2B commerce supply chain, laden with
                intermediaries, consistently resulted in inflated prices for
                retailers, impacting both ends of the business spectrum. Driven
                by these identified inefficiencies, the U-Trade team decided to
                disrupt this established paradigm.
              </p>
            </Col>
            <Col md={6} lg={6} className="text-center">
              <AnimatedImageWithOpacity
                className="img-fluid fit-img"
                src={IMAGES.utrade1}
                width="490"
                height="488"
                alt="utrade"
                loading="lazy"
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="my-4 custom-blog-cursor">
        <Container>
          <h2 className="fw-bold my-4 p-4 text-center">
            Design and development of{" "}
            <span className="utrade-primary-color">Utrade</span> platforms
          </h2>
          <Row className="align-items-stretch mb-4">
            <Col lg={6} className="align-self-center">
              <h3 className="fs-26 fw-700 mb-3">
                Conceptualisation and initial design
              </h3>
              <p className="fs-20 fw-400">
                The journey of U-Trade began with meticulous market research,
                aiming to identify prevalent challenges and inefficiencies
                within the traditional B2B supply chain.
              </p>
              <p className="fs-20 fw-400">
                This extensive research phase led to the formulation of a
                comprehensive roadmap that delineated strategies to address
                identified pain points. Finally, we designed the various
                interfaces keeping usability in mind.
              </p>
            </Col>
            <Col lg={6} className="order-lg-first">
              <AnimatedImageWithOpacity
                className="img-fluid fit-img"
                src={IMAGES.utrade2}
                width="290"
                height="188"
                alt="utrade"
                loading="lazy"
              />
            </Col>
          </Row>
          <Row className="align-items-stretch mb-4">
            <Col md={6} lg={6} className="align-self-center">
              <h3 className="fs-26 fw-700 mb-3">
                Development of platforms and interfaces
              </h3>
              <p className="fs-20 fw-400">
                Our focus diverged from the traditional B2B interface, steering
                towards a more consumer-centric approach akin to B2C models. We
                integrated features such as carts, favourites, in-app
                notifications, refunds, and order tracking.
              </p>
              <p className="fs-20 fw-400">
                These consumer-friendly elements streamlined the B2B buying
                experience significantly, resonating with retailers accustomed
                to user-centric platforms.
              </p>
            </Col>
            <Col md={6} lg={6}>
              <AnimatedImageWithOpacity
                className="img-fluid fit-img"
                src={IMAGES.utrade3}
                width="390"
                height="288"
                alt="utrade"
                loading="lazy"
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="utrade-primary-bg-light pt-4 custom-blog-cursor">
        <Container>
          <h2 className="fs-32 fw-700 mb-3 text-center fw-bold">
            Incredible features for an incredible platform!
          </h2>
          <Row className="d-flex align-items-center justify-content-center">
            <Col md={6} lg={6} className="my-4">
              <div className="card-body-plt">
                <h3 className="fs-26 fw-700 text-center">
                  Multifaceted user experience
                </h3>
                <span className="fs-20 fw-400 text-center">
                  U-Trade accommodates various user types—Suppliers, Retailers,
                  Admin, Sales Managers, Customer Service, Fulfillment Team, and
                  Finance—providing a seamless and tailored experience across
                  different roles.
                </span>
              </div>
            </Col>

            <Col md={6} lg={6} className="my-4">
              <div className="card-body-plt">
                <h3 className="fs-26 fw-700 text-center">
                  Inventory and warehouse management
                </h3>
                <p className="fs-20 fw-400 text-center">
                  The platform efficiently manages inventory operations,
                  including stock tracking, handling damaged products, managing
                  returns, and automating warehouse tasks, streamlining
                  logistics.
                </p>
              </div>
            </Col>

            <Col md={6} lg={6} className="my-4">
              <div className="card-body-plt">
                <h3 className="fs-26 fw-700 mb-3 text-center">
                  Financial transaction tracking
                </h3>
                <p className="fs-20 fw-400 text-center">
                  U-Trade meticulously tracks financial transactions, such as
                  payments from B2B customers and delivery-related expenses,
                  ensuring transparent and accountable financial records.
                </p>
              </div>
            </Col>

            <Col md={6} lg={6} className="my-4">
              <div className="card-body-plt">
                <h3 className="fs-26 fw-700 mb-3 text-center">
                  Data-driven decision making
                </h3>
                <p className="fs-20 fw-400 text-center">
                  The platform generates insightful reports supporting
                  decision-making for Admin, Sales Managers, and Finance,
                  extracting actionable data from the system for informed
                  choices.
                </p>
              </div>
            </Col>

            <Col md={6} lg={6} className="my-4">
              <div className="card-body-plt">
                <h3 className="fs-26 fw-700 mb-3 text-center">
                  Automated workflows
                </h3>
                <p className="fs-20 fw-400 text-center">
                  U-Trade incorporates automated processes that align with user
                  roles, automating tasks like order processing, payment
                  tracking, and inventory updates, reducing manual work.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="mt-4 custom-blog-cursor">
        <div className="ptb--80 utrade-primary-bg">
          <div className="container testimonial-utrade-card  text-white">
            <p className="fs-22 fw-400 mb-4">
              A big shoutout to them for their exceptional software development
              services. From ideation to deployment, their relentless commitment
              to quality and detail made the whole experience delightful. Thanks
              to them, our business is now more competitive than ever!
            </p>
            <Row className="align-items-center gx-lg-3">
              <Col sm="auto">
                <AnimatedImageWithOpacity
                  className="img-fluid"
                  src={IMAGES.utrade11}
                  width="70"
                  height="70"
                  alt="avtar"
                  loading="lazy"
                />
              </Col>
              <Col>
                <h4 className="fs-18 fw-500 mb-1">Mohamed Abbas Sachedina</h4>
                <h5 className="fs-14 fw-400 mb-0">Founder of U-Trade</h5>
              </Col>
            </Row>
          </div>
        </div>
      </section>
      <section className="my-5 custom-blog-cursor">
        <Container>
          <h2 className="fs-32 fw-700 mb-3 text-center fw-bold">
            Here are a few glimpses from our visit to<br></br> their warehouse
            in East Africa!
          </h2>
          <Row className="">
            <Col
              md={6}
              lg={6}
              className="my-4 d-flex flex-row justify-content-center align-items-center"
            >
              <AnimatedImageWithOpacity
                className="img-fluid fit-img"
                src={IMAGES.utrade4}
                width="390"
                height="288"
                alt="utrade"
                loading="lazy"
              />
            </Col>
            <Col
              md={6}
              lg={6}
              className="my-4 d-flex flex-row justify-content-center align-items-center"
            >
              <AnimatedImageWithOpacity
                className="img-fluid fit-img"
                src={IMAGES.utrade5}
                width="390"
                height="288"
                alt="utrade"
                loading="lazy"
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="utrade-primary-bg py-5 custom-blog-cursor">
        <div className="row justify-content-center mb-4">
          <div className="col-md-8">
            <h2 className="fs-32 fw-700 mb-3 text-center text-white">
              Let’s take a look at how we designed their route maps and
              warehouse management interface.
            </h2>
          </div>
        </div>
        <div
          className="my-slider-utrade"
          data-config='{
            "items": 2,
            "speed": 2000,
            "autoplayTimeout": 3000,
            "responsive": {
                "640": { "items": 1, "gutter": 10 },
                "768": { "items": 4.5, "gutter": 15 },
                "1024": { "items": 4.5, "gutter": 20 }
            }
        }'
        >
          <div className="slider-item">
            <div className="card">
              <div className="card-body">
                <img
                  className="img-fluid"
                  src={IMAGES.utradeSlider1}
                  width="400"
                  height="400"
                  alt="img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="slider-item">
            <div className="card">
              <div className="card-body">
                <img
                  className="img-fluid"
                  src={IMAGES.utradeSlider2}
                  width="400"
                  height="400"
                  alt="img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="slider-item">
            <div className="card">
              <div className="card-body">
                <img
                  className="img-fluid"
                  src={IMAGES.utradeSlider3}
                  width="400"
                  height="400"
                  alt="img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="slider-item">
            <div className="card">
              <div className="card-body">
                <img
                  className="img-fluid"
                  src={IMAGES.utradeSlider4}
                  width="400"
                  height="400"
                  alt="img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="slider-item">
            <div className="card">
              <div className="card-body">
                <img
                  className="img-fluid"
                  src={IMAGES.utradeSlider5}
                  width="400"
                  height="400"
                  alt="img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="my-5 custom-blog-cursor">
        <Container>
          <div className="container">
            <div className="section-title mt-0 text-center">
              <h2 className="fs-38">A glimpse at a few more key features</h2>
            </div>
            <div className="row gy-6">
              <div className="col-md-6 d-flex my-4">
                <div className="card shadow-none br-12px w-100">
                  <div className="card-body p-lg-4">
                    <div className="row align-items-center m-4 gy-2">
                      <div className="col pr-0">
                        <AnimatedImageWithOpacity
                          src={IMAGES.utrade6}
                          className="img-fluid lazy"
                          loading="lazy"
                          width="77"
                          height="70"
                          alt="Admin panel features"
                        />
                      </div>
                      <div className="col-auto">
                        <a
                          href="https://marvelapp.com/prototype/9e96a33"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="line-button custom-cursor text-nowrap"
                        >
                          View more
                          <img
                            src={IMAGES.rightArrowUtrade}
                            className="img-fluid ms-1 lazy"
                            loading="lazy"
                            width="24"
                            height="16"
                            alt="right-arrow"
                          />
                        </a>
                      </div>
                    </div>
                    <h3 className="font--22 fw-600 mb--15 mx-4">
                      Admin panel features
                    </h3>
                    <ul className="list-unstyled fs-18 ul-custom-line m-4">
                      <li className="mb-2">
                        Inventory management and data accessibility
                      </li>
                      <li className="mb-2">
                        Access to all functionalities; process initiation
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-6 d-flex my-4">
                <div className="card shadow-none br-12px w-100">
                  <div className="card-body p-lg-4">
                    <div className="row align-items-center m-4 gy-2">
                      <div className="col pr-0">
                        <AnimatedImageWithOpacity
                          src={IMAGES.utrade7}
                          className="img-fluid lazy"
                          loading="lazy"
                          width="72"
                          height="70"
                          alt="Seller panel features"
                        />
                      </div>
                      <div className="col-auto">
                        <a
                          href="https://marvelapp.com/prototype/2i6dh39g"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="line-button custom-cursor text-nowrap"
                        >
                          View more
                          <img
                            src={IMAGES.rightArrowUtrade}
                            className="img-fluid ms-1 lazy"
                            loading="lazy"
                            width="24"
                            height="16"
                            alt="right-arrow"
                          />
                        </a>
                      </div>
                    </div>
                    <h3 className="font--22 fw-600 mb--15 mx-4">
                      Seller panel features
                    </h3>
                    <ul className="list-unstyled fs-18 ul-custom-line m-4">
                      <li className="mb-2">
                        Inventory management and order tracking
                      </li>
                      <li className="mb-2">
                        Sales statistics and targeted ad campaigns
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-6 d-flex my-4">
                <div className="card shadow-none br-12px w-100">
                  <div className="card-body p-lg-4">
                    <div className="row align-items-center m-4 gy-2">
                      <div className="col pr-0">
                        <AnimatedImageWithOpacity
                          src={IMAGES.utrade8}
                          className="img-fluid lazy"
                          loading="lazy"
                          width="70"
                          height="70"
                          alt="Buyer’s app features"
                        />
                      </div>
                      <div className="col-auto">
                        <a
                          href="https://marvelapp.com/prototype/j9020da"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="line-button custom-cursor text-nowrap"
                        >
                          View more
                          <img
                            src={IMAGES.rightArrowUtrade}
                            className="img-fluid ms-1 lazy"
                            loading="lazy"
                            width="24"
                            height="16"
                            alt="right-arrow"
                          />
                        </a>
                      </div>
                    </div>
                    <h3 className="font--22 fw-600 mx-4">
                      Buyer’s app features
                    </h3>
                    <ul className="list-unstyled fs-18 ul-custom-line m-4">
                      <li className="mb-2">
                        Quick registration and browsing without login
                      </li>
                      <li className="mb-2">
                        Real time order tracking and easy payment
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-6 d-flex my-4">
                <div className="card shadow-none br-12px w-100">
                  <div className="card-body p-lg-40">
                    <div className="row align-items-center m-4 gy-2">
                      <div className="col pr-0">
                        <AnimatedImageWithOpacity
                          src={IMAGES.utrade9}
                          className="img-fluid lazy"
                          loading="lazy"
                          width="82"
                          height="70"
                          alt="Driver’s app features"
                        />
                      </div>
                      <div className="col-auto">
                        <a
                          href="https://marvelapp.com/prototype/8a08374"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="line-button custom-cursor text-nowrap"
                        >
                          View more
                          <img
                            src={IMAGES.rightArrowUtrade}
                            className="img-fluid ms-1 lazy"
                            loading="lazy"
                            width="24"
                            height="16"
                            alt="right-arrow"
                          />
                        </a>
                      </div>
                    </div>
                    <h3 className="font--22 fw-600 mb--15 mx-4">
                      Driver’s app features
                    </h3>
                    <ul className="list-unstyled fs-18 ul-custom-line m-4">
                      <li className="mb-2">One-to-one location list</li>
                      <li className="mb-2">
                        Instant notifications on delivery plans
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="utrade-primary-bg custom-blog-cursor">
        <Container>
          <Row className="row align-items-center ">
            <Col lg={6} className="section-title mt-0 mb-4 mb-lg-0">
              <h2 className="fs-30 fw-600 mb--20 text-white text-start">
                App and web platforms, interfaces, & admin dashboard
              </h2>
              <p className=" fs-18 text-white text-start">
                Separate interfaces were designed and developed for
                administrators, buyers, sellers, customers, and drivers,
                ensuring tailored experiences aligned with their specific roles.
                Also, developing both web platforms and applications equipped
                U-Trade with a multifaceted ecosystem across diverse user
                segments.
              </p>
            </Col>
            <Col lg={6} className="text-center p-4">
              <AnimatedImageWithOpacity
                className="w-100 h-100 lazy p-4"
                loading="lazy"
                src={IMAGES.utrade10}
                width="668"
                height="469"
                alt="app web platforms"
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="portfolio-style1 portfolio-card section portfolio-lightorange custom-blog-cursor">
        <Container className="my-5">
          <div className="title-box text-center mb-5">
            <h2 className="title-2 mb-0">Read Next</h2>
          </div>
          <Row className="align-items-center gy-4">
            <Col lg={6}>
              <div className="info-card">
                <AnimatedImageWithOpacity
                  className="logo-img img-fluid"
                  src={IMAGES.aquinasLogo}
                  width="146"
                  height="46"
                  alt="logo"
                  loading="lazy"
                />
                <p className="main-text">
                  Connecting schools with qualified education staff—just Look,
                  Click, Book!
                </p>
                <a
                  href="/aquinas-education"
                  className="btn bg-white custom-cursor"
                >
                  Explore More
                </a>
              </div>
            </Col>
            <Col lg={6}>
              <div className="grid-utrade-view grid-aquinas-view">
                <div className="div1">
                  <p>A vision to change the educational hiring landscape!</p>
                </div>
                <div className="div2 justify-content-end align-items-end pb-0 pe-0">
                  <AnimatedImageWithOpacity
                    className="img-fluid"
                    src={IMAGES.aquinasLaptop}
                    width="330"
                    height="228"
                    alt="aquinas"
                    loading="lazy"
                  />
                </div>
                <div className="div3 justify-content-between pb-0">
                  <p>Transforming Education Staffing with Aquinas</p>
                  <AnimatedImageWithOpacity
                    className="img-fluid mt-3"
                    src={IMAGES.aquinasMobile}
                    width="176"
                    height="250"
                    alt="aquinas"
                    loading="lazy"
                  />
                </div>
                <div className="div4">
                  <Row className="row-cols-2 row-cols-sm-auto justify-content-between align-items-center gy-3">
                    <Col lg={4} className="d-flex flex-column flex-center">
                      <p className="lh-1">10K Teachers</p>
                      <p className="fs-14 fw-normal">
                        Placed weekly on average!
                      </p>
                    </Col>
                    <Col lg={4} className="d-flex flex-column flex-center">
                      <p className="lh-1">48k+</p>
                      <p className="fs-14 fw-normal">
                        Teaching hours every day!
                      </p>
                    </Col>
                    <Col lg={4} className=" d-flex flex-column flex-center">
                      <p className="lh-1">99%</p>
                      <p className="fs-14 fw-normal">Satisfaction ratio</p>
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

export default AboutUtrade;

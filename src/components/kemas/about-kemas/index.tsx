import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { IMAGES } from "../../../utils/staticJSON";
import AnimatedImageWithOpacity from '../../../global/AnimatedImageWithOpacity';

const AboutKemas = () => {
  return (
    <>
      <section className="section about-kemas custom-blog-cursor">
        <Container className="text-center">
          <h2 className="fs-32 fw-700 mb-3 text-center">
            About <span className="kemas-primary-color">kemas</span>
          </h2>

          <p className="fs-20 fw-400">
            The Golden Katar Regiment wanted us to create an effective system
            that could help battalions track & analyse arms & equipment in
            possession of the regiment. We created KEMAS which stands for Katar
            equipment Management & Analysis Software.
          </p>
          <p className="fs-20 fw-400">
            The software helped the Indian army store equipment’s data onto a
            server maintained through the Indian army’s intranet to make it
            secure & totally reliable. KEMAS made the entire process automated,
            which can be easily accessible in different locations of India, to
            enable smooth & efficient communication.
          </p>
          <Col
            lg={12}
            className="d-flex flex-row justify-content-center mt-4"
          >
            <AnimatedImageWithOpacity
              className="fit-img"
              loading="lazy"
              src={IMAGES.kemas1}
              width="600"
              height="392"
              alt="Two Distinct Interfaces"
            />
          </Col>
          <Col>
            <div className="section-title text-center pt-4 mt-4">
              <h3 className="mb-4">Problem statement</h3>
              <p className="fs-20 fw-400">
                It became a hard-core task for Army personnel to manage handling
                & servicing numerous equipment in possession. Also, they were
                having a hard time getting the equipment serviced at the due
                date. Manual errors could also occur in maintaining the data of
                the equipment & getting the exact numbers of in-service
                equipment.
              </p>
              <p className="fs-20 fw-400">
                We implemented a solution that could solve all the problems in a
                single automated software with combined efforts. In 3 months of
                usage, KEMAS handled over 1 million records of data & made the
                entire process of service & maintaining an automatic, easy
                operation.
              </p>
            </div>
          </Col>
        </Container>
      </section>
      <section>
        <div className="py-5 bg-light custom-blog-cursor">
          <div className="container">
            {/* Section Title */}
            <div className="row">
              <div className="col-lg-12 mx-auto">
                <div className="text-center mb-4">
                  <h2 className="mb-4">Our Involvement</h2>
                  <p className="fs-20 fw-400">
                    We developed a tailored turnkey solution for the Indian
                    army. We developed KEMAS based on .NET
                    <br /> technology & SQL-based server to provide a totally
                    secured solution. With our profound system,
                    <br /> KEMAS is used by 12+ battalions all over India.
                  </p>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <Row className="mt-4">
              {/* Image Section */}
              <Col
                lg={6}
                className="d-flex justify-content-center align-items-center"
              >
                <AnimatedImageWithOpacity
                  className="img-fluid"
                  src={IMAGES.kemas2}
                  alt="analytics"
                  width="580"
                  height="580"
                />
              </Col>
              {/* Software Features */}
              <Col lg={6}>
                <div className="text-left p-1 pb-0">
                  <h2>Software features</h2>
                </div>
                <ul className="liststyle bullet fs-20 fw-400">
                  <li className="my-4">
                    Software accessibility in different locations.
                  </li>
                  <li className="my-4">Storage of data on the server.</li>
                  <li className="my-4">Data intimation on the dashboard.</li>
                  <li className="my-4">
                    Easy access to printed receipt, service notes, & repair
                    notes to avoid human error.
                  </li>
                  <li className="my-4">
                    Availability of check-in & check-out for workshops.
                  </li>
                  <li className="my-4">Access of application on Intranet.</li>
                  <li className="my-4">SQL secured system based server.</li>
                </ul>
              </Col>
            </Row>
          </div>
        </div>
      </section>
      <section>
        <Container>
          <Row className="mt-4 custom-blog-cursor">
            <Col lg={6}>
              <div className="text-left mt-4 mb-0">
                <h2>Achievements & recognitions</h2>
              </div>
              <ul className="liststyle bullet fs-20 fw-400">
                <li className="my-4">A totally secure & reliable system.</li>
                <li className="my-4">
                  All the inventory & service logs are maintained through KEMAS.
                </li>
                <li className="my-4">
                  Within 3 months of implementation, the entire data was
                  automated & all transactions were done using KEMAS.
                </li>
                <li className="my-4">
                  Better analytics gave insight into loopholes in the system,
                  and preventive measures were taken to prevent them.
                </li>
                <li className="my-4">
                  30% of efficiency was increased in repair and maintenance
                  tasks done in the battalion.
                </li>
                <li className="my-4">
                  What started with only 1 battalion is now used across India by
                  over 12+ battalions.
                </li>
                <li className="my-4">
                  Impressed with the extraordinary system development, we were
                  also awarded a ‘Certificate of Excellence’ by the Indian Army.
                </li>
              </ul>
            </Col>
            <Col
              lg={6}
              className="d-flex justify-content-center align-items-center"
            >
              <AnimatedImageWithOpacity
                className="img-fluid"
                src={IMAGES.kemas3}
                alt="analytics"
                width="480"
                height="480"
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="mt-4 custom-blog-cursor">
        <div className="ptb--80 kemas-primary-bg">
          <div className="container testimonial-kemas-card">
            <p className="fs-22 fw-400 mb-4">
              The developed software is state of the art having latest computer
              programming features. The application software is very stable and
              running stable giving desired output. The team of Impero is
              throughly competent and professional and assisted us in the most
              professional manner in accomplishing the task. Thanks to Impero
              team for helping us in automating our task.
            </p>
            <Row className="align-items-center gx-lg-3">
              <Col sm="auto">
                <AnimatedImageWithOpacity
                  className="img-fluid"
                  src={IMAGES.kemas4}
                  width="70"
                  height="70"
                  alt="avtar"
                  loading="lazy"
                />
              </Col>
              <Col>
                <h4 className="fs-18 fw-500 mb-1">Lt Col Second-in-Command</h4>
                <h5 className="fs-14 fw-400 mb-0">611 EME Bn.</h5>
              </Col>
            </Row>
          </div>
        </div>
      </section>

      <section className="portfolio-style2 portfolio-card section custom-blog-cursor">
        <Container className="my-5">
          <div className="title-box text-center mb-5">
            <h2 className="title-2 mb-0">Read Next</h2>
          </div>
          <Row className=" align-items-center gy-4">
            <Col lg={5}>
              <div className="info-card">
                <AnimatedImageWithOpacity
                  className="logo-img img-fluid"
                  src={IMAGES.keepAppy1x}
                  width="130"
                  height="84"
                  alt="logo"
                  loading="lazy"
                />
                <p className="main-text">
                  A wellness kit on your phone! Already touching lives of over
                  30k+ users in 75 countries.
                </p>
                <a
                  href="/keepappy"
                  className="btn bg-white custom-cursor"
                >
                  Explore More
                </a>
              </div>
            </Col>
            <Col lg={7}>
              <div className="grid-keepappy-view">
                <div className="div1 justify-content-between pb-0">
                  <p className="fw-bold">
                    KeepAppy is a multi-featured wellness gym.
                  </p>
                  <AnimatedImageWithOpacity
                    className="img-fluid ms-auto"
                    src={IMAGES.keepAppyMobile1x}
                    width="220"
                    height="300"
                    alt="img"
                    loading="lazy"
                  />
                </div>
                <div className="div2">
                  <p className="fw-bold">
                    KeepAppy is mentored by Bill & Melinda Gates Foundation.
                  </p>
                </div>
                <div className="div3 align-items-start text-start">
                  <AnimatedImageWithOpacity
                    className="img-fluid mb-2"
                    src={IMAGES.target}
                    width="32"
                    height="32"
                    alt="target-icon"
                    loading="lazy"
                  />
                  <p>
                    Raised €30,000+ funding through the Kickstarter platform.
                  </p>
                </div>
                <div className="div4 pb-0 justify-content-end">
                  <AnimatedImageWithOpacity
                    className="img-fluid"
                    src={IMAGES.keepAppyMobileTwo1x}
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

export default AboutKemas;

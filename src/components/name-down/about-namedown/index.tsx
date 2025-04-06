import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { IMAGES } from "../../../utils/staticJSON";
import AnimatedImageWithOpacity from '../../../global/AnimatedImageWithOpacity';

const AboutNameDown = () => {
  return (
    <>
      <section className="section about-namedown custom-blog-cursor">
        <Container>
          <h2 className="fs-32 fw-700 mb-3 text-center">
            About <span className="namedown-primary-color">NameDown</span>
          </h2>
          <p className="fs-20 fw-400 text-center">
            NameDown is a comprehensive education platform designed to manage
            the entire admissions process. It provides parents a seamless way to
            search for schools, explore resources, and apply for admissions.
            Meanwhile, schools can set up detailed profiles, manage
            applications, and accept or reject them based on specific criteria.
          </p>
        </Container>
      </section>
      <section>
        <div className="py-5 bg_color--5 custom-blog-cursor">
          <div className="container">
            <div className="mt-0 mb-5">
              <h2 className="fs-32 fw-bold text-center">
                Design and development of NameDown platforms
              </h2>
            </div>

            <div className="row align-items-stretch mb-30">
              <div className="col-lg-6 text-lg-left align-self-center mb-4 mb-lg-0 py-lg-4">
                <h3 className="fs-30 mb-20">Two Distinct Interfaces</h3>
                <p className="fs-20">
                  Our team designed and developed two web interfaces to cater to
                  the unique needs of parents and schools. The Parent interface
                  allows parents to search for schools through various filters,
                  explore expert-curated content, and submit admission
                  applications for their kids.
                </p>
                <p className="fs-20">
                  The School interface enables schools to register and set up
                  their profiles by filling in relevant information, managing
                  information links, and accepting or rejecting admission
                  applications based on their selection criteria.
                </p>
              </div>
              <div className="col-lg-6">
                <AnimatedImageWithOpacity
                  className="fit-img lazy"
                  loading="lazy"
                  src={IMAGES.nameDownTwoDistinct}
                  width="600"
                  height="392"
                  alt="Two Distinct Interfaces"
                />
              </div>
            </div>

            <div className="row align-items-stretch mb-30">
              <div className="col-lg-6 text-lg-left align-self-center mb-4 mb-lg-0 py-lg-4">
                <h3 className="fs-30 mb-20">User-Friendly Design</h3>
                <p className="fs-20">
                  Both interfaces prioritise ease of navigation and a
                  user-friendly experience. Recognising the diverse
                  technological proficiency among users, the design includes
                  clear tabs, intuitive navigation pathways, and visual cues,
                  ensuring parents and schools can engage seamlessly with the
                  platform.
                </p>
              </div>
              <div className="col-lg-6 order-lg-first">
                <AnimatedImageWithOpacity
                  className="fit-img lazy"
                  loading="lazy"
                  src={IMAGES.nameDownUserFriendly}
                  width="600"
                  height="392"
                  alt="User-Friendly Design"
                />
              </div>
            </div>

            <div className="row align-items-stretch">
              <div className="col-lg-6 text-lg-left align-self-center mb-4 mb-lg-0 py-lg-4">
                <h3 className="fs-30 mb-20">
                  Technical Development Highlights
                </h3>
                <p className="fs-20">
                  We ensured that the platform performs seamlessly across
                  various devices, including desktops, tablets, and smartphones.
                </p>
                <p className="fs-20">
                  The backend is robust and scalable, capable of supporting a
                  growing number of users and functionalities over time.
                  Additionally, to protect sensitive data, we implemented
                  industry-standard security practices, including data
                  encryption and secure authentication methods.
                </p>
              </div>
              <div className="col-lg-6">
                <AnimatedImageWithOpacity
                  className="fit-img lazy"
                  loading="lazy"
                  src={IMAGES.nameDownTechnical}
                  width="600"
                  height="392"
                  alt="Technical Development Highlights"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="ptb--80 bg_color--1 custom-blog-cursor">
          <div className="container">
            <div className="row align-items-stretch">
              <div className="mx-auto mt-0 mb-5">
                <h2 className="fs-32 fw-bold text-center">
                  Features that make Parent’s interface productive!
                </h2>
              </div>
              <div className="col-lg-6 text-lg-left align-self-center mb-4 mb-lg-0 py-lg-5">
                <h3 className="fs-26">School Search</h3>
                <p className="mb-20 fs-20">
                  Parents can search for schools using a variety of filters,
                  including school level, region, name, and admission status.
                  This feature streamlines the process of finding suitable
                  schools, allowing parents to efficiently narrow down their
                  options and choose the best fit for their children.
                </p>
                <h3 className="fs-26 mb-10">Access to Learning Modules</h3>
                <p className="mb-20 fs-20">
                  The interface provides parents with access to learning modules
                  covering a range of topics, including transitioning to primary
                  school, learning skills, and well-being. These modules offer
                  valuable resources that support parents and their children in
                  navigating educational challenges and fostering holistic
                  development.
                </p>
              </div>
              <div className="col-lg-6">
                <AnimatedImageWithOpacity
                  className="fit-img lazy"
                  loading="lazy"
                  src={IMAGES.nameDownInterface}
                  width="600"
                  height="704"
                  alt="kids app"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="ptb--80 bg_color--5 custom-blog-cursor">
          <div className="container">
            <div className="mt-0 mb-5">
              <h2 className="fs-32 fw-bold text-center">
                Features that make School’s interface productive!
              </h2>
            </div>
            <div className="row justify-content-center text-center">
              <div className="col-md-6 d-flex mb-30">
                <div className="card shadow-none br-10 w-100">
                  <div className="card-body p-lg-40 px-lg-30">
                    <AnimatedImageWithOpacity
                      src={IMAGES.nameDownSchool}
                      className="img-fluid lazy mb-3"
                      loading="lazy"
                      width="70"
                      height="76"
                      alt="Efficient Booking System"
                    />
                    <h3 className="fs-22 mb-10">School Registration</h3>
                    <p className="mb-0 fs-20">
                      Schools can register on the platform by setting up their
                      profiles, and adding comprehensive details about their
                      facilities, educational philosophy, and unique offerings.
                      This initial setup is crucial for schools to effectively
                      attract and engage with prospective parents.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 d-flex mb-30">
                <div className="card shadow-none br-10 w-100">
                  <div className="card-body p-lg-40 px-lg-30">
                    <AnimatedImageWithOpacity
                      src={IMAGES.nameDownAdmissionForms}
                      className="img-fluid lazy mb-3"
                      loading="lazy"
                      width="70"
                      height="76"
                      alt="Efficient Booking System"
                    />
                    <h3 className="fs-22 mb-10">Add Admission Forms</h3>
                    <p className="mb-0 fs-20">
                      Schools can upload and customise their admission forms
                      directly on the platform. This allows for a streamlined
                      application process, tailored to meet the specific
                      requirements and criteria of each school.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-12 d-flex mb-30">
                <AnimatedImageWithOpacity
                  className="fit-img lazy"
                  loading="lazy"
                  src={IMAGES.nameDownInterface2}
                  width="600"
                  height="392"
                  alt="Features that make School’s interface productive!"
                />
              </div>

              <div className="col-md-6 d-flex mb-30">
                <div className="card shadow-none br-10 w-100">
                  <div className="card-body p-lg-40 px-lg-30">
                    <AnimatedImageWithOpacity
                      src={IMAGES.nameDownAdminssion}
                      className="img-fluid lazy mb-3"
                      loading="lazy"
                      width="70"
                      height="76"
                      alt="Efficient Booking System"
                    />
                    <h3 className="fs-22 mb-10">
                      Admission Application Management
                    </h3>
                    <p className="mb-0 fs-20">
                      Schools can view applications, categorise them by various
                      demographics such as male or female applicants, and
                      process them according to their admission standards. This
                      feature simplifies the monitoring and handling of a
                      potentially large volume of applications.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 d-flex mb-30">
                <div className="card shadow-none br-10 w-100">
                  <div className="card-body p-lg-40 px-lg-30">
                    <AnimatedImageWithOpacity
                      src={IMAGES.nameDownInformationLinks}
                      className="img-fluid lazy mb-3"
                      loading="lazy"
                      width="70"
                      height="76"
                      alt="Efficient Booking System"
                    />
                    <h3 className="fs-22 mb-10">Information Links</h3>
                    <p className="mb-0 fs-20">
                      Schools can update and provide vital information through
                      the platform, including school policies, history, code of
                      conduct, and other necessary forms. This ensures that all
                      relevant and updated information is accessible to parents,
                      helping them make informed decisions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="feddback">
        <div className="ptb--80 bg-2d3454 custom-blog-cursor">
          <div className="container testimonial-namedown-card">
            <p className="fs-22 mb-4">
              Amazing team of professionals and top-notch services! Their
              attention to detail, understanding of the edtech industry and
              their commitment to excellence is second to none. I highly
              recommend them.
            </p>
            <Row className="align-items-center gx-lg-3">
              <Col sm="auto">
                <AnimatedImageWithOpacity
                  className="img-fluid"
                  src={IMAGES.nameDownFounder}
                  width="70"
                  height="70"
                  alt="avtar"
                  loading="lazy"
                />
              </Col>
              <Col>
                <h4 className="fs-18 fw-500 mb-1">Emer O’Dwyer</h4>
                <h5 className="fs-14 fw-400 mb-0">Founder, NameDown</h5>
              </Col>
            </Row>
          </div>
        </div>
      </section>

      <section className="portfolio-style3 portfolio-card portfolio-lightmorpich section custom-blog-cursor">
        <Container className="my-5">
          <div className="title-box text-center mb-5">
            <h2 className="title-2 mb-0">Read Next</h2>
          </div>
          <Row className="align-items-center gy-4">
            <Col lg={6}>
              <div className="info-card">
                <AnimatedImageWithOpacity
                  className="logo-img img-fluid"
                  src={IMAGES.sureWashLogo}
                  width="165"
                  height="88"
                  alt="logo"
                  loading="lazy"
                />
                <p className="main-text">
                  An AR & 3D gaming tool that makes learning hand hygiene fun
                  for kids.
                </p>
                <a
                  href="/surewash"
                  className="btn bg-white custom-cursor"
                >
                  Explore More
                </a>
              </div>
            </Col>
            <Col lg={6}>
              <div className="grid-scoreboard-view grid-surewash-view">
                <div className="div1 pb-0 justify-content-end">
                  <AnimatedImageWithOpacity
                    className="img-fluid"
                    src={IMAGES.sureWashM5}
                    width="504"
                    height="308"
                    alt="scoreboard"
                    loading="lazy"
                  />
                </div>
                <div className="div2 bg-surewash">
                  <AnimatedImageWithOpacity
                    className="img-fluid"
                    src={IMAGES.sureWashMobile}
                    width="116"
                    height="231"
                    alt="mobile"
                    loading="lazy"
                  />
                </div>
                <div className="div3 text-start align-items-start">
                  <p className="mb-1">New Advisory Members</p>
                  <p className="fw-normal">
                    Proud to join The Leapfrog Group Partners Advisory
                    Committee.
                  </p>
                </div>
                <div className="div4 text-start align-items-start">
                  <p className="mb-1">2 Million+</p>
                  <p className="fw-normal">People Trained Worldwide.</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AboutNameDown;

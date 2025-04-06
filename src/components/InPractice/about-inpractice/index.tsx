import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { IMAGES } from "../../../utils/staticJSON";
import AnimatedImageWithOpacity from '../../../global/AnimatedImageWithOpacity';

const AboutInPractcie = () => {
  return (
    <>
      <section className="section pb-0 custom-blog-cursor">
        <Container>
          <h2 className="fs-32 fw-bold mb-3 text-center">
            About <span className="inpractice-primary-color">InPractice</span>
          </h2>
          <p className="fs-20 fw-400 mb-5 text-center">
            It is an innovative audit management tool that enhances the
            efficiency and profitability of audit processes by eliminating
            under-auditing and over-auditing. It offers a cloud-based solution
            that allows users to access their audit tools anytime and anywhere.
            The software stands out by incorporating a dynamic time budgeting
            tool that facilitates the effective management of audit hours,
            thereby countering common challenges in the industry such as
            uncontrolled work hours and the risk of fee write-offs.
          </p>
        </Container>
      </section>

      <section>
        <div className="ptb--80 bg_color--5 custom-blog-cursor">
          <div className="container py-8 py-md-13">
            <div className="mt-0 mb-5">
              <h2 className="fs-32 fw-bold text-center">
                Design and development of InPractice Software
              </h2>
            </div>

            <div className="row align-items-stretch gy-4 mb-30">
              <div className="col-lg-6 text-lg-left align-self-center mb-4 mb-lg-0">
                <h3 className="fs-30 mb-20">Two Distinct Interfaces</h3>
                <p className="fs-20">
                  Our team crafted two web interfaces to meet the specific needs
                  of financial audit management. The Auditor interface
                  facilitates auditors in setting up and managing their audit
                  projects, including dynamic time budgeting and tracking of
                  audit activities.
                </p>
                <p className="fs-20">
                  The Admin interface allows management to oversee audit
                  operations, manage user roles, and access comprehensive
                  reports on audit outcomes and time efficiencies
                </p>
              </div>
              <div className="col-lg-6 order-lg-first">
                <AnimatedImageWithOpacity
                  className="fit-img lazy"
                  loading="lazy"
                  src={IMAGES.inPracticeTwoDistinct}
                  width="600"
                  height="392"
                  alt="Two Distinct Interfaces"
                />
              </div>
            </div>

            <div className="row align-items-stretch mb-30 gy-4">
              <div className="col-lg-6 text-lg-left align-self-center mb-4 mb-lg-0 py-lg-4">
                <h3 className="fs-30 mb-20">User-Friendly Design</h3>
                <p className="fs-20">
                  Both interfaces prioritise ease of navigation and a
                  user-friendly experience. Acknowledging the diverse
                  technological proficiency among users, the design features
                  clear tabs, intuitive navigation pathways, and visual cues,
                  ensuring auditors and management can engage seamlessly with
                  the software.
                </p>
              </div>
              <div className="col-lg-6">
                <AnimatedImageWithOpacity
                  className="fit-img lazy"
                  loading="lazy"
                  src={IMAGES.inPracticeUserFriendly}
                  width="600"
                  height="392"
                  alt="User-Friendly Design"
                />
              </div>
            </div>

            <div className="row align-items-stretch gy-4">
              <div className="col-lg-6 text-lg-left align-self-center mb-4 mb-lg-0 py-lg-4">
                <h3 className="fs-30 mb-20">
                  Technical Development Highlights
                </h3>
                <p className="fs-20">
                  The backend architecture is robust and scalable, designed to
                  handle large volumes of sensitive financial data. Recognising
                  the critical importance of security and compliance in the
                  financial audit sector, we implemented advanced security
                  measures.
                </p>
                <p className="fs-20">
                  Furthermore, the system incorporates real-time data processing
                  capabilities to support complex audit tasks and maintains
                  compliance with international auditing standards, ensuring
                  that every audit conducted using our platform meets rigorous
                  industry requirements.
                </p>
              </div>
              <div className="col-lg-6 order-lg-first">
                <AnimatedImageWithOpacity
                  className="fit-img lazy"
                  loading="lazy"
                  src={IMAGES.inPracticeTechnical}
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
          <div className="container py-8 py-md-13">
            <div className="mt-0 mb-5">
              <h2 className="fs-32 fw-bold text-center">
                Features that make the platform best in business
              </h2>
            </div>
            <div className="row align-items-stretch mb-4">
              <div className="col-lg-6 text-lg-left align-self-center mb-4 mb-lg-0 py-lg-4">
                <h3 className="fs-30 m-4">
                  Essential Operations and User Engagement
                </h3>

                <ul className="liststyle bullet mr-lg-5 fs-20">
                  <li className="mb-4">
                    <span className="fw-600">
                      New User Registration & Login:
                    </span>{' '}
                    Simple click-through processes to get started with the
                    platform.
                  </li>
                  <li className="mb-4">
                    <span className="fw-600">
                      Purchase InPractice Audit File:
                    </span>{' '}
                    Allows users to buy individual audit files, providing a
                    cost-effective solution compared to traditional hourly
                    rates.
                  </li>
                  <li className="mb-4">
                    <span className="fw-600">Setup an Audit File:</span>{' '}
                    Streamlines the initial setup process for conducting audits,
                    ensuring all necessary data is ready for use.
                  </li>
                  <li>
                    <span className="fw-600">Appoint & Allocate:</span>{' '}
                    Facilitates the assignment of audit teams and budgeting of
                    hours per auditor, enhancing project management and
                    operational efficiency.
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <AnimatedImageWithOpacity
                  className="fit-img lazy"
                  loading="lazy"
                  src={IMAGES.inPracticeOperations}
                  width="600"
                  height="585"
                  alt="Essential Operations and User Engagement"
                />
              </div>
            </div>
            <div className="row align-items-stretch">
              <div className="col-lg-6 text-lg-left align-self-center mb-4 mb-lg-0 py-lg-4">
                <h3 className="fs-30 m-4">Audit Process Management</h3>
                <ul className="liststyle bullet fs-20">
                  <li className="mb-4">
                    <span className="fw-600">Audit File Work Recording:</span>{' '}
                    Differentiates between ongoing and finalised work, ensuring
                    clarity and ease of access to audit records.
                  </li>
                  <li className="mb-4">
                    <span className="fw-600">Completion & Close Down:</span>{' '}
                    Smooth sign-off and closure operations with options to
                    download, check, save, and back up the completed audit file.
                  </li>
                  <li>
                    <span className="fw-600">Backup:</span> Essential tools for
                    backing up audit data securely, either on hard drives,
                    external storage, or cloud, safeguarding crucial financial
                    information.
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 order-lg-first">
                <AnimatedImageWithOpacity
                  className="fit-img lazy"
                  loading="lazy"
                  src={IMAGES.inPracticeAudit}
                  width="600"
                  height="585"
                  alt="Audit Process Management"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="ptb--80 bg_color--5 custom-blog-cursor">
        <div className="container">
          <div className="mt-0 text-center mb-5">
            <h2 className="fs-32 fw-bold mb-0">
              Communication and Documentation
            </h2>
          </div>
          <div className="row justify-content-center gy-6">
            <div className="col-lg-5 d-flex mb-4 mb-lg-0">
              <div className="card shadow-none br-15px w-100">
                <div className="card-body text-center py-4">
                  <h3 className="fs-22 mb-4">Notification System</h3>
                  <p className="mb-0 fs-20">
                    An intuitive notification system that alerts users to
                    changes, upgrades, or important messages, all accessible via
                    a bell-shaped icon.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-5 d-flex">
              <div className="card shadow-none br-15px w-100">
                <div className="card-body text-center py-4">
                  <h3 className="fs-22 mb-4">Print Options</h3>
                  <p className="mb-0 fs-20">
                    Provides flexibility to print documents directly from the
                    platform, supporting both partial and complete file prints.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="ptb--80 bg_color--1 custom-blog-cursor">
          <div className="container">
            <div className=" mb-5">
              <h2 className="fs-32 fw-bold text-center">
                Advanced Audit Features
              </h2>
            </div>
            <div className="row justify-content-center text-center">
              <div className="col-md-6 col-xl-4 d-flex mb-4 mb-xl-0">
                <div className="card shadow-none br-10 w-100">
                  <div className="card-body p-lg-40 px-lg-30">
                    <AnimatedImageWithOpacity
                      src={IMAGES.inPracticeUpdates}
                      className="img-fluid lazy mb-2"
                      loading="lazy"
                      width="48"
                      height="49"
                      alt="Search and browse"
                    />
                    <h3 className="fs-22 mb-3">
                      Dynamic Updates in Audit Files
                    </h3>
                    <p className="mb-0 fs-20">
                      Automatic updates within the audit files when sections are
                      signed off, clearly marking progress and areas needing
                      attention.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-xl-4 d-flex mb-4 mb-xl-0">
                <div className="card shadow-none br-10 w-100">
                  <div className="card-body p-lg-40 px-lg-30">
                    <AnimatedImageWithOpacity
                      src={IMAGES.inPracticePlanning}
                      className="img-fluid lazy mb-2"
                      loading="lazy"
                      width="44"
                      height="49"
                      alt="Direct booking"
                    />
                    <h3 className="fs-22 mb-3">Comprehensive Audit Planning</h3>
                    <p className="mb-0 fs-20">
                      Supports senior-level involvement in the planning stages
                      and adheres to strict standards like the International
                      Standards on Auditing (ISAs).
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-xl-4 d-flex">
                <div className="card shadow-none br-10 w-100">
                  <div className="card-body p-lg-40 px-lg-30">
                    <AnimatedImageWithOpacity
                      src={IMAGES.inPracticeRevenue}
                      className="img-fluid lazy mb-2"
                      loading="lazy"
                      width="48"
                      height="49"
                      alt="Simplified engagement"
                    />
                    <h3 className="fs-22 mb-3">
                      Revenue Recognition & Disclosures
                    </h3>
                    <p className="mb-0 fs-20">
                      Tools to manage complex accounting policies and disclosure
                      requirements, preventing oversight and non-compliance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="ptb--80 bg-009999  custom-blog-cursor">
          <div className="container testimonial-inpratice-card">
            <p className="fs-22 fw-400 mb-4">
              We know how complex and challenging it can be to manage financial
              operations, especially auditing. However, their team demonstrated
              an in-depth understanding of our industry's challenges and
              intricacies from the outset. They took the time to listen to our
              needs and meticulously crafted software that was tailored to our
              exact needs.
            </p>
            <Row className="align-items-center gx-lg-3">
              <Col sm="auto">
                <AnimatedImageWithOpacity
                  className="img-fluid"
                  src={IMAGES.inPracticeMD}
                  width="70"
                  height="70"
                  alt="avtar"
                  loading="lazy"
                />
              </Col>
              <Col>
                <h4 className="fs-18 fw-500 mb-1">Jaffer RH Manek</h4>
                <h5 className="fs-14 fw-400 mb-0">
                  Managing Director, InPractice
                </h5>
              </Col>
            </Row>
          </div>
        </div>
      </section>

      <section className="portfolio-style1 portfolio-card section custom-blog-cursor">
        <Container className="my-5">
          <div className="title-box text-center mb-5">
            <h2 className="title-2 mb-0">Read Next</h2>
          </div>
          <Row className="align-items-center gy-4">
            <Col lg={6}>
              <div className="info-card">
                <AnimatedImageWithOpacity
                  className="logo-img img-fluid"
                  src={IMAGES.uTradeLogo}
                  width="146"
                  height="46"
                  alt="logo"
                  loading="lazy"
                />
                <p className="main-text">
                  A B2B portal in East Africa to streamline partnerships by
                  eliminating intermediaries.
                </p>
                <a
                  href="/utrade"
                  className="btn bg-white custom-cursor"
                >
                  Explore More
                </a>
              </div>
            </Col>
            <Col lg={6}>
              <div className="grid-utrade-view">
                <div className="div1">
                  <p>
                    Eliminate inefficiencies and foster partnerships that drive
                    success
                  </p>
                </div>
                <div className="div2 justify-content-end align-items-end pb-0 pe-0">
                  <AnimatedImageWithOpacity
                    className="img-fluid"
                    src={IMAGES.uTradeLaptop1x}
                    width="330"
                    height="228"
                    alt="utrade"
                    loading="lazy"
                  />
                </div>
                <div className="div3 justify-content-between pb-0">
                  <p className="">
                    Direct Connections for Suppliers and Retailers
                  </p>
                  <AnimatedImageWithOpacity
                    className="img-fluid"
                    src={IMAGES.uTradeMobile1x}
                    width="176"
                    height="250"
                    alt="utrade"
                    loading="lazy"
                  />
                </div>
                <div className="div4">
                  <Row className="row-cols-2 row-cols-sm-auto justify-content-between align-items-center gy-3">
                    <Col className="d-flex flex-column flex-center">
                      <p className="lh-1">10M +</p>
                      <p className="fs-14 fw-normal">Transactions</p>
                    </Col>
                    <Col className="col d-flex flex-column flex-center">
                      <p className="lh-1">75% yearly</p>
                      <p className="fs-14 fw-normal">Business Growth</p>
                    </Col>
                    <Col className="d-flex flex-column flex-center">
                      <p className="lh-1">1000+</p>
                      <p className="fs-14 fw-normal">Orders everyday</p>
                    </Col>
                    <Col className="d-flex flex-column flex-center">
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

export default AboutInPractcie;

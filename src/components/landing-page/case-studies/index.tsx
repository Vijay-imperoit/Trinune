import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import './style.css';
import { IMAGES } from '../../../utils/staticJSON';
import { useState } from 'react';
import { color } from 'framer-motion';
// import CaseStudiesCards from './case-studies';

const CaseStudies = () => {
  const [activeTab, setActiveTab] = useState('Clients');
  return (
    <>
      <section className="custom-blog-cursor">
        <Container>
          <div className="text-center pb-10px">
            <Row>
              <Col xs={12}>
                <div className="text-with-pill-1px mt-5 fs-15 fw-500 bg-light-blue text-dark">
                  Our valued clients
                </div>
              </Col>
            </Row>
          </div>

          <Row className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 gy-3 justify-content-center mb-5">
            <Col className="pb-2 justify-content-center d-none d-md-flex">
              <img
                src={IMAGES.Zededa}
                height={36}
                width={130}
                alt="xededa"
              />
            </Col>
            <Col className="pb-2 d-flex justify-content-center">
              <img
                src={IMAGES.Neilson}
                height={36}
                width={130}
                alt="xededa"
              />
            </Col>
            <Col className="pb-2 d-flex justify-content-center d-none d-md-flex">
              <img
                src={IMAGES.Zededa}
                height={36}
                width={130}
                alt="xededa"
              />
            </Col>
            <Col className="pb-2 d-flex justify-content-center d-none d-md-flex">
              <img
                src={IMAGES.HeartFlow}
                height={36}
                width={130}
                alt="xededa"
              />
            </Col>
            <Col className="pb-2 d-flex justify-content-center">
              <img
                src={IMAGES.AliveCore}
                height={36}
                width={130}
                alt="xededa"
              />
            </Col>
            <Col className="pb-2 d-flex justify-content-center">
              <img
                src={IMAGES.HeartFlow}
                height={36}
                width={130}
                alt="xededa"
              />
            </Col>
            <Col className="pb-2 d-flex justify-content-center ">
              <img
                src={IMAGES.Zededa}
                height={36}
                width={130}
                alt="xededa"
              />
            </Col>
            <Col className="pb-2 d-flex justify-content-center">
              <img
                src={IMAGES.Neilson}
                height={36}
                width={130}
                alt="xededa"
              />
            </Col>
            <Col className="pb-2 d-flex justify-content-center">
              <img
                src={IMAGES.AliveCore}
                height={36}
                width={130}
                alt="xededa"
              />
            </Col>
            <Col className="pb-2 d-flex justify-content-center d-none d-md-flex">
              <img
                src={IMAGES.Zededa}
                height={36}
                width={130}
                alt="xededa"
              />
            </Col>
          </Row>
          {/* <Row
            style={{ justifyContent: 'space-between', paddingBottom: '40px' }}
          >
            
          </Row> */}
        </Container>
        {/* <CaseStudiesCards /> */}
      </section>
      <section
        className="p-md-60px what-we-offer bg-lightest-blue mb-5"
        style={{ paddingBottom: '50px' }}
      >
        <div className="container">
          <div className="text-center pb-10px">
            <Row>
              <Col xs={12}>
                <div className="text-with-pill-1px mt-5 bg-light-blue text-dark">
                  What we offer
                </div>
              </Col>
            </Row>
          </div>
          <Row className="gy-4 gx-5">
            <Col
              lg={12}
              xl={6}
              className="d-flex"
            >
              {/* <Card className="custom-card border-0 bg-white">
              <Row className="align-items-center">
                <Col
                  md={9}
                  className="text-content p-5"
                >
                  <div
                    className="icon mb-2"
                    style={{ paddingBottom: '20px' }}
                  >
                    <img
                      src={IMAGES.StaffingIcon}
                      alt="IT Staffing"
                      className="icon-img"
                    />
                  </div>
                  <Card.Title
                    className="fw-bold"
                    style={{ paddingBottom: '5px' }}
                  >
                    IT Staffing
                  </Card.Title>
                  <Card.Text className="text-muted">
                    Triune provides expert IT staffing solutions, matching top
                    talent with businesses for innovation and success.
                  </Card.Text>
                  <img
                    className="arrow-icon"
                    src={IMAGES.ArrowIcon}
                  />
                </Col>
                <Col
                  md={3}
                  className="image-container p-0"
                >
                  <img
                    src={IMAGES.ITStaffing}
                    alt="IT Staffing"
                    // width={154}
                    // height={335}
                    className="img-fluid rounded  object-fit-cover"
                  />
                </Col>
              </Row>
            </Card> */}
              <div className="card g-0 flex-row row align-items-sm-stretch w-100 br-8px border-0 drop-shadow-custom">
                <div className="col-4 col-md-3 order-last">
                  <img
                    src={IMAGES.ITStaffing}
                    width="154"
                    height="277"
                    className=" w-100 h-100 object-fit-cover rounded-end-2"
                    style={{ objectFit: 'cover' }}
                    alt=""
                  />
                </div>
                <div className="col-8 col-md-9 card-body ps-lg-5">
                  <div className="row align-items-center h-100">
                    <div className="col-lg-8 h-100 w-100 py-3">
                      <img
                        src={IMAGES.StaffingIcon}
                        alt="staffing"
                        className="pb-3"
                      />
                      <h2 className="title">IT Staffing</h2>
                      <p className="text-gray sub-data">
                        Triune provides expert IT staffing solutions, matching
                        the top talent with businesses for the innovation and
                        success.
                      </p>
                      <a
                        href="#"
                        className=""
                      >
                        <img
                          src={IMAGES.ArrowIcon}
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col
              lg={12}
              xl={6}
              className="d-flex"
            >
              {/* <Card className="custom-card border-0 bg-white">
              <Row className="align-items-center">
                <Col
                  md={9}
                  className="text-content p-5"
                >
                  <div
                    className="icon mb-2"
                    style={{ paddingBottom: '20px' }}
                  >
                    <img
                      src={IMAGES.SolutionIcon}
                      alt="IT Staffing"
                      className="icon-img"
                    />
                  </div>
                  <Card.Title
                    className="fw-bold"
                    style={{ paddingBottom: '5px' }}
                  >
                    IT Solution Reseller
                  </Card.Title>
                  <Card.Text className="text-muted">
                    Triune simplifies IT procurement, offering software, cloud,
                    and infrastructure solutions with seamless support.
                  </Card.Text>
                  <img
                    className="arrow-icon"
                    src={IMAGES.ArrowIcon}
                  />
                </Col>
                <Col
                  md={3}
                  className="image-container p-0"
                >
                  <img
                    src={IMAGES.ITSolutions}
                    alt="IT Staffing"
                    // width={154}
                    // height={335}
                    className="img-fluid rounded h-100 w-100  object-fit-cover"
                  />
                </Col>
              </Row>
            </Card> */}

              <div className="card g-0 flex-row row align-items-sm-stretch w-100 br-8px border-0 drop-shadow-custom">
                <div className="col-4 col-md-3 order-last">
                  <img
                    src={IMAGES.ITSolutions}
                    width="154"
                    height="277"
                    className=" w-100 h-100 object-fit-cover rounded-end-2"
                    style={{ objectFit: 'cover' }}
                    alt=""
                  />
                </div>
                <div className="col-8 col-md-9  card-body ps-lg-5">
                  <div className="row align-items-center h-100">
                    <div className="col-lg-8 h-100 w-100 py-3">
                      <img
                        src={IMAGES.SolutionIcon}
                        alt="staffing"
                        className="pb-3"
                      />
                      <h2 className="title">IT Solution Reseller</h2>
                      <p className="text-gray sub-data">
                        Triune simplifies IT procurement, offering software,
                        cloud, and infrastructure solutions with seamless
                        support.
                      </p>
                      <a
                        href="#"
                        className=""
                      >
                        <img
                          src={IMAGES.ArrowIcon}
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <section className="p-md-60px position-relative d-none d-md-block mb-5">
        <Container className="testimonial-section py-5">
          <Row className="gy-4 align-items-center">
            <Col
              xs={12}
              md={6}
              lg={5}
              className="left-section"
            >
              <img
                src={IMAGES.QotesIcon}
                height={158}
                width={180}
                className="quote d-none d-md-block"
              />
              <h2 className="hear">Hear from those we’ve worked with!</h2>
              <div className="btn-group mt-3">
                <Button
                  variant={activeTab === 'Clients' ? 'primary' : 'light'}
                  className={
                    activeTab === 'Clients' ? 'fs-18 fw-600' : 'fs-18 fw-500'
                  }
                  onClick={() => setActiveTab('Clients')}
                >
                  Clients
                </Button>
                <Button
                  variant={activeTab === 'Consultants' ? 'primary' : 'light'}
                  className={
                    activeTab === 'Consultants'
                      ? 'fs-18 fw-600'
                      : 'fs-18 fw-500'
                  }
                  onClick={() => setActiveTab('Consultants')}
                >
                  Consultants
                </Button>
              </div>
            </Col>
            <Col
              xs={12}
              md={6}
              lg={7}
              className="right-section login-right"
            >
              <Row className="justify-content-end mb-4">
                <Col
                  md={11}
                  lg={9}
                >
                  <div className="review-box p-4 ">
                    <p className="text-white glowing-review">
                      With glowing reviews, we have earned a reputation for
                      excellence, reliability, and a personalized approach that
                      ensures every client and candidate feels valued.
                    </p>
                  </div>
                </Col>
              </Row>
              <Card className="testimonial-card p-4">
                <h5 className="title">Chief Information Officer</h5>
                <p className="text-gray content">
                  “Triune is a very professional resource and has exceptional
                  technical skills that span numerous applications and modules.
                  They provide well-rounded resources and are an asset to any
                  client or project team.”
                </p>
              </Card>
              <div className="navigation-buttons mt-3 d-flex gap-2 justify-content-end">
                <Button
                  variant="light"
                  className=""
                >
                  <img src={IMAGES.LeftArrowIcon} />
                </Button>
                <Button variant="light">
                  <img src={IMAGES.RightArrowIcon} />
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="mobile-div p-md-60px position-relative d-block d-md-none mb-5">
        <div className="testimonial-section">
          <Row className="gy-4 align-items-center">
            <Col
              xs={12}
              md={6}
              lg={5}
              className="left-section"
              style={{ padding: '0px 25px' }}
            >
              <img
                src={IMAGES.QotesIcon}
                height={158}
                width={180}
                className="quote"
              />
              <h2 className="hear">Hear from those we’ve worked with!</h2>
              <div className="btn-group mt-3">
                <Button
                  variant={activeTab === 'Clients' ? 'primary' : 'light'}
                  className={
                    activeTab === 'Clients' ? 'fs-18 fw-600' : 'fs-18 fw-500'
                  }
                  onClick={() => setActiveTab('Clients')}
                >
                  Clients
                </Button>
                <Button
                  variant={activeTab === 'Consultants' ? 'primary' : 'light'}
                  className={
                    activeTab === 'Consultants'
                      ? 'fs-18 fw-600'
                      : 'fs-18 fw-500'
                  }
                  onClick={() => setActiveTab('Consultants')}
                >
                  Consultants
                </Button>
              </div>
            </Col>
            <Col
              xs={12}
              md={6}
              lg={7}
              className="right-section login-right pb-4"
              style={{ padding: '0px 25px' }}
            >
              <Row className="justify-content-end mb-4">
                <Col
                  md={11}
                  lg={9}
                >
                  <div className="review-box p-4">
                    <p className="text-white glowing-review">
                      With glowing reviews, we have earned a reputation for
                      excellence, reliability, and a personalized approach that
                      ensures every client and candidate feels valued.
                    </p>
                  </div>
                </Col>
              </Row>
              <Card className="testimonial-card p-4">
                <h5 className="title">Chief Information Officer</h5>
                <p className="text-gray content">
                  “Triune is a very professional resource and has exceptional
                  technical skills that span numerous applications and modules.
                  They provide well-rounded resources and are an asset to any
                  client or project team.”
                </p>
              </Card>
              <div className="navigation-buttons mt-3 d-flex gap-2 justify-content-end">
                <Button
                  variant="light"
                  className=""
                >
                  <img src={IMAGES.LeftArrowIcon} />
                </Button>
                <Button variant="light">
                  <img src={IMAGES.RightArrowIcon} />
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <section className="container mb-5 advantage">
        <div className="text-center pb-10px">
          <Row>
            <Col xs={12}>
              <div className="text-with-pill-1px fs-15 fw-500 bg-light-blue text-dark">
                The Triune Advantage
              </div>
            </Col>
          </Row>
        </div>
        <Row className="gx-5 gy-5 align-items-md-stretch">
          <Col
            md={6}
            lg={7}
            xl={8}
          >
            <img
              src={IMAGES.AboutHero}
              alt="hero"
              height={487}
              width={737}
              className="img-fluid w-100 h-100"
              style={{ objectFit: 'cover', borderRadius: '15px' }}
            />
          </Col>
          <Col
            className="about-hero align-self-md-center align-items-sm-center align-items-md-start d-flex justify-content-center justify-content-md-start flex-column"
            md={6}
            lg={5}
            xl={4}
          >
            <h2 className="year-experience">20 Years Experience</h2>
            <p className="text-center text-md-start">
              With a proven track record and an unwavering commitment to
              excellence, Triune Infomatics delivers staffing solutions that
              exceed expectations. Experience the difference with a partner who
              prioritizes your success at every step.
            </p>
            <Button
              className="mt-md-5 mt-2 btn-about-hero"
              style={{
                backgroundColor: '#339ABC',
                border: 'none',
                height: '49px',
                width: '180px',
                fontSize: '18px',
                fontWeight: '600',
              }}
            >
              Explore more
            </Button>
          </Col>
        </Row>
      </section>
      <section className="footer">
        <div>
          <Row>
            <Col
              md={12}
              lg={12}
              xl={6}
              style={{
                backgroundColor: '#2A92B9',
                color: 'white',
                padding: '40px',
                borderTopRightRadius: '10px',
              }}
            >
              <Container className="d-flex align-items-start justify-content-center flex-column h-100">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <h1 className="transform">
                      Ready to transform your career or elevate your team?
                    </h1>
                    <Button
                      variant="outline-light"
                      className="mt-3"
                    >
                      Let's Connect
                    </Button>
                    <div className="mt-4 d-flex align-items-center">
                      <img
                        src={IMAGES.IncIcon}
                        alt="Inc. 5000"
                        style={{ marginRight: '20px' }}
                      />
                      <img
                        src={IMAGES.MbeIcon}
                        alt="MBE Certified"
                      />
                    </div>
                  </div>
                </div>
              </Container>
            </Col>
            <Col
              style={{ backgroundColor: '#EBF5F8' }}
              md={12}
              lg={12}
              xl={6}
              className="pt-4 mt-xl-5"
            >
              <div className="p-5">
                <img
                  src={IMAGES.TriuneFooterLogo}
                  alt="Triune Informatics"
                />
                <Row className="mt-3">
                  <Col
                    md={12}
                    lg={12}
                    xl={6}
                  >
                    <h5 className="main">Pages</h5>
                    <p className="sub">IT Staffing</p>
                    <p className="sub">IT Solutions Reseller</p>
                    <p className="sub">About us</p>
                    <p className="sub">Privacy policy</p>
                  </Col>
                  <Col
                    md={12}
                    lg={12}
                    xl={6}
                  >
                    <h5 className="main">Jobs</h5>
                    <p className="sub">Job Portal ↗</p>
                    <p className="sub">Referrals</p>
                  </Col>
                </Row>
                <Row
                  className="mt-3 gy-2"
                  style={{ marginBottom: '15px' }}
                >
                  <Col
                    md={12}
                    lg={12}
                    xl={6}
                  >
                    <p className="d-flex gap-3 contact">
                      <img
                        src={IMAGES.MailIcon}
                        height={28}
                        width={28}
                      />{' '}
                      admin@triuneinformatics.com
                    </p>
                  </Col>
                  <Col
                    md={12}
                    lg={12}
                    xl={6}
                  >
                    <p className="d-flex gap-3 contact">
                      <img
                        src={IMAGES.Phonecalling}
                        height={28}
                        width={28}
                      />{' '}
                      (510) 854-8766
                    </p>
                  </Col>
                  <Col
                    md={12}
                    lg={12}
                    xl={6}
                  >
                    <div className="d-flex gap-3 align-items-center contact">
                      <img
                        src={IMAGES.LocationPill}
                        height={28}
                        width={28}
                      />
                      <div>
                        {' '}
                        39111 Paseo Padre Parkway,
                        <br /> Fremont, CA 94538
                      </div>
                    </div>
                  </Col>
                  <Col
                    md={12}
                    lg={12}
                    xl={6}
                  >
                    <div className="d-flex">
                      <img
                        src={IMAGES.Facebook}
                        className="me-3"
                      />
                      <img src={IMAGES.LinkedIn} />
                    </div>
                  </Col>
                </Row>
                <div className="mt-5">
                  © 2024 All rights reserved by Triune Informatics
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default CaseStudies;

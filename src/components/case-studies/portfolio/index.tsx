import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { IMAGES } from "../../../utils/staticJSON";
import AnimatedImageWithOpacity from '../../../global/AnimatedImageWithOpacity';

const Portfolio = () => {
  return (
    <section className="section custom-blog-cursor">
      <Container>
        <Row className="gy-5">
          <Col xs={12}>
            <div className="portfolio-style2 portfolio-card">
              <Row className="align-items-center gy-4">
                <Col lg={6}>
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
                      A wellness kit on your phone! Already touching lives of
                      over 30k+ users in 75 countries.
                    </p>
                    <a
                      href="/keepappy"
                      className="btn bg-white custom-cursor"
                    >
                      Explore More
                    </a>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="grid-keepappy-view">
                    <div className="div1 justify-content-between pb-0">
                      <p>KeepAppy is a multi-featured wellness gym.</p>
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
                      <p>
                        KeepAppy is mentored by Bill & Melinda Gates Foundation.
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
                        Raised €30,000+ funding through the Kickstarter
                        platform.
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
            </div>
          </Col>

          <Col xs={12}>
            <div className="portfolio-style3 portfolio-card">
              <Row className="align-items-center gy-4">
                <Col lg={6}>
                  <div className="info-card">
                    <AnimatedImageWithOpacity
                      className="logo-img img-fluid"
                      src={IMAGES.scoreBoardCardLogo1x}
                      width="88"
                      height="78"
                      alt="logo"
                      loading="lazy"
                    />
                    <p className="main-text">
                      A fundraising platform to help athletes plan their
                      fundraising journey in USA!
                    </p>
                    <a
                      href="/scoreboard"
                      className="btn bg-white custom-cursor"
                    >
                      Explore More
                    </a>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="grid-scoreboard-view">
                    <div className="div1 pb-0 justify-content-end">
                      <AnimatedImageWithOpacity
                        className="img-fluid"
                        src={IMAGES.scoreBoardFive1x}
                        width="500"
                        height="252"
                        alt="scoreboard"
                        loading="lazy"
                      />
                    </div>
                    <div className="div2 pb-0 justify-content-end">
                      <AnimatedImageWithOpacity
                        className="img-fluid"
                        src={IMAGES.scoreBoardTwo1x}
                        width="168"
                        height="216"
                        alt="scoreboard"
                        loading="lazy"
                      />
                    </div>
                    <div className="div3 text-start align-items-start">
                      <p className="mb-1">15,000 Campaigns</p>
                      <p className="fw-normal">
                        Boosted fundraising successes!
                      </p>
                    </div>
                    <div className="div4 text-start align-items-start">
                      <p className="mb-1">$2 Million</p>
                      <p className="fw-normal">Sales in just 6 months</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={12}>
            <div className="portfolio-style2 portfolio-card portfolio-bluelilac">
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
                      <p>
                        Listed in “Top 100 Most Ambitious Companies in Ireland
                      </p>
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
                        Druid Learning was one of 6 to receive full STADIEM
                        funding.
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
            </div>
          </Col>
          <Col xs={12}>
            <div className="portfolio-style2 portfolio-style7 portfolio-card">
              <Row className="align-items-center gy-4">
                <Col lg={6}>
                  <div className="info-card">
                    <AnimatedImageWithOpacity
                      className="logo-img img-fluid"
                      src={IMAGES.inPractiseLogo}
                      width="146"
                      height="83"
                      alt="logo"
                      loading="lazy"
                    />
                    <p className="main-text">
                      A cutting-edge financial audit platform built for SMEs.
                    </p>
                    <a
                      href="/inpractice"
                      className="btn bg-white custom-cursor"
                    >
                      Explore More
                    </a>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="grid-keepappy-view grid-inPractise-view">
                    <div className="div1 ps-3 pe-0 justify-content-start">
                      <div className="pe-3">
                        <p className="mb-2 fs-15">Why InPractise?</p>
                        <p className="fs-15 fw-normal mb-4">
                          This cloud-based audit tool enhances efficiency &
                          profitability by preventing under- & over-auditing,
                          with dynamic time budgeting & reduce fee write-offs.
                        </p>
                      </div>
                      <AnimatedImageWithOpacity
                        className="img-fluid"
                        src={IMAGES.inPractisehalfLaptop}
                        width="405"
                        height="244"
                        alt="img"
                        loading="lazy"
                      />
                    </div>
                    <div className="div2 px-3">
                      <p className="mb-2 fs-15">Features</p>
                      <Row className="gy-2 mb-4">
                        <Col
                          md={6}
                          lg={12}
                          xl={6}
                        >
                          <div className="d-flex align-items-center gap-2">
                            <AnimatedImageWithOpacity
                              src={IMAGES.auditManagement}
                              width="20"
                              height="20"
                              alt="audit"
                            />
                            <span className="fs-12 text-start">
                              Audit Management
                            </span>
                          </div>
                        </Col>
                        <Col
                          md={6}
                          lg={12}
                          xl={6}
                        >
                          <div className="d-flex align-items-center gap-2">
                            <AnimatedImageWithOpacity
                              src={IMAGES.efficientEngagement}
                              width="20"
                              height="20"
                              alt="efficient"
                            />
                            <span className="fs-12 text-start">
                              Efficient User Engagement
                            </span>
                          </div>
                        </Col>
                      </Row>
                      <AnimatedImageWithOpacity
                        className="img-fluid"
                        src={IMAGES.inpractiseLaptop}
                        width="329"
                        height="199"
                        alt="img"
                        loading="lazy"
                      />
                    </div>
                    <div className="div3 px-3 align-items-start">
                      <p className="fs-15">
                        Dynamic audit files with auto-updates, ISA-compliant
                        planning, & simplified revenue recognition tools.
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={12}>
            <div className="portfolio-style1 portfolio-card">
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
                        Eliminate inefficiencies and foster partnerships that
                        drive success
                      </p>
                    </div>
                    <div className="div2 justify-content-end align-items-end pb-0 pe-0">
                      <AnimatedImageWithOpacity
                        className="img-fluid"
                        src={IMAGES.uTradeLaptop1x}
                        width="330"
                        height="228"
                        alt="uTrade"
                        loading="lazy"
                      />
                    </div>
                    <div className="div3 justify-content-between pb-0">
                      <p>Direct Connections for Suppliers and Retailers</p>
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
                        <div className="col d-flex flex-column flex-center">
                          <p className="lh-1">10M +</p>
                          <p className="fs-14 fw-normal">Transactions</p>
                        </div>
                        <div className="col d-flex flex-column flex-center">
                          <p className="lh-1">75% yearly</p>
                          <p className="fs-14 fw-normal">Business Growth</p>
                        </div>
                        <div className="col d-flex flex-column flex-center">
                          <p className="lh-1">1000+</p>
                          <p className="fs-14 fw-normal">Orders everyday</p>
                        </div>
                        <div className="col d-flex flex-column flex-center">
                          <p className="lh-1">99%</p>
                          <p className="fs-14 fw-normal">Satisfaction ratio</p>
                        </div>
                      </Row>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={12}>
            <div className="portfolio-style1 portfolio-card portfolio-lightorange">
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
                      Connecting schools with qualified education staff—just
                      Look, Click, Book!
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
                      <p>
                        A vision to change the educational hiring landscape!
                      </p>
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
                        <Col
                          lg={4}
                          className="d-flex flex-column flex-center"
                        >
                          <p className="lh-1">10K Teachers</p>
                          <p className="fs-14 fw-normal">
                            Placed weekly on average!
                          </p>
                        </Col>
                        <Col
                          lg={4}
                          className="d-flex flex-column flex-center"
                        >
                          <p className="lh-1">48k+</p>
                          <p className="fs-14 fw-normal">
                            Teaching hours every day!
                          </p>
                        </Col>
                        <Col
                          lg={4}
                          className=" d-flex flex-column flex-center"
                        >
                          <p className="lh-1">99%</p>
                          <p className="fs-14 fw-normal">Satisfaction ratio</p>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={12}>
            <div className="portfolio-style2 portfolio-style7 portfolio-card portfolio-navy">
              <Row className="align-items-center gy-4">
                <Col lg={6}>
                  <div className="info-card">
                    <AnimatedImageWithOpacity
                      className="logo-img img-fluid"
                      src={IMAGES.nameDownLogo}
                      width="191"
                      height="38"
                      alt="logo"
                      loading="lazy"
                    />
                    <p className="main-text">
                      Connecting parents and schools seamlessly for streamlined
                      admissions.
                    </p>
                    <a
                      href="/namedown"
                      className="btn bg-white custom-cursor"
                    >
                      Explore More
                    </a>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="grid-keepappy-view grid-namedown-view">
                    <div className="div1 ps-3 pe-0 justify-content-start">
                      <div className="pe-3">
                        <p className="mb-2 fs-15">Why NameDown?</p>
                        <p className="fs-15 fw-normal mb-4">
                          NameDown simplifies school admissions by allowing
                          parents to search, apply, & access resources and
                          allows schools manage profiles & applications.
                        </p>
                      </div>
                      <AnimatedImageWithOpacity
                        className="img-fluid ms-auto"
                        src={IMAGES.nameDownHalfLaptop}
                        width="405"
                        height="244"
                        alt="img"
                        loading="lazy"
                      />
                    </div>
                    <div className="div2 px-3">
                      <p className="mb-2 fs-15">Features</p>
                      <Row className="gy-2 mb-4">
                        <Col
                          md={6}
                          lg={12}
                          xl={6}
                        >
                          <div className="d-flex align-items-center gap-2">
                            <AnimatedImageWithOpacity
                              src={IMAGES.twoDistinctInterface}
                              width="20"
                              height="20"
                              alt="two-distinct"
                            />
                            <span className="fs-12 text-start">
                              Two Distinct Interface
                            </span>
                          </div>
                        </Col>
                        <Col
                          md={6}
                          lg={12}
                          xl={6}
                        >
                          <div className="d-flex align-items-center gap-2">
                            <AnimatedImageWithOpacity
                              src={IMAGES.userFriendlyDesign}
                              width="20"
                              height="20"
                              alt="user-friendly"
                            />
                            <span className="fs-12 text-start">
                              User Friendly Design
                            </span>
                          </div>
                        </Col>
                      </Row>
                      <AnimatedImageWithOpacity
                        className="img-fluid"
                        src={IMAGES.nameDownLaptop}
                        width="329"
                        height="199"
                        alt="img"
                        loading="lazy"
                      />
                    </div>
                    <div className="div3 px-3 align-items-start">
                      <p className="fs-15">
                        Schools on NameDown can register, customize forms,
                        manage applications, and update information efficiently.
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={12}>
            <div className="portfolio-style3 portfolio-card portfolio-lightmorpich">
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
                      An AR & 3D gaming tool that makes learning hand hygiene
                      fun for kids.
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
            </div>
          </Col>
          <Col xs={12}>
            <div className="portfolio-style2 portfolio-card portfolio-greenapple">
              <Row className="align-items-center gy-4">
                <Col lg={6}>
                  <div className="info-card">
                    <AnimatedImageWithOpacity
                      className="logo-img img-fluid"
                      src={IMAGES.mosaicLogo}
                      width="79"
                      height="90"
                      alt="logo"
                      loading="lazy"
                    />
                    <p className="main-text">
                      A platform where teachers can update parents about their
                      child’s daily activities
                    </p>
                    <a
                      href="/mosaic"
                      className="btn bg-white custom-cursor"
                    >
                      Explore More
                    </a>
                  </div>
                </Col>
                <Col
                  lg={6}
                  className=""
                >
                  <div className="grid-keepappy-view grid-mosaic-view">
                    <div className="div1 justify-content-end align-items-end pb-0">
                      <img
                        className="img-fluid ms-auto"
                        src={IMAGES.mosaicMobile}
                        width="220"
                        height="300"
                        alt="img"
                        loading="lazy"
                      />
                    </div>
                    <div className="div2">
                      <p>
                        Named Leading Startup at the Ireland Rising Business
                        Star Awards for innovation and impact.
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
                        Supported 1,500 parents, 85 schools, and 5,000 children
                        in effective learning and skill development within 5
                        months.
                      </p>
                    </div>
                    <div className="div4 pb-0 justify-content-end">
                      <AnimatedImageWithOpacity
                        className="img-fluid"
                        src={IMAGES.mosaicTwoMobile}
                        width="270"
                        height="318"
                        alt="img"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={12}>
            <div className="portfolio-style3 portfolio-card portfolio-lightpink">
              <Row className="align-items-center gy-4">
                <Col lg={6}>
                  <div className="info-card">
                    <AnimatedImageWithOpacity
                      className="logo-img img-fluid"
                      src={IMAGES.teachkloudLogo}
                      width="165"
                      height="88"
                      alt="logo"
                      loading="lazy"
                    />
                    <p className="main-text">
                      An app for educators to focus on what they love! Saved 60%
                      time in admin & compliance!
                    </p>
                    <a
                      href="/teach-kloud"
                      className="btn bg-white custom-cursor"
                    >
                      Explore More
                    </a>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="grid-scoreboard-view grid-teachkloud-view">
                    <div className="div1 pb-0 justify-content-end">
                      <AnimatedImageWithOpacity
                        className="img-fluid"
                        src={IMAGES.teachkloudM5}
                        width="504"
                        height="308"
                        alt="scoreboard"
                        loading="lazy"
                      />
                    </div>
                    <div className="div2 pe-0 align-items-end">
                      <AnimatedImageWithOpacity
                        className="img-fluid w-100"
                        src={IMAGES.teachkloudMobileLaptop}
                        width="329"
                        height="198"
                        alt="teachkloud"
                        loading="lazy"
                      />
                    </div>
                    <div className="div3 text-start align-items-start">
                      <p className="mb-1"> €750K Funding Raised</p>
                      <p className="fw-normal">
                        TeachKloud has €750K raised for early childhood services
                      </p>
                    </div>
                    <div className="div4 text-start align-items-start">
                      <p className="mb-1">Among Top 30</p>
                      <p className="fw-normal">Under 30 Irish Rising Stars</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={12}>
            <div className="portfolio-style2 portfolio-card portfolio-bluesqueeze">
              <Row className="align-items-center gy-4">
                <Col lg={6}>
                  <div className="info-card">
                    <AnimatedImageWithOpacity
                      className="logo-img img-fluid"
                      src={IMAGES.examflyLogo}
                      width="170"
                      height="70"
                      alt="logo"
                      loading="lazy"
                    />
                    <p className="main-text">
                      Ease tax and accounting studies for professionals with our
                      interactive platform.
                    </p>
                    <a
                      href="/examfly"
                      className="btn bg-white custom-cursor"
                    >
                      Explore More
                    </a>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="grid-keepappy-view grid-examfly-view">
                    <div className="div1 justify-content-between pb-0">
                      <p>Revolutionizing Tax & Accounting Learning</p>
                      <AnimatedImageWithOpacity
                        className="img-fluid ms-auto"
                        src={IMAGES.examflyMobile}
                        width="220"
                        height="300"
                        alt="img"
                        loading="lazy"
                      />
                    </div>
                    <div className="div2">
                      <p>
                        Won Best New Start-Up at the InterTradeIreland Seedcorn
                        Investor Competition.
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
                        Examfly is supported by Bolton Trust and Enterprise
                        Ireland, won Bronze in 2021 and improved pass rates by
                        10%.
                      </p>
                    </div>
                    <div className="div4 pb-0 justify-content-end">
                      <AnimatedImageWithOpacity
                        className="img-fluid"
                        src={IMAGES.examflyTwoMobile}
                        width="270"
                        height="318"
                        alt="img"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={12}>
            <div className="portfolio-style3 portfolio-card portfolio-lightbrown">
              <Row className="align-items-center gy-4">
                <Col lg={6}>
                  <div className="info-card">
                    <AnimatedImageWithOpacity
                      className="logo-img img-fluid"
                      src={IMAGES.donaghmoreMuseumLogo}
                      width="185"
                      height="77"
                      alt="logo"
                      loading="lazy"
                    />
                    <p className="main-text">
                      Lay your eyes on 300 years old artefacts coming to life at
                      Donaghmore Museum!
                    </p>
                    <a
                      href="/donaghmore"
                      className="btn bg-white custom-cursor"
                    >
                      Explore More
                    </a>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="grid-scoreboard-view grid-donaghmore-view">
                    <div className="div1 pb-0 justify-content-end">
                      <AnimatedImageWithOpacity
                        className="img-fluid"
                        src={IMAGES.donaghmoreFive}
                        width="500"
                        height="253"
                        alt="scoreboard"
                        loading="lazy"
                      />
                    </div>
                    <div className="div2 pb-0 justify-content-end">
                      <AnimatedImageWithOpacity
                        className="img-fluid"
                        src={IMAGES.donaghmoreMobileTwo}
                        width="191"
                        height="281"
                        alt="donaghmore"
                        loading="lazy"
                      />
                    </div>
                    <div className="div3 text-start align-items-start py-3 px-4">
                      <p className="fw-500">Increased Attraction</p>
                      <p className="fw-normal">By 50% all over the world!</p>
                    </div>
                    <div className="div4 text-start align-items-start py-3 px-4">
                      <p className="fw-500">Gained national recognition</p>
                      <p className="fw-normal">
                        First of its kind in rural Ireland.
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={12}>
            <div className="portfolio-style3 portfolio-card portfolio-bluecatskill">
              <Row className="align-items-center gy-4">
                <Col lg={6}>
                  <div className="info-card">
                    <AnimatedImageWithOpacity
                      className="logo-img img-fluid"
                      src={IMAGES.ITCarlowLogo}
                      width="178"
                      height="90"
                      alt="logo"
                      loading="lazy"
                    />
                    <p className="main-text">
                      An excellent & comprehensive guide app for students of IT
                      Carlow!
                    </p>
                    <a
                      href="/ITCarlow"
                      className="btn bg-white custom-cursor"
                    >
                      Explore More
                    </a>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="grid-scoreboard-view grid-carlow-view">
                    <div className="div1 pb-0 justify-content-end">
                      <AnimatedImageWithOpacity
                        className="img-fluid"
                        src={IMAGES.CarlowM5}
                        width="504"
                        height="308"
                        alt="scoreboard"
                        loading="lazy"
                      />
                    </div>
                    <div className="div2 bg-carlow pb-0 justify-content-end">
                      <AnimatedImageWithOpacity
                        className="img-fluid"
                        src={IMAGES.carlowMobile}
                        width="116"
                        height="231"
                        alt="carlow"
                        loading="lazy"
                      />
                    </div>
                    <div className="div3 text-start align-items-start">
                      <p className="fw-normal">
                        Cloud-based app for effortless information storage with
                        FAQs, links, and PDFs.
                      </p>
                    </div>
                    <div className="div4 text-start align-items-start">
                      <p className="fw-normal">
                        Real-time updates delivered through push notifications.
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={12}>
            <div className="portfolio-style2 portfolio-card portfolio-ottomangreen">
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
                      Ethicart! A complete solution to practice ethical
                      purchasing!
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
                        Ireland Rising Business Star at Web Summit 2020, praised
                        for UX, and partnered with UPS at Trinity College.
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
            </div>
          </Col>
          <Col xs={12}>
            <div className="portfolio-style3 portfolio-card portfolio-blueathens">
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
                      An interactive multi-lingual tour guide app for tourists
                      who are visiting Ireland!
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
                        Multilingual and Offline Access Supports English,
                        French, Italian, German,Spanish & Many more
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
            </div>
          </Col>
          <Col xs={12}>
            <div className="portfolio-style2 portfolio-card portfolio-graygallery">
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
                      A 94 page catalogue turned into an app! Enables quick
                      booking of tiles.
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
            </div>
          </Col>
          <Col xs={12}>
            <div className="portfolio-style3 portfolio-card portfolio-bluecatskill">
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
                        Consistent Rating of 4.7+ & ties with Global
                        Humanitarian Org.
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={12}>
            <div className="portfolio-style1 portfolio-card portfolio-nursegreen">
              <Row className="align-items-center gy-4">
                <Col lg={6}>
                  <div className="info-card">
                    <AnimatedImageWithOpacity
                      className="logo-img img-fluid"
                      src={IMAGES.kemasLogo}
                      width="97"
                      height="84"
                      alt="logo"
                      loading="lazy"
                    />
                    <p className="main-text">
                      KEMAS - Software to help the Indian army maintain
                      inventory & service logs.
                    </p>
                    <a
                      href="/kemas"
                      className="btn bg-white custom-cursor"
                    >
                      Explore More
                    </a>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="grid-utrade-view grid-kemas-view">
                    <div className="div1">
                      <p>
                        Eliminate inefficiencies and foster partnerships that
                        drive success
                      </p>
                    </div>
                    <div className="div2 bg-kemas justify-content-end p-3">
                      <p>
                        The Golden Katar Regiment's KEMAS tracks and analyzes
                        arms and equipment.
                      </p>
                    </div>
                    <div className="div3 justify-content-between">
                      <p>Certificate of Excellence by Indian Army</p>
                      <AnimatedImageWithOpacity
                        className="img-fluid mt-3"
                        src={IMAGES.kemasAward}
                        width="176"
                        height="250"
                        alt="kemas"
                        loading="lazy"
                      />
                    </div>
                    <div className="div4">
                      <Row className="row-cols-2 row-cols-sm-auto justify-content-between align-items-center gy-3">
                        <Col
                          lg={4}
                          className="d-flex flex-column flex-center"
                        >
                          <p className="lh-1">12+</p>
                          <p className="fs-14 fw-normal">
                            Battalions Uses Kemas
                          </p>
                        </Col>
                        <Col
                          lg={4}
                          className="d-flex flex-column flex-center"
                        >
                          <p className="lh-1">75%</p>
                          <p className="fs-14 fw-normal">
                            Increase in Efficiency
                          </p>
                        </Col>
                        <Col
                          lg={4}
                          className="d-flex flex-column flex-center"
                        >
                          <p className="lh-1">100%</p>
                          <p className="fs-14 fw-normal">Secure and Reliable</p>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;

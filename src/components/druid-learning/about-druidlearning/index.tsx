import { Card, Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { IMAGES } from "../../../utils/staticJSON";
import "tiny-slider/dist/tiny-slider.css";
import AnimatedImageWithOpacity from '../../../global/AnimatedImageWithOpacity';

const AboutDruidLearning = () => {
  return (
    <>
      <section className="section pb-0 custom-blog-cursor">
        <Container className="text-center">
          <h2 className="fs-32 fw-700 mb-3">
            About{' '}
            <span className="druidlearning-primary-color">DruidLearning</span>
          </h2>
          <p className="fs-20 fw-400">
            Druid Learning innovatively harnesses AI to redefine content
            management and distribution. Equipped with an array of tools
            including an Enterprise Content Management System, LMS & Courseware
            Platform, and E-Commerce Platform, their technology is pivotal for
            industries grappling with digital transformation.
          </p>
          <p className="fs-20 fw-400 mb-5">
            Druid Learning is designed to excel in automating the intricate
            process of organising and categorising extensive digital data. Their
            solutions empower businesses to efficiently manage, tag, and index
            digital assets, turning voluminous content repositories into
            streamlined, metadata-rich resources. This capability is crucial for
            companies looking to optimise their digital assets for AI
            integration and enhanced accessibility.
          </p>
        </Container>
      </section>
      <section className="druidlearning-primary-bg-light py-4 custom-blog-cursor">
        <Container>
          <h2 className="fs-32 fw-400 mb-3 text-center">
            Vision behind{' '}
            <span className="druidlearning-primary-color">Druid Learning</span>
          </h2>
          <Row className="align-items-center my-4 py-4 gy-4">
            <Col
              md={6}
              lg={6}
            >
              <div className="card br-12px p-lg-4">
                <div className="card-body d-flex flex-column align-items-center">
                  <AnimatedImageWithOpacity
                    className="img-fluid"
                    src={IMAGES.druidLearningVision1}
                    width="390"
                    height="288"
                    alt="utrade"
                    loading="lazy"
                  />
                  <h3 className="fs-26 fw-700 my-3">The Challenge</h3>
                  <p className="fs-20 fw-400 text-center">
                    The digital era has brought a deluge of content, creating a
                    complex database for companies trying to manage and utilise
                    their digital assets. There was a need for a system that
                    could organise and enrich extensive digital content with
                    metadata, making it both accessible and functional for the
                    demands of AI.
                  </p>
                </div>
              </div>
            </Col>
            <Col
              md={6}
              lg={6}
            >
              <div className="card br-12px p-lg-4">
                <div className="card-body d-flex flex-column align-items-center p-4">
                  <AnimatedImageWithOpacity
                    className="img-fluid"
                    src={IMAGES.druidLearningVision2}
                    width="390"
                    height="288"
                    alt="utrade"
                    loading="lazy"
                  />
                  <h3 className="fs-26 fw-700 mt-3 mb-2">
                    Niamh Faller’s Insight
                  </h3>
                  <p className="fs-20 fw-400 text-center">
                    Recognising this pressing need, Niamh Faller, the founder of
                    Druid Learning, envisioned a solution. She saw the potential
                    of using AI to transform the way companies handle their
                    data. The goal was not just to manage data but to empower
                    organisations to utilise this data to their full potential.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="druidlearning-primary-bg custom-blog-cursor">
        <div className="">
          <Container>
            <Row className="justify-content-center py-4">
              <Col
                lg={9}
                className="mx-auto"
              >
                <div className="section-title text-center text-white my-4">
                  <h2 className="fs-32 fw-bold mb-20">
                    Druid Learning’s Solution
                  </h2>
                  <p className="fs-20">
                    Under Faller’s guidance, Druid Learning emerged with a
                    pioneering approach. We developed tools that could transform
                    unstructured content data and layer metadata into organised,
                    categorised databases, which can be searched, distributed,
                    and published easily.
                  </p>
                </div>
              </Col>
              <Col
                xs={12}
                lg={10}
                className="text-center pb-40 mb-4"
              >
                <AnimatedImageWithOpacity
                  className="img-fluid lazy"
                  loading="lazy"
                  src={IMAGES.druidLearningSolution}
                  width="1020"
                  height="605"
                  alt="Druid Learning’s Solution"
                />
              </Col>
              <Col
                lg={9}
                className="mx-auto"
              >
                <div className="section-title mt-0 text-center text-white">
                  <p className="fs-20">
                    This meant that searching across entire databases became
                    time-efficient, IT integration costs were reduced, and
                    companies could create AI training sets from their internal
                    content sources.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <section className="py-4 custom-blog-cursor">
        <Container>
          <h2 className="fs-32 fw-bold mb-20 text-center">
            Druid’s journey with us
          </h2>
          <Row className="align-items-stretch gy-4 mb-30">
            <Col
              lg={6}
              className="align-self-center py-lg-4"
            >
              <h3 className="fs-26 fw-700 mb-3">UI/UX Design phase</h3>
              <p className="fs-20 text-start mb-0">
                In this phase, our focus was on crafting a user-friendly design
                for Druid Learning’s iOS and Android apps, as well as the
                web-based admin interface. The admin portal was developed to
                offer efficient control, integrating features for content
                management and analytics. For the mobile applications, the
                emphasis was on ensuring accessibility and ease of use,
                enhancing user interaction with the content management tools.
              </p>
            </Col>
            <Col lg={6}>
              <AnimatedImageWithOpacity
                className="img-fluid fit-img"
                src={IMAGES.druidLearningDesignPhase}
                width="390"
                height="288"
                alt="utrade"
                loading="lazy"
              />
            </Col>
          </Row>
          <Row className="align-items-stretch gy-4 mb-30">
            <Col
              lg={6}
              className="align-self-center py-lg-4"
            >
              <h3 className="fs-26 fw-700 mb-3">Development phase</h3>
              <p className="fs-20 text-start mb-0">
                Our team dedicated efforts to enhancing the overall user
                experience by implementing robust backend systems. This involved
                efficient data processing, storage, and real-time updates, all
                crucial for managing extensive digital content databases.
                Advanced algorithms and analytics were integrated to enable
                precise content categorisation and management, reflecting the
                AI-driven focus of Druid Learning’s platform.
              </p>
            </Col>
            <Col
              lg={6}
              className="order-lg-first"
            >
              <AnimatedImageWithOpacity
                className="img-fluid fit-img"
                src={IMAGES.druidLearningDevelopmentPhase}
                width="390"
                height="288"
                alt="utrade"
                loading="lazy"
              />
            </Col>
          </Row>
          <Row className="align-items-stretch gy-4">
            <Col
              lg={6}
              className="align-self-center py-lg-4"
            >
              <h3 className="fs-26 fw-700 mb-3">Quality assurance phase</h3>
              <p className="fs-20 text-start mb-0">
                Throughout the Quality Assurance phase, our dedicated team
                conducted thorough testing to guarantee seamless functionality
                across all platforms. Employing continuous testing and automated
                frameworks, we ensured the stability and reliability of the
                Druid Learning platforms. User Acceptance Testing (UAT) played a
                key role, allowing us to gather direct feedback and make
                iterative refinements, aligning the final product closely with
                user needs and expectations.
              </p>
            </Col>
            <Col lg={6}>
              <AnimatedImageWithOpacity
                className="img-fluid fit-img"
                src={IMAGES.druidLearningQualityAssurancePhase}
                width="390"
                height="288"
                alt="utrade"
                loading="lazy"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="druidlearning-primary-bg-light py-4 custom-blog-cursor">
        <Container>
          <h2 className="fs-32 fw-700 my-3 text-center">
            Features that make the platform unique
          </h2>
          <Row className="align-items-stretch gy-4 mb-30">
            <Col
              lg={6}
              className="align-self-center py-lg-4"
            >
              <h3 className="fs-26 fw-700 mb-3 text-start">
                Enterprise Content Management System
              </h3>
              <p className="mb-20 fs-20 text-start">
                <strong>Our contribution:</strong> We worked closely with Druid
                Learning to develop an advanced content structuring feature in
                their Enterprise Content Management System. This system now
                enables:
              </p>
              <ul className="liststyle bullet fs-20 ps-4 text-start">
                <li className="mb-20">
                  <strong>Efficient Content Organisation:</strong> Simplifying
                  the break down and categorisation of large content volumes.
                </li>
                <li className="mb-20">
                  <strong>Enhanced Search Capabilities:</strong> Through our
                  expertise, the system now supports advanced tagging and
                  indexing, improving content discoverability.
                </li>
                <li>
                  <strong>Ready for AI Integration:</strong> We helped integrate
                  metadata processing, making content AI-ready.
                </li>
              </ul>
            </Col>
            <Col lg={6}>
              <AnimatedImageWithOpacity
                className="img-fluid fit-img"
                src={IMAGES.druidLearningEnterprise}
                width="390"
                height="288"
                alt="utrade"
                loading="lazy"
              />
            </Col>
          </Row>
          <Row className="align-items-stretch gy-4 mb-30">
            <Col
              lg={6}
              className="align-self-center py-lg-4"
            >
              <h3 className="fs-26 fw-700 mb-3 text-start">
                Learning & Courseware Management System
              </h3>
              <p className="fs-20 text-start">
                <strong>Our role:</strong> Our team played a key role in
                designing the Learning & Courseware Management tool with
                features that:
              </p>
              <ul className="liststyle bullet fs-20 ps-4 text-start">
                <li className="mb-20">
                  <strong>Support Multi-Device Accessibility:</strong> Ensuring
                  content is available across various platforms.
                </li>
                <li className="mb-20">
                  <strong>Enable Custom Branding:</strong> We added
                  customisation options for a more personalised user experience.
                </li>
                <li>
                  <strong>Manage Content Pricing and Access:</strong> Our
                  solutions provide flexibility in content monetisation and
                  access control.
                </li>
              </ul>
            </Col>
            <Col
              lg={6}
              className="order-lg-first"
            >
              <AnimatedImageWithOpacity
                className="img-fluid fit-img"
                src={IMAGES.druidLearningCourseWave}
                width="390"
                height="288"
                alt="utrade"
                loading="lazy"
              />
            </Col>
          </Row>
          <Row className="align-items-stretch gy-4 mb-30">
            <Col
              lg={6}
              className="align-self-center py-lg-4"
            >
              <h3 className="fs-26 fw-700 mb-3 text-start">
                E-Commerce & Distribution Platform
              </h3>
              <p className="fs-20 text-start">
                <strong>Our impact:</strong> In developing the E-Commerce &
                Distribution Platform, we focused on:
              </p>
              <ul className="liststyle bullet fs-20 ps-4 text-start">
                <li className="mb-20">
                  <strong>Advanced Access Control:</strong> Facilitating
                  granular control over content accessibility.
                </li>
                <li>
                  <strong>User Engagement Tools:</strong> We enhanced the
                  platform to support various multimedia formats for engaging
                  user experiences.
                </li>
              </ul>
            </Col>
            <Col lg={6}>
              <AnimatedImageWithOpacity
                className="img-fluid fit-img"
                src={IMAGES.druidLearningEcommerce}
                width="390"
                height="288"
                alt="utrade"
                loading="lazy"
              />
            </Col>
          </Row>
        </Container>
      </section>
      {/* <section className='my-4'>
        <Container>
          <h3 className='fs-32 fw-700 text-center mb-5'>
            Communication &{" "}
            <span className='druidlearning-primary-color'>Documentation</span>
          </h3>
          <Row className='justify-content-center'>
            <Col md={6} lg={5} className='d-flex flex-column align-items-center'>
              <div className='card card-body druidlearning-primary-bg-light p-4'>
                <h4 className='fs-18 fw-700 text-center'>Notification System</h4>
                <p className='fs-18 fw-400 mb-0 text-center'>
                  An intuitive notification system that alerts users to changes, upgrades, or important messages, all accessible via a bell-shaped icon.
                </p>
              </div>
            </Col>
            <Col md={6} lg={5} className='d-flex flex-column align-items-center'>
              <div className='card card-body druidlearning-primary-bg-light p-4'>
                <h4 className='fs-18 fw-700 mb-2 text-center'>Print Options</h4>
                <p className='fs-18 fw-400 mb-0 text-center'>
                  Provides flexibility to print documents directly from the platform, supporting both partial and complete file prints.
                </p>
              </div>
            </Col>
          </Row>

        </Container>
      </section> */}
      <section className="mt-4 custom-blog-cursor">
        <div className="ptb--80 druidlearning-primary-bg">
          <div className="container testimonial-druidlearning-card text-white">
            <p className="fs-22 fw-400 mb-4">
              Working with them was an absolute pleasure. They provided
              top-notch support, ensuring our software was up and running
              smoothly at all times. Their technical expertise and ability to
              meet tight deadlines are second to none.
            </p>
            <Row className="align-items-center gx-lg-3">
              <Col sm="auto">
                <AnimatedImageWithOpacity
                  className="img-fluid"
                  src={IMAGES.druidLearningFounder}
                  width="70"
                  height="70"
                  alt="avtar"
                  loading="lazy"
                />
              </Col>
              <Col>
                <h4 className="fs-18 fw-500 mb-1">Niamh Faller</h4>
                <h5 className="fs-14 fw-400 mb-0">Founder of Druid Learning</h5>
              </Col>
            </Row>
          </div>
        </div>
      </section>
      <section className="section custom-blog-cursor">
        <Container>
          <h2 className="fs-32 fw-700 my-3 text-center">
            Technical challenges in developing{' '}
            <span className="druidlearning-primary-color">
              Druid Learning’s
            </span>{' '}
            platforms
          </h2>
          <Row className="justify-content-center text-center mt-4">
            <Col
              md={6}
              className="d-flex mb-30"
            >
              <Card className="shadow-none br-15px w-100">
                <Card.Body className="p-lg-40">
                  <AnimatedImageWithOpacity
                    src={IMAGES.druidLearningAiDriven}
                    className="img-fluid lazy img-margin-bottom15"
                    loading="lazy"
                    width="70"
                    height="70"
                    alt="AI-driven"
                  />
                  <p className="fs-20 text-center">
                    Implementing AI-driven algorithms to automatically
                    categorise vast amounts of digital content required
                    precision to ensure accuracy and efficiency.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col
              md={6}
              className="d-flex mb-30"
            >
              <Card className="shadow-none br-15px w-100">
                <Card.Body className="p-lg-40">
                  <AnimatedImageWithOpacity
                    src={IMAGES.druidLearningSystemIntegrates}
                    className="img-fluid lazy img-margin-bottom15"
                    loading="lazy"
                    width="70"
                    height="70"
                    alt="system integrates"
                  />
                  <p className="fs-20 text-center">
                    Creating a system that integrates metadata into digital
                    assets posed significant technical challenges, particularly
                    in maintaining data integrity & consistency.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col
              md={6}
              className="d-flex mb-30 mb-md-0"
            >
              <Card className="shadow-none br-15px w-100">
                <Card.Body className="p-lg-40">
                  <AnimatedImageWithOpacity
                    src={IMAGES.druidLearningSearchFunctionalities}
                    className="img-fluid lazy img-margin-bottom15"
                    loading="lazy"
                    width="70"
                    height="70"
                    alt="search functionalities"
                  />
                  <p className="fs-20 text-center">
                    Developing enhanced search functionalities using tags and
                    keywords involved intricate programming to handle large
                    datasets while ensuring relevant results.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col
              md={6}
              className="d-flex mb-30 mb-md-0"
            >
              <Card className="shadow-none br-15px w-100">
                <Card.Body className="p-lg-40">
                  <AnimatedImageWithOpacity
                    src={IMAGES.druidLearningSensitivity}
                    className="img-fluid lazy img-margin-bottom15"
                    loading="lazy"
                    width="70"
                    height="70"
                    alt="sensitivity digital"
                  />
                  <p className="fs-20 text-center">
                    Given the sensitivity of digital content, implementing
                    robust security measures to protect data privacy was a
                    critical and complex aspect of the project.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="druidlearning-primary-bg py-5 custom-blog-cursor">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="section-title text-white">
                <h2 className="fs-32 fw-bold my-4 text-center">
                  Here’s a glimpse into what Druid Learning has achieved so far
                </h2>
                <ul className="liststyle bullet bullet-white row fs-20 text-white">
                  <li className="col-lg-6 p-3">
                    Listed in “Top 100 Most Ambitious Companies in Ireland”
                  </li>
                  <li className="col-lg-6 p-3">
                    Secured a place in the finals of the “National Startup
                    Awards”
                  </li>
                  <li className="col-lg-6 p-3">
                    Received, Irish and EU funding and actively raised a
                    pre-seed round.
                  </li>
                  <li className="col-lg-6 p-3">
                    Out of 40 companies, Druid Learning was one of the final 6
                    to receive full funding from STADIEM.
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="portfolio-style2 portfolio-style7 portfolio-card section custom-blog-cursor">
        <Container className="my-5">
          <div className="title-box text-center mb-5">
            <h2 className="title-2 mb-0">Read Next</h2>
          </div>
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
                      profitability by preventing under- & over-auditing, with
                      dynamic time budgeting & reduce fee write-offs.
                    </p>
                  </div>
                  <AnimatedImageWithOpacity
                    className="img-fluid ms-auto"
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
        </Container>
      </section>
    </>
  );
};

export default AboutDruidLearning;

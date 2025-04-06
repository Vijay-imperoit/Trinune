import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { IMAGES } from "../../../utils/staticJSON";
import AnimatedImage from '../../../global/AnimatedImage';

const Featured = () => {
  return (
    <section className='section our-services-section-achievement custom-blog-cursor-white'>
      <Container>
        <Row>
          <Col lg={4} className='gx-2 '>
            <div className='title-box'>
              <h2 className='title-2 text-white'>We are featured in</h2>
              <p className='text-dark-gray'>
                for our groundbreaking innovations and commitment to excellence.
              </p>
            </div>
          </Col>
          <Col lg={8}>
            <div className='our-work-box-achievement'>
              <Row className='align-items-center'>
                <Col md={7}>
                  <div className='d-flex gap-4'>
                    <p className='number-text'>01</p>
                    <div>
                      <h3 className='title'>
                        Recognised as Top Mobile App Development Company by
                        Clutch
                      </h3>
                      <div className='our-footer'>
                        <p className='text'>
                          With 4.9/5 ratings and 30+ verified reviews, our
                          impeccable & extraordinary work made us win accolades
                          and the recognition of Top Mobile App Development
                          Company for 2 consecutive years. Cheers!
                        </p>
                        {/* <a
                          href="/mobile-app-development"
                          className="fs-16 fw-500 text-white"
                        >
                          Learn More
                          <AnimatedImage
                            className="img-fluid"
                            src={IMAGES.rightWayArrow}
                            width="20"
                            height="20"
                            alt="arrow-right"
                            loading="lazy"
                          />
                        </a> */}
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={4} className='offset-lg-1'>
                  <div className='img-box d-none d-md-block text-md-end'>
                    <AnimatedImage
                      className='img-fluid'
                      src={IMAGES.clutchAward}
                      width='200'
                      height='100'
                      alt='awards'
                      loading='lazy'
                    />
                  </div>
                </Col>
              </Row>
            </div>
            <div className='our-work-box-achievement'>
              <Row className='align-items-center'>
                <Col md={7}>
                  <div className='d-flex gap-4'>
                    <p className='number-text'>02</p>
                    <div>
                      <h3 className='title'>
                        Our app KeepAppy was selected for mentorship by Melinda
                        & Bill Gates foundation.
                      </h3>
                      <div className='our-footer'>
                        <p className='text'>
                          An app that empowers users to take control over their
                          mental health - KeepAppy was applauded all over
                          Twitter for its excellent UI/UX & was even selected
                          for mentorship by Melinda & Bill Gates foundation.
                        </p>
                        {/* <a
                          href="/mobile-app-development"
                          className="fs-16 fw-500 text-white"
                        >
                          Learn More
                          <AnimatedImage
                            className="img-fluid"
                            src={IMAGES.rightWayArrow}
                            width="20"
                            height="20"
                            alt="arrow-right"
                            loading="lazy"
                          />
                        </a> */}
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={4} className='offset-lg-1'>
                  <div className='img-box d-none d-md-block text-md-end'>
                    <AnimatedImage
                      className='img-fluid'
                      src={IMAGES.billMelinda}
                      width='200'
                      height='100'
                      alt='awards'
                      loading='lazy'
                    />
                  </div>
                </Col>
              </Row>
            </div>
            <div className='our-work-box-achievement'>
              <Row className='align-items-center'>
                <Col md={7}>
                  <div className='d-flex gap-4'>
                    <p className='number-text'>03</p>
                    <div>
                      <h3 className='title'>
                        Crowned as ‘Best new startup’ company in the SeedCorn
                        investor readiness competition.
                      </h3>
                      <div className='our-footer'>
                        <p className='text'>
                          Our startup app ‘Feistim’ was crowned as the ‘Best new
                          startup’ at InterTradeIreland’s Seedcorn Competition
                          for its fantastic performance metrics. Feistim helps
                          sportspeople to record & analyse their mental
                          wellbeing in uncertain times; it also allows players
                          to track Covid-19 symptoms & share training schedules
                          with the team through chat & video feature.
                        </p>
                        {/* <a
                          href="/startups"
                          className="fs-16 fw-500 text-white"
                        >
                          Learn More
                          <AnimatedImage
                            className="img-fluid"
                            src={IMAGES.rightWayArrow}
                            width="20"
                            height="20"
                            alt="arrow-right"
                            loading="lazy"
                          />
                        </a> */}
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={4} className=' offset-lg-1'>
                  <div className='img-box d-none d-md-block text-md-end'>
                    <AnimatedImage
                      className='img-fluid'
                      src={IMAGES.bestNewStartup}
                      width='200'
                      height='100'
                      alt='awards'
                      loading='lazy'
                    />
                  </div>
                </Col>
              </Row>
            </div>
            <div className='our-work-box-achievement'>
              <Row className='align-items-center'>
                <Col md={8}>
                  <div className='d-flex gap-4'>
                    <p className='number-text'>04</p>
                    <div>
                      <h3 className='title'>
                        Our startup was praised by Beyoncé and picked as top
                        startups at the International Web Summit by Werner
                        Vogels (Amazon’s CTO)
                      </h3>
                      <div className='our-footer'>
                        <p className='text'>
                          Our KeepAppy focuses on promoting positivity and
                          helping those who are suffering from mental-health
                          related issues. The startup app was rightly praised by
                          Beyonce & picked as a top startup at the International
                          Web Summit by Amazon’s CTO Werner Vogels.
                        </p>
                        {/* <a
                          href="/startups"
                          className="fs-16 fw-500 text-white"
                        >
                          Learn More
                          <AnimatedImage
                            className="img-fluid"
                            src={IMAGES.rightWayArrow}
                            width="20"
                            height="20"
                            alt="arrow-right"
                            loading="lazy"
                          />
                        </a> */}
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={4} className=''>
                  <div className='img-box d-none d-md-block text-md-end'>
                    <AnimatedImage
                      className='img-fluid'
                      src={IMAGES.amazonCTO}
                      width='200'
                      height='100'
                      alt='awards'
                      loading='lazy'
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          {/* <Col
            lg={8}
            className="our-work py-5 py-lg-0"
          >
            <div className="our-work-box-achievement-achievement mb-5 border-0">
              <Row className="align-items-center">
                <Col md={7}>
                  <div className="d-flex gap-4">
                    <p className="number-text">01</p>
                    <div>
                      <h3 className="title">
                        Recognised as Top Mobile App Development Company by
                        Clutch
                      </h3>
                      <div className="our-footer">
                        <p className="text">
                          With 4.9/5 ratings and 30+ verified reviews, our
                          impeccable & extraordinary work made us win accolades
                          and the recognition of Top Mobile App Development
                          Company for 2 consecutive years. Cheers!
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col
                  md={4}
                  className="offset-lg-1"
                >
                  <div className="img-box d-none d-md-block text-md-end">
                    <AnimatedImage
                      className="img-fluid"
                      src={IMAGES.clutchAward}
                      width="200"
                      height="100"
                      alt="awards"
                      loading="lazy"
                    />
                  </div>
                </Col>
              </Row>
            </div>
            <div className="our-work-box-achievement-achievement mb-5 border-0">
              <Row className="align-items-center">
                <Col md={7}>
                  <div className="d-flex gap-4">
                    <p className="number-text">02</p>
                    <div>
                      <h3 className="title">
                        Our app KeepAppy was selected for mentorship by Melinda
                        & Bill Gates foundation.
                      </h3>
                      <div className="our-footer">
                        <p className="text">
                          We craft clean, user-friendly UI/UX designs that make
                          digital experiences simple and effective. Our team
                          focuses on creating intuitive interfaces that look
                          great...
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col
                  md={4}
                  className="offset-lg-1"
                >
                  <div className="img-box d-none d-md-block text-md-end">
                    <AnimatedImage
                      className="img-fluid"
                      src={IMAGES.forbesAward}
                      width="200"
                      height="100"
                      alt="awards"
                      loading="lazy"
                    />
                  </div>
                </Col>
              </Row>
            </div>
            <div className="our-work-box-achievement-achievement mb-5 border-0">
              <Row className="align-items-center">
                <Col md={7}>
                  <div className="d-flex gap-4">
                    <p className="number-text">03</p>
                    <div>
                      <h3 className="title">
                        Crowned as ‘Best new startup’ company in the SeedCorn
                        investor readiness competition.
                      </h3>
                      <div className="our-footer">
                        <p className="text">
                          Crowned as ‘Best new startup’ company in the SeedCorn
                          investor readiness competition.
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col
                  md={4}
                  className="offset-lg-1"
                >
                  <div className="img-box d-none d-md-block text-md-end">
                    <AnimatedImage
                      className="img-fluid"
                      src={IMAGES.forbesAward}
                      width="200"
                      height="100"
                      alt="awards"
                      loading="lazy"
                    />
                  </div>
                </Col>
              </Row>
            </div>
            <div className="our-work-box-achievement-achievement border-0">
              <Row className="align-items-center">
                <Col md={7}>
                  <div className="d-flex gap-4">
                    <p className="number-text">04</p>
                    <div>
                      <h3 className="title">
                        Our startup was praised by Beyoncé and picked as top
                        startups at the International Web Summit by Werner
                        Vogels (Amazon’s CTO)
                      </h3>
                      <div className="our-footer">
                        <p className="text">
                          We craft clean, user-friendly UI/UX designs that make
                          digital experiences simple and effective. Our team
                          focuses on creating intuitive interfaces that look
                          great...
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col
                  md={4}
                  className="offset-lg-1"
                >
                  <div className="img-box d-none d-md-block text-md-end">
                    <AnimatedImage
                      className="img-fluid"
                      src={IMAGES.forbesAward}
                      width="200"
                      height="100"
                      alt="awards"
                      loading="lazy"
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </Col> */}
        </Row>
      </Container>
    </section>
  );
};

export default Featured;

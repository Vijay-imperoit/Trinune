import { Col, Container, Row } from 'react-bootstrap';
import './style.css';
import { IMAGES } from '../../../utils/staticJSON';
import AnimatedImageWithOpacity from '../../../global/AnimatedImageWithOpacity';

const Services = () => {
  return (
    <section className="section our-services-section custom-blog-cursor-white">
      <Container>
        <Row>
          <Col lg={4}>
            <div className="title-box">
              <h2 className="title-2 text-white">Our Services</h2>
              <p className="text-dark-gray">
                Impero provides expert software engineering and consultancy
                services. Since 2011, we have been helping businesses in
                multiple industries design, develop and deliver products and
                services faster and more cost-effectively.
              </p>
            </div>
          </Col>
          <Col lg={8}>
            <div className="our-work-box">
              <Row className="align-items-center">
                <Col md={7}>
                  <div className="d-flex gap-4">
                    <p className="number-text">01</p>
                    <div>
                      <h3 className="title">UIUX Design</h3>
                      <div className="our-footer">
                        <p className="text line-clamp3">
                          Our distinct and assured process defines every step we
                          take to create a User Experience your users will love
                          to use over the years.
                        </p>
                        {/* <a
                          href="/uiux"
                          className="fs-16 fw-500 text-white"
                        >
                          Learn More
                          <AnimatedImageWithOpacity
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
                <Col
                  md={4}
                  className="offset-lg-1"
                >
                  <div className="img-box d-none d-md-block text-md-end">
                    <AnimatedImageWithOpacity
                      className="img-fluid"
                      src={IMAGES.uiuxDesign1x}
                      width="200"
                      height="100"
                      alt="app-development"
                      loading="lazy"
                    />
                    {/* <video
                      width="100%"
                      height="100%"
                      preload="metadata"
                      playsInline
                      muted
                      autoPlay
                      loop
                      className="lazyload"
                    >
                      <source src={IMAGES.uiuxDesign1x} type="video/mp4" />
                    </video> */}
                  </div>
                </Col>
              </Row>
            </div>
            <div className="our-work-box">
              <Row className="align-items-center">
                <Col md={7}>
                  <div className="d-flex gap-4">
                    <p className="number-text">02</p>
                    <div>
                      <h3 className="title">App Development</h3>
                      <div className="our-footer">
                        <p className="text line-clamp3">
                          We build scalable mobile apps tailored to your needs.
                          Our process ensures seamless performance, security,
                          and exceptional user experiences on iOS and Android.
                        </p>
                        {/* <a
                          href="/mobile-app-development"
                          className="fs-16 fw-500 text-white"
                        >
                          Learn More
                          <AnimatedImageWithOpacity
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
                <Col
                  md={4}
                  className="offset-lg-1"
                >
                  <div className="img-box d-none d-md-block text-md-end">
                    <AnimatedImageWithOpacity
                      className="img-fluid"
                      src={IMAGES.appDevelopment1x}
                      width="200"
                      height="100"
                      alt="app-development"
                      loading="lazy"
                    />
                    {/* <video
                      width="100%"
                      height="100%"
                      preload="metadata"
                      playsInline
                      muted
                      autoPlay
                      loop
                      className="lazyload"
                    >
                      <source src={IMAGES.appDevelopment1x} type="video/mp4" />
                    </video> */}
                  </div>
                </Col>
              </Row>
            </div>
            <div className="our-work-box">
              <Row className="align-items-center">
                <Col md={7}>
                  <div className="d-flex gap-4">
                    <p className="number-text">03</p>
                    <div>
                      <h3 className="title">Web Development</h3>
                      <div className="our-footer">
                        <p className="text line-clamp3">
                          We create dynamic, responsive websites that deliver
                          engaging experiences across devices. Our development
                          focuses on performance, security, and technology.
                        </p>
                        {/* <a
                          href="/web-development"
                          className="fs-16 fw-500 text-white"
                        >
                          Learn More
                          <AnimatedImageWithOpacity
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
                <Col
                  md={4}
                  className=" offset-lg-1"
                >
                  <div className="img-box d-none d-md-block text-md-end">
                    <AnimatedImageWithOpacity
                      className="img-fluid"
                      src={IMAGES.webDevelopment1x}
                      width="200"
                      height="100"
                      alt="app-development"
                      loading="lazy"
                    />
                    {/* <video
                      width="100%"
                      height="100%"
                      preload="metadata"
                      playsInline
                      muted
                      autoPlay
                      loop
                      className="lazyload"
                    >
                      <source src={IMAGES.webDevelopment1x} type="video/mp4" />
                    </video> */}
                  </div>
                </Col>
              </Row>
            </div>
            <div className="our-work-box">
              <Row className="align-items-center">
                <Col md={7}>
                  <div className="d-flex gap-4">
                    <p className="number-text">04</p>
                    <div>
                      <h3 className="title">AR/VR Development</h3>
                      <div className="our-footer">
                        <p className="text line-clamp3">
                          We design innovative AR/VR solutions that transform
                          your business. From immersive training to interactive
                          experiences, we create high-impact applications.
                        </p>
                        {/* <a
                          href="/arvr"
                          className="fs-16 fw-500 text-white"
                        >
                          Learn More
                          <AnimatedImageWithOpacity
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
                <Col
                  md={4}
                  className="offset-lg-1"
                >
                  <div className="img-box d-none d-md-block text-md-end">
                    <AnimatedImageWithOpacity
                      className="img-fluid"
                      src={IMAGES.arvrDevelopment1x}
                      width="200"
                      height="100"
                      alt="app-development"
                      loading="lazy"
                    />
                    {/* <video
                      width="100%"
                      height="100%"
                      preload="metadata"
                      playsInline
                      muted
                      autoPlay
                      loop
                      className="lazyload"
                    >
                      <source src={IMAGES.arvrDevelopment1x} type="video/mp4" />
                    </video> */}
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

export default Services;

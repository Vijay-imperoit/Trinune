import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { IMAGES } from "../../../utils/staticJSON";
import AnimatedImageWithOpacity from '../../../global/AnimatedImageWithOpacity';

const DevelopmentService = () => {
  return (
    <div className="section lasting-solutions-ios custom-blog-cursor-white">
      <Container>
        <Row className="gy-4 align-items-start">
          <Col
            lg={4}
            className="sticky-lg-top top-50"
          >
            <div className="title-box mb-4">
              <h2 className="title-2 text-white mb-0">
                Elite iOS development services.
              </h2>
            </div>
            <p className="fs-20 fw-normal text-white mb-0">
              Transform your ideas into seamless iOS apps with our expert
              development services. Experience innovation and quality like never
              before.
            </p>
          </Col>
          <Col
            lg={8}
            className="development-services-ios no-scroll"
          >
            <div className="p-2">
              <div className="card-body">
                <div className="row gy-4 text-white">
                  <div className="col-md-6">
                    <h3 className="title mb-4 mb-md-5">iOS App Development</h3>
                    <div className="ms-md-4">
                      <AnimatedImageWithOpacity
                        src={IMAGES.iosAppDev}
                        className="ms-md-5"
                        alt="ios"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <p className="pera">
                      Elevate your business with high-quality, future-ready iOS
                      apps from our expert UK team. Leveraging Swift and
                      Objective-C, we deliver secure, scalable solutions with
                      exceptional design and performance for iPhone and Apple
                      Watch.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <Row className="gy-4 text-white">
                  <Col md={6}>
                    <h3 className="title mb-4 mb-md-5">Watch OS Development</h3>
                    <div className="ms-md-4">
                      <AnimatedImageWithOpacity
                        src={IMAGES.watchOsDev}
                        className="ms-md-5"
                        alt="watch"
                        loading="lazy"
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <p className="pera">
                      Unlock the potential of wearable technology with our
                      expert watchOS development services. We specialise in
                      crafting innovative, user-centric apps that seamlessly
                      integrate with Apple Watch, enhancing the smartwatch
                      experience.
                    </p>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <Row className="gy-4 text-white">
                  <Col md={6}>
                    <h3 className="title mb-4 mb-md-5">Tv OS Development</h3>
                    <div className="ms-md-4">
                      <AnimatedImageWithOpacity
                        src={IMAGES.TvOsDev}
                        className="ms-md-5"
                        alt="tv"
                        loading="lazy"
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <p className="pera">
                      Unlock the potential of home entertainment with our expert
                      tvOS development services. We specialize in creating
                      immersive, user-friendly apps that enhance the Apple TV
                      experience, providing seamless navigation and rich
                      content.
                    </p>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <Row className="gy-4 text-white">
                  <Col md={6}>
                    <h3 className="title mb-4 mb-md-5">Mac OS Development</h3>
                    <div className="ms-md-4">
                      <AnimatedImageWithOpacity
                        src={IMAGES.macOsDev}
                        className="ms-md-5"
                        alt="mac"
                        loading="lazy"
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <p className="pera">
                      Unlock the full potential of desktop computing with our
                      expert macOS development services. We design & build
                      powerful applications that leverage the full capabilities
                      of macOS, enhancing productivity & delivering a seamless
                      user experience.
                    </p>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DevelopmentService;

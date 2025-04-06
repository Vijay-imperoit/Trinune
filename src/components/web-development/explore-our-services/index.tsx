import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { IMAGES } from "../../../utils/staticJSON";

const ExploreOurService = () => {
  return (
    <div className="section web-dev-service-section custom-blog-cursor-white">
      <Container className="scroll-section">
        <h2 className="title-2 title-2-web-dev">
          Explore Our Comprehensive Web Development Services
        </h2>
        <Row className="align-items-center scroll-item gy-3">
          <Col lg={6}>
            <div className="img-box">
              <img
                className="img-fluid"
                src={IMAGES.progressiveImage}
                width="493"
                height="428"
                alt="Progressive Web Apps"
                loading="lazy"
              />
            </div>
          </Col>
          <Col lg={6}>
            <div className="card-body">
              <span className="box-number">1</span>
              <h3 className="title-2 mb-3">Progressive Web Apps</h3>
              <p className="fs-18 fw-normal">
                Aligning the needs of modern web app solutions, we are a web
                development agency London, creating Progressive web solutions
                that are loaded with interactive features, faster in speed, come
                with impressive visuals, and have no fuss navigation system.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center scroll-item gy-3">
          <Col
            lg={6}
            className="order-lg-2"
          >
            <div className="img-box">
              <img
                className="img-fluid"
                src={IMAGES.eCommerceImage}
                width="493"
                height="428"
                alt="eCommerce Web Solutions"
                loading="lazy"
              />
            </div>
          </Col>
          <Col
            lg={6}
            className="order-lg-1"
          >
            <div className="card-body">
              <span className="box-number">2</span>
              <h3 className="title-2 mb-3">eCommerce Web Solutions</h3>
              <p className="fs-18 fw-normal">
                At Impero IT, we know custom eCommerce web applications can
                amplify your business ROIs. With integrated payment systems and
                secure navigation, our solutions are growth-oriented for your
                business.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center scroll-item gy-3">
          <Col lg={6}>
            <div className="img-box">
              <img
                className="img-fluid"
                src={IMAGES.cmsImage}
                width="493"
                height="428"
                alt="CMS Development"
                loading="lazy"
              />
            </div>
          </Col>
          <Col lg={6}>
            <div className="card-body">
              <span className="box-number">3</span>
              <h3 className="title-2 mb-3">CMS Development</h3>
              <p className="fs-18 fw-normal">
                Whatever your content needs are, we provide robust,
                high-performing CMS solutions, helping you easily manage and
                organize your content, from editing to publishing.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center scroll-item gy-3">
          <Col
            lg={6}
            className="order-lg-2"
          >
            <div className="img-box">
              <img
                className="img-fluid"
                src={IMAGES.erpImage}
                width="493"
                height="428"
                alt="ERP Solutions"
                loading="lazy"
              />
            </div>
          </Col>
          <Col
            lg={6}
            className="order-lg-1"
          >
            <div className="card-body">
              <span className="box-number">4</span>
              <h3 className="title-2 mb-3">ERP Solutions</h3>
              <p className="fs-18 fw-normal">
                Plan and manage your enterprise with real-time, custom ERP
                Software. Our bespoke development simplifies complex
                enterprise-level needs and streamlines supply chain management
                processes.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center scroll-item gy-3">
          <Col lg={6}>
            <div className="img-box">
              <img
                className="img-fluid"
                src={IMAGES.customWebDevImage}
                width="493"
                height="428"
                alt="Custom Web Development"
                loading="lazy"
              />
            </div>
          </Col>
          <Col lg={6}>
            <div className="card-body">
              <span className="box-number">5</span>
              <h3 className="title-2 mb-3">Custom Web Development</h3>
              <p className="fs-18 fw-normal">
                At Impero IT, we offer custom web development services to create
                highly-tailored web applications that promote growth,
                innovation, and meet your unique business objectives.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center scroll-item gy-3">
          <Col
            lg={6}
            className="order-lg-2"
          >
            <div className="img-box">
              <img
                className="img-fluid"
                src={IMAGES.webDesigningImage}
                width="493"
                height="428"
                alt="Web Designing"
                loading="lazy"
              />
            </div>
          </Col>
          <Col
            lg={6}
            className="order-lg-1"
          >
            <div className="card-body">
              <span className="box-number">6</span>
              <h3 className="title-2 mb-3">Web Designing</h3>
              <p className="fs-18 fw-normal">
                We design not only functional but also highly creative web
                applications. Our design services help clients craft unique
                brand identities with visually captivating designs that leave a
                lasting, positive impression.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ExploreOurService;

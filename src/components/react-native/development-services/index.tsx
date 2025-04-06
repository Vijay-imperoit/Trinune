import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
// import { IMAGES } from "../../../utils/staticJSON";

const DevelopmentService = () => {
  return (
    <div className="section lasting-solutions-react-native custom-blog-cursor-white">
      <Container>
        <Row className="gy-4 align-items-start">
          <Col
            lg={4}
            className="sticky-lg-top top-50"
          >
            <div className="title-box mb-4">
              <h2 className="title-2 text-white mb-0">
                Superior React Native App development services.
              </h2>
            </div>
            <p className="fs-20 fw-normal text-white mb-0">
              Transform your vision with our elite React Native development. Our
              experts deliver high-performance, scalable, and visually stunning
              apps.
            </p>
            {/* <img
              src={IMAGES.reactNativeLogo}
              className="img-fluid mt-5"
              width="200"
              height="200"
              alt="logo"
            /> */}
          </Col>
          <Col
            lg={8}
            className="development-services-react-native no-scroll"
          >
            <div className="py-2">
              <div className="card-body">
                <Row className="gy-4 text-white">
                  <Col md={6}>
                    <h3 className="title mb-4 mb-md-5">
                      React Native Application Development
                    </h3>
                  </Col>
                  <Col md={6}>
                    <p className="pera">
                      Our seasoned React Native developers craft powerful,
                      feature-rich, and secure apps. From UI/UX design to
                      testing and deployment, we tailor our approach to each
                      project. Leveraging the latest technologies, we ensure top
                      performance and user experience.
                    </p>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <Row className="gy-4 text-white">
                  <Col md={6}>
                    <h3 className="title mb-4 mb-md-5">
                      {' '}
                      React Native Migration
                    </h3>
                  </Col>
                  <Col md={6}>
                    <p className="pera">
                      Our React Native migration services seamlessly convert
                      your iOS or Android apps to a cross-platform solution. Our
                      experienced team ensures a quick, efficient migration with
                      minimal disruption, delivering superior performance and
                      scalability.
                    </p>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <Row className="gy-4 text-white">
                  <Col md={6}>
                    <h3 className="title mb-4 mb-md-5">
                      React Native Application Development
                    </h3>
                  </Col>
                  <Col md={6}>
                    <p className="pera">
                      As a top React Native development company, we offer
                      comprehensive support and maintenance, including updates,
                      bug fixes, security monitoring, and performance
                      optimisation. Our cost-effective services ensure your app
                      stays current and meets your long-term needs.
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

import { Col, Container, Row } from "react-bootstrap";
import "./style.css";

const ExpertiseFlutterDeveloper = () => {
  return (
    <div className="section lasting-solutions-flutter custom-blog-cursor-white">
      <Container>
        <Row className="gy-5 align-items-start">
          <Col
            lg={5}
            className="sticky-lg-top top-50"
          >
            <h2 className="title-2 text-white mb-4">
              The expertise of our Flutter developers
            </h2>
            <p className="fs-20 fw-normal text-white mb-0">
              We connect businesses with Android and iOS users through top
              Flutter developers. Hire experts for intuitive, scalable, and
              high-performing apps.
            </p>
          </Col>
          <Col
            lg={7}
            className="development-services-flutter no-scroll text-white"
          >
            <div className="py-4">
              <div className="card-body">
                <h3 className="mb-3">Flutter Consulting</h3>
                <p className="fs-16 text-dark-gray mb-0">
                  Engage with our Flutter experts to explore how to leverage
                  Flutter for achieving your business goals. We offer
                  comprehensive consultation to guide you in maximizing
                  Flutter's potential.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3 className="mb-3">Flutter App Development</h3>
                <p className="fs-16 text-dark-gray mb-0">
                  We deliver high-quality, cross-platform applications that
                  offer a great user experience. Our team ensures effective
                  communication and develops apps tailored to your project
                  requirements.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3 className="mb-3">Existing App Migration</h3>
                <p className="fs-16 text-dark-gray mb-0">
                  Seamlessly migrate your iOS or Android app to Flutter using
                  the latest version. We handle the transition efficiently,
                  enhancing your app’s performance and functionality.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3 className="mb-3">Flutter Web Development</h3>
                <p className="fs-16 text-dark-gray mb-0">
                  Develop web applications with Flutter, adhering to industry
                  standards. We create robust web solutions that meet current
                  demands and boost your profitability.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3 className="mb-3">Post-Launch Support</h3>
                <p className="fs-16 text-dark-gray mb-0">
                  Our services extend beyond development with dedicated
                  post-launch support. We address bugs and ensure your app
                  maintains optimal performance.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ExpertiseFlutterDeveloper;

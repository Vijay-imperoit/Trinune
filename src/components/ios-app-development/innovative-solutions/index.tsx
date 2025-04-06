import { Col, Container, Row } from "react-bootstrap";
import "./style.css";

const InnovativeSolutions = () => {
  return (
    <div className="section lasting-solutions-ios2 custom-blog-cursor-white">
      <Container>
        <Row className="gy-4 text-center text-md-start mb-5">
          <Col md={7}>
            <div className="title-box mb-0">
              <h2 className="title-2 text-white mb-0">
                Why Choose Impero for top-tier iOS expertise and innovative
                Solutions ?
              </h2>
            </div>
          </Col>
        </Row>
        <Row className="gy-4 g-md-5">
          <Col
            md={6}
            lg={4}
            className="gradient-box-ios text-center text-md-start"
          >
            <div className="card ">
              <div className="card-body">
                <h3 className="title text-white">Transparent communication</h3>
                <p className="pera text-white">
                  We prioritize open communication, keeping you informed
                  throughout development for complete transparency and
                  alignment.
                </p>
              </div>
            </div>
          </Col>
          <Col
            md={6}
            lg={4}
            className="gradient-box-ios text-center text-md-start"
          >
            <div className="card">
              <div className="card-body">
                <h3 className="title text-white">
                  Agile and waterfall project management approaches.
                </h3>
                <p className="pera text-white">
                  Choose from flexible project management methodologies like
                  Agile and Waterfall, ensuring timely delivery and adaptability
                  to your needs.
                </p>
              </div>
            </div>
          </Col>
          <Col
            md={6}
            lg={4}
            className="gradient-box-ios text-center text-md-start"
          >
            <div className="card">
              <div className="card-body">
                <h3 className="title text-white">
                  Expert iOS developers with 4+ years of experience.
                </h3>
                <p className="pera text-white">
                  Our team consists of highly skilled iOS developers with over 4
                  years of experience, delivering high-quality apps tailored to
                  your business.
                </p>
              </div>
            </div>
          </Col>
          <Col
            md={6}
            lg={4}
            className="gradient-box-ios text-center text-md-start"
          >
            <div className="card">
              <div className="card-body">
                <h3 className="title text-white">
                  Innovative UI/UX design and end-to-end support.
                </h3>
                <p className="pera text-white">
                  From design to development, we provide creative UI/UX
                  solutions and full-cycle support, ensuring a seamless user
                  experience.
                </p>
              </div>
            </div>
          </Col>
          <Col
            md={6}
            lg={4}
            className="gradient-box-ios text-center text-md-start"
          >
            <div className="card">
              <div className="card-body">
                <h3 className="title text-white">Performance Optimization</h3>
                <p className="pera text-white">
                  Ensuring your iOS app performs flawlessly, from fast load
                  times to smooth navigation and excellent stability.
                </p>
              </div>
            </div>
          </Col>
          <Col
            md={6}
            lg={4}
            className="gradient-box-ios text-center text-md-start"
          >
            <div className="card">
              <div className="card-body">
                <h3 className="title text-white">
                  3 Months Post Launch Support.
                </h3>
                <p className="pera text-white">
                  Benefit from 3 months of dedicated post-launch support to
                  address any issues and enhance your app’s performance after
                  release.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default InnovativeSolutions;

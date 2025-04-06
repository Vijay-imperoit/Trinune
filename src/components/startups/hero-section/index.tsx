import { Col, Container, Row, Image } from "react-bootstrap";
import "./style.css";
import { IMAGES } from "../../../utils/staticJSON";
const HeroSection = () => {

  return (
    <div className="hero-section3-startups custom-blog-cursor-white">
      <Container className="py-5">
        <Row className="h-100 gy-4">
          <Col lg={6}>
            <div className="hero-contain">
              <h1 className="fs-50 mb-3">
                <span className="text-gradient-style2">Startups </span>
                <Image
                  className="img-fluid"
                  src={IMAGES.startups_heart}
                  width="36"
                  height="36"
                  alt="heart-icon"
                />{' '}
                <span className="text-gradient-style2">Us</span>
                <br />
                Let’s Write Your
                <br /> Success Story !
              </h1>
              <p className="fs-20 mb-30 font-main">
                We empower startups with innovative IT
                <br /> solutions that drive growth and success. From
                <br /> idea to execution, we're your trusted partner in
                <br /> building a future-ready business.
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <div className="hero-img-startups">
              <div className="position-relative">
                <div className="content-box-startups style1">
                  <Image
                    className="img-fluid"
                    src={IMAGES.startups_heart}
                    width="40"
                    height="40"
                    alt="heart"
                  />
                  <p className="text">They just love us</p>
                </div>
                <Image
                  className="img-fluid"
                  src={IMAGES.startups_image}
                  width="433"
                  height="350"
                  alt="hero-img"
                />
                <div className="content-box-startups style2">
                  <Image
                    className="img-fluid"
                    src={IMAGES.startups_star}
                    width="40"
                    height="40"
                    alt="start"
                  />
                  <p className="text">
                    <strong>95%</strong> Success Rate
                  </p>
                </div>
                <div className="content-box-startups style3">
                  <Image
                    className="img-fluid"
                    src={IMAGES.startups_award}
                    width="40"
                    height="40"
                    alt="award"
                  />
                  <p className="text">Best Startup Award</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;

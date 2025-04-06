import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { IMAGES } from "../../../utils/staticJSON";
import AnimatedImageWithOpacity from '../../../global/AnimatedImageWithOpacity';

const AchievedClients = () => {
  return (
    <section className="section custom-blog-cursor">
      <Container>
        <Row>
          <Col
            xs={12}
            lg={9}
          >
            <div className="title-box">
              <h2 className="title-2">What we achieved from clients</h2>
              <p className="sub-text">
                Through strong client partnerships, Impero IT Services Pvt. Ltd.
                has achieved remarkable success,
                <br /> delivering tailored IT solutions that drive growth,
                efficiency, and long-term satisfaction.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="achieved-clients-achievement">
        <Row className="gy-4 justify-content-center">
          <Col
            sm={6}
            lg={4}
            className="d-flex"
          >
            <div className="div1 card">
              <div className="card-body d-flex align-items-end flex-column">
                <div className="mb-5">
                  <p className="sab-text text-white mb-4">
                    Our app Scoreboard FR raised $20M funds in just 1.5 years.
                  </p>
                  <a
                    href="/scoreboard"
                    className="link text-white custom-cursor"
                  >
                    Read full case study
                  </a>
                </div>
                <div className="text-center mt-auto mx-auto">
                  <AnimatedImageWithOpacity
                    className="img-fluid"
                    src={IMAGES.scoreBoardTwo1x}
                    width="250"
                    height="310"
                    alt="scoreboard"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </Col>
          <Col
            sm={6}
            lg={4}
            className="d-flex"
          >
            <div className="div2 card">
              <div className="card-body d-flex align-items-end flex-column">
                <div className="mb-5">
                  <p className="sab-text text-white mb-4">
                    Our application - Siente, touched the lives of 500,000
                    users.
                  </p>
                  <a
                    href="/siente"
                    className="link text-white custom-cursor"
                  >
                    Read full case study
                  </a>
                </div>
                <div className="text-center mt-auto mx-auto">
                  <AnimatedImageWithOpacity
                    className="img-fluid"
                    src={IMAGES.siente}
                    width="305"
                    height="369"
                    alt="siente"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </Col>
          <Col
            sm={6}
            lg={4}
            className="d-flex"
          >
            <div className="div3 card">
              <div className="card-body d-flex align-items-end flex-column">
                <div className="mb-5">
                  <p className="sab-text text-white mb-4">
                    KeepAppy was chosen for mentor ship by Bill & Melinda
                    Foundation.
                  </p>
                  <a
                    href="/keepappy"
                    className="link text-white custom-cursor"
                  >
                    Read full case study
                  </a>
                </div>
                <div className="text-center mt-auto mx-auto">
                  <AnimatedImageWithOpacity
                    className="img-fluid"
                    src={IMAGES.keepAppyMobileTwo1x}
                    width="271"
                    height="317"
                    alt="keepappy"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AchievedClients;

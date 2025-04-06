import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { IMAGES } from "../../../utils/staticJSON";
import AnimatedImageWithOpacity from '../../../global/AnimatedImageWithOpacity';

const BespokeProcess = () => {
  return (
    <div className="section custom-blog-cursor">
      <Container>
        <div className="title-box">
          <h2 className="title-2 text-center">
            Our Bespoke Software Development Process
          </h2>
        </div>
        <div className="process-container-bespoke">
          <Row>
            <Col lg={4}>
              <div className="card step">
                <div className="card-body">
                  <div className="icon-box bg-purple">
                    <AnimatedImageWithOpacity
                      className="img-fluid"
                      src={IMAGES.searchBespoke}
                      width="24"
                      height="24"
                      alt="aearchspoke"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="title">Research & Market Analysis</h3>
                  <p className="sub-text">
                    We analyse your idea and market to identify gaps & needs,
                    tailoring your software to fit market demand.
                  </p>
                </div>
                <div className="step-line"></div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="card step">
                <div className="card-body">
                  <div className="icon-box bg-blue">
                    <AnimatedImageWithOpacity
                      className="img-fluid"
                      src={IMAGES.scopeBespoke}
                      width="24"
                      height="24"
                      alt="scope"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="title">Scope of the project</h3>
                  <p className="sub-text">
                    We define clear objectives, features, and timelines to
                    ensure your software meets business goals and user needs.
                  </p>
                </div>
                <div className="step-line2"></div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="card step">
                <div className="card-body">
                  <div className="icon-box bg-pink">
                    <AnimatedImageWithOpacity
                      className="img-fluid"
                      src={IMAGES.designBespoke}
                      width="24"
                      height="25"
                      alt="design"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="title">Designing</h3>
                  <p className="sub-text">
                    Our design team creates intuitive, user-friendly interfaces
                    that deliver a seamless, engaging experience.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default BespokeProcess;

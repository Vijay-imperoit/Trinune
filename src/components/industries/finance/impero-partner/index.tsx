import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { IMAGES } from "../../../../utils/staticJSON";
import AnimatedImageWithOpacity from "../../../../global/AnimatedImageWithOpacity";

const ImperoPartner = () => {
  return (
    <div className="section custom-blog-cursor">
      <Container>
        <div className="card card-linear-style1-web overflow-hidden custom-blog-cursor-white">
          <div className="card-body pe-lg-0">
            <Row className="align-items-center gy-4">
              <Col lg={9}>
                <h3 className="title-3">
                  Why Impero is Your Trusted IT Partner for finance Software!
                </h3>
                <Row>
                  <Col lg={12}>
                    <p className="list-item">
                      Expertise in custom finance platform solutions.
                    </p>
                    <p className="list-item">
                      Proven success in optimizing financial operations and
                      decision-making.
                    </p>
                    <p className="list-item">
                      Focus on enhancing real-time financial analytics and risk
                      management.
                    </p>
                    <p className="list-item">
                      Support for seamless integration within financial networks
                      and systems.
                    </p>
                  </Col>
                </Row>
              </Col>

              <Col lg={3} className="text-center text-lg-start animated-img">
                <AnimatedImageWithOpacity
                  src={IMAGES.financeIcon}
                  width="auto"
                  height="200"
                  alt="Entertainment Software"
                  loading="lazy"
                />
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ImperoPartner;

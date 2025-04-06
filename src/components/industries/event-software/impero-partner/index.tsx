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
                  Why Impero is your trusted partner for events software
                </h3>
                <Row>
                  <Col lg={12}>
                    <p className="list-item">
                      Expertise in custom, scalable travel software solutions.
                    </p>
                    <p className="list-item">
                      Proven success in optimizing operations and enhancing
                      customer experience.
                    </p>
                    <p className="list-item">
                      Focus on improving booking systems, interactions, and trip
                      management.
                    </p>
                    <p className="list-item">
                      Support for smooth integration in travel business
                      settings.
                    </p>
                  </Col>
                </Row>
              </Col>

              <Col lg={3} className="text-center text-lg-start animated-img">
                <AnimatedImageWithOpacity
                  src={IMAGES.eventsIcon}
                  width="auto"
                  height="200"
                  alt="MacBook Pro"
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

import { Col, Container, Row } from "react-bootstrap";
import GameChangingSlider from "../../startups/game-changing-section/gameChangingSlider";

const IndustriesWeSurve = () => {
  return (
    <div className="section custom-blog-cursor">
      <Container>
        <div className="title-box mb-lg-5">
          <Row className="gy-3">
            <Col lg={8}>
              <h2 className="title-2">Industries We Serve</h2>
              <p className="mb-0">
                Our Flutter expertise delivers tailored, cross-platform
                solutions for diverse industries, from secure finance apps to
                dynamic media platforms.
              </p>
            </Col>
          </Row>
        </div>
      </Container>

      <GameChangingSlider />
    </div>
  );
};

export default IndustriesWeSurve;

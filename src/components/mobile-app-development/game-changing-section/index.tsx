import { Col, Container, Row } from "react-bootstrap";
import GameChangingSlider from "./gameChangingSlider";

const GameChangingSection = () => {
  return (
    <div className="section pt-0 custom-blog-cursor">
      <Container>
        <div className="title-box mb-lg-5">
          <Row className="gy-3">
            <Col lg={10}>
              <h2 className="title-2">
                Expert Industry-Specific App Solutions
              </h2>
              <p className="mb-0">
                Tailored Mobile App Development, we customize app development
                for startups,
                <br /> businesses, and organizations across various industries
                based on your unique needs.
              </p>
            </Col>
          </Row>
        </div>
      </Container>
      <GameChangingSlider />
    </div>
  );
};

export default GameChangingSection;

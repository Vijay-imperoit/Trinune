import { Col, Container, Row } from "react-bootstrap";
import GameChangingSlider from "./gameChangingSlider";

const GameChangingSection = () => {
  return (
    <div className="section custom-blog-cursor">
      <Container>
        <div className="title-box mb-lg-5">
          <Row className="gy-3">
            <Col lg={10}>
              <h2 className="title-2">
                Game-changing solutions tailored for every sector
              </h2>
              <p className="mb-0">
                At Impero, we focus on smart strategies to help your startup
                thrive. Discover the
                <br /> industries that excel with a powerful MVP approach.
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

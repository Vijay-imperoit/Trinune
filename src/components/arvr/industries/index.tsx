import { Col, Container, Row } from "react-bootstrap";
import GameChangingSlider from '../game-changing-section/gameChangingSlider';

const Industries = () => {
  return (
    <section className="section pt-0 custom-blog-cursor">
      <Container>
        <div className="title-box mb-lg-5">
          <Row className="gy-3">
            <Col lg={8}>
              <h2 className="title-2">
                Industries we add value to with our mastery!
              </h2>
              <p className="mb-0">
                Topping the AR/VR Dev Companies list, we are well-acknowledged
                with industries that AR/VR can serve considerably in removing
                language barriers & bring in greater ROIs.
              </p>
            </Col>
          </Row>
        </div>
      </Container>
      <GameChangingSlider />
    </section>
  );
};

export default Industries;

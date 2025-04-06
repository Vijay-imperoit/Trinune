import { Col, Container, Row } from "react-bootstrap";
import { IMAGES } from "../../../../utils/staticJSON";
import AnimatedImageWithHeight from "../../../../global/AnimatedImagHeight";

const IndustrySoftware = () => {
  return (
    <section className="section custom-blog-cursor">
      <Container>
        <Row>
          <Col lg={8} className="text-center mx-auto">
            <h2 className="title-2 mb-4">
              What you get with Impero’s game software development
            </h2>
          </Col>
        </Row>
        <Row className="gy-4 align-items-lg-stretch">
          <Col lg={6} className="order-lg-last">
            <AnimatedImageWithHeight
              className="fit-img rounded-5"
              loading="lazy"
              src={IMAGES.game2}
              alt="esg"
            />
          </Col>
          <Col lg={6} className="align-self-lg-center">
            <div className="card-body">
              <p className="fs-20 mb-4">
                Our game development services are tailored to help businesses
                create immersive and engaging gaming experiences. With over 15
                years of experience in game design and development, and a proven
                track record in building cross-platform games, we understand the
                challenges the gaming industry faces in a fast-paced market.
              </p>
              <p className="fs-20">
                Our advanced game development solutions encompass gameplay
                mechanics, multiplayer features, in-game monetization, and
                performance optimization. We empower game developers to engage
                players, enhance user experience, and ensure smooth game
                operation across multiple platforms, all while scaling
                operations efficiently.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default IndustrySoftware;

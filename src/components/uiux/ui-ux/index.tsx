import AnimatedImageWithOpacity from '../../../global/AnimatedImageWithOpacity';
import { IMAGES } from "../../../utils/staticJSON";
import { Col, Container, Row } from "react-bootstrap";

const UIUXSection = () => {
  return (
    <section className="section custom-blog-cursor">
      <Container>
        <Row className="justify-content-center">
          <Col
            lg={10}
            className="text-center"
          >
            <div className="title-box">
              <h2 className="title-2">
                UI/UX design agency delivering design-led delightful
                experiences.
              </h2>
              <p className="mx-lg-4 mb-0">
                How can we neglect the terms which itself focus on ‘users’?
                That’s the reason our entire designing process for your app
                revolves around users and their personas.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="gy-4">
          <Col
            lg={6}
            className="order-lg-last"
          >
            <AnimatedImageWithOpacity
              className="img-fluid fit-img"
              src={IMAGES.uiuxHero2}
              width="585"
              height="545"
              alt="uiux"
              loading="lazy"
            />
          </Col>
          <Col lg={6}>
            <div className="card bg-offset-white br-12px border-0 p-4">
              <div className="card-body p-4 flutter-developers">
                <AnimatedImageWithOpacity
                  src={IMAGES.userInterface}
                  className="mb-3"
                  width="44"
                  height="44"
                  alt="ui"
                  loading="lazy"
                />
                <h3 className="title">User Interface (UI)</h3>
                <p className="pera mb-0">
                  To top the charts, your app needs loyal users and a standout
                  design. Our UI/UX agency delivers brilliant, intuitive designs
                  based on thorough research, ensuring your app is both
                  attractive and user-friendly.
                </p>
              </div>
            </div>
            <div className="card bg-offset-white br-12px border-0 mt-4 p-4">
              <div className="card-body p-4 flutter-developers">
                <AnimatedImageWithOpacity
                  src={IMAGES.ux_logo}
                  className="mb-3"
                  width="44"
                  height="44"
                  alt="ui"
                  loading="lazy"
                />
                <h3 className="title">User Experience (UX)</h3>
                <p className="pera mb-0">
                  UX ensures a great experience, while UI design offers a
                  visually engaging interface that guides users. Our UI/UX
                  studio creates intuitive, tailored designs with over 1,000
                  successful interfaces, delivering visual strategies users
                  love.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default UIUXSection;

import { Col, Container, Row } from "react-bootstrap";
import "./style.css";

const IndustryServices = () => {
  return (
    <div className="section lasting-solutions-flutter custom-blog-cursor-white">
      <Container>
        <Row className="gy-5 align-items-start">
          <Col
            lg={5}
            className="sticky-lg-top top-50"
          >
            <h2 className="title-2 text-white mb-4">
              Our Innovative Game services
            </h2>
            <p className="fs-20 fw-normal text-white mb-0">
              We will help you implement and maintain a tailored, cost-effective
              technology solution that supports your business goals and best
              meets your patients' needs.
            </p>
          </Col>
          <Col
            lg={7}
            className="development-services-flutter no-scroll text-white"
          >
            <div className="py-4">
              <div className="card-body">
                <h3 className="mb-3">Custom Game Development</h3>
                <p className="fs-16 text-dark-gray mb-0">
                  Tailored game development services that create engaging,
                  immersive experiences, from concept to completion, for a wide
                  variety of platforms.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3 className="mb-3">Game Performance Optimization</h3>
                <p className="fs-16 text-dark-gray mb-0">
                  Advanced techniques and services designed to optimize game
                  performance, ensuring smooth gameplay and reducing lag for a
                  seamless player experience.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3 className="mb-3">Multi-Platform Game Deployment</h3>
                <p className="fs-16 text-dark-gray mb-0">
                  Expertise in deploying games across multiple platforms, from
                  PC and console to mobile, ensuring wide accessibility and
                  enhanced player reach.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3 className="mb-3">Multiplayer and Social Integration</h3>
                <p className="fs-16 text-dark-gray mb-0">
                  Seamless integration of multiplayer features, social
                  connectivity, and leaderboards to boost player interaction and
                  foster a community.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3 className="mb-3">In-Game Monetization Solutions</h3>
                <p className="fs-16 text-dark-gray mb-0">
                  Tools and strategies designed to implement in-game purchases,
                  subscriptions, and ads, driving revenue without compromising
                  player experience.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default IndustryServices;

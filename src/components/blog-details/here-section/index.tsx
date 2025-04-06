import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
const HeroSection = () => {
  return (
    <div className="section pb-0 if-white custom-blog-cursor">
      <Container>
        <div className="blog-details-hero-section">
          <Row className="flex-center">
            <Col lg={6}>
              <h1 className="title1">
                <span className="text-gradient-style2">
                  Web Development Costs
                </span>
                <br />
                Everything You Need To Know for Your Next Successful Project
              </h1>
            </Col>
            <Col
              lg={6}
              className="border-lg-start"
            >
              <div className="card-body">
                <p className="text">
                  Embarking on a web development project can be both exciting
                  and overwhelming. One of the most critical aspects to consider
                  is the cost.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;

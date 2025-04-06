import {Col, Container, Row} from "react-bootstrap";
import "./style.css";
const HeroSection6 = () => {
    return (
      <div className="section pb-0 if-white custom-blog-cursor">
        <Container>
          <div className="blog-details-hero-section">
            <Row className="flex-center">
              <Col lg={6}>
                <h1 className="title1">
                  <span className="text-gradient-style2">
                    Mobile App Development Costs
                  </span>
                  <br />
                  How Much Money Does It Require To Develop Mobile Application?
                </h1>
              </Col>
              <Col
                lg={6}
                className="border-lg-start"
              >
                <div className="card-body">
                  <p className="text">
                    Developing a mobile application involves several cost
                    factors, from design to development and testing. In this
                    guide, we break down the expenses involved in creating a
                    mobile app, helping you understand what to expect when
                    budgeting for your mobile app development project.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
};

export default HeroSection6;

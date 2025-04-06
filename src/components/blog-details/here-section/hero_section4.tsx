import {Col, Container, Row} from "react-bootstrap";
import "./style.css";
const HeroSection4 = () => {
    return (
      <div className="section pb-0 if-white custom-blog-cursor">
        <Container>
          <div className="blog-details-hero-section">
            <Row className="flex-center">
              <Col lg={6}>
                <h1 className="title1">
                  <span className="text-gradient-style2">UX vs UI Design</span>
                  <br />
                  Know The Difference Between UX and UI Design: 2022 complete
                  guide
                </h1>
              </Col>
              <Col
                lg={6}
                className="border-lg-start"
              >
                <div className="card-body">
                  <p className="text">
                    Understanding the difference between UX (User Experience)
                    and UI (User Interface) design is essential for creating
                    effective and visually appealing websites. In this
                    comprehensive 2022 guide, we break down the roles of UX and
                    UI design, and how each contributes to the overall success
                    of your web development project.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
};

export default HeroSection4;

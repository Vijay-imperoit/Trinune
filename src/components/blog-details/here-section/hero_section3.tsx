import {Col, Container, Row} from "react-bootstrap";
import "./style.css";
const HeroSection3 = () => {
    return (
      <div className="section pb-0 if-white custom-blog-cursor">
        <Container>
          <div className="blog-details-hero-section">
            <Row className="flex-center">
              <Col lg={6}>
                <h1 className="title1">
                  <span className="text-gradient-style2">
                    Choosing the Right Company
                  </span>
                  <br />
                  Step by Step Guide On How to choose the best mobile app
                  development company?
                </h1>
              </Col>
              <Col
                lg={6}
                className="border-lg-start"
              >
                <div className="card-body">
                  <p className="text">
                    Selecting the best mobile app development company is crucial
                    to the success of your project. From evaluating costs to
                    understanding the development process, this guide will walk
                    you through the essential steps to make an informed decision
                    and find the right partner.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
};

export default HeroSection3;

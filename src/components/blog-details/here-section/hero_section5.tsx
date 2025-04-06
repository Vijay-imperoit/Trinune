import {Col, Container, Row} from "react-bootstrap";
import "./style.css";
const HeroSection5 = () => {
    return (
      <div className="section pb-0 if-white custom-blog-cursor">
        <Container>
          <div className="blog-details-hero-section">
            <Row className="flex-center">
              <Col lg={6}>
                <h1 className="title1">
                  <span className="text-gradient-style2">
                    Building an App from Scratch
                  </span>
                  <br />
                  How To Make An App From Scratch In 2022 - Impero it Services
                </h1>
              </Col>
              <Col
                lg={6}
                className="border-lg-start"
              >
                <div className="card-body">
                  <p className="text">
                    Creating an app from scratch can seem daunting, but with the
                    right guidance, it becomes an exciting journey. In this
                    step-by-step guide, we show you how to build an app from the
                    ground up, including all the essential steps and strategies
                    to make your app successful in 2022.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
};

export default HeroSection5;

import { Col, Container, Row } from "react-bootstrap";
import { IMAGES } from "../../../../utils/staticJSON";
import AnimatedImageWithHeight from "../../../../global/AnimatedImagHeight";

const HCSoftware = () => {
  return (
    <section className="section custom-blog-cursor">
      <Container>
        <Row>
          <Col lg={8} className="text-center mx-auto">
            <h2 className="title-2 mb-4">
              What you get with Impero’s manufacturing software development
            </h2>
          </Col>
        </Row>
        <Row className="gy-4 align-items-lg-stretch">
          <Col lg={6} className="order-lg-last">
            <AnimatedImageWithHeight
              className="fit-img rounded-5"
              loading="lazy"
              src={IMAGES.manufacturing2}
              alt="esg"
            />
          </Col>
          <Col lg={6} className="align-self-lg-center">
            <div className="card-body">
              <p className="fs-20 mb-4">
                Our custom manufacturing software development services are
                tailored to help manufacturing companies optimize production
                processes and improve operational efficiency. With over 15 years
                in the software engineering market and extensive experience
                developing our own manufacturing solutions, we understand the
                sector's unique challenges
              </p>
              <p className="fs-20">
                Our advanced manufacturing software solutions automate essential
                tasks like production scheduling, inventory management, and data
                analysis, improving the efficiency of production teams and
                streamlining operations
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HCSoftware;

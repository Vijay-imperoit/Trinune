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
              What you get with Impero’s education software development
            </h2>
          </Col>
        </Row>
        <Row className="gy-4 align-items-lg-stretch">
          <Col lg={6} className="order-lg-last">
            <AnimatedImageWithHeight
              className="fit-img rounded-5"
              loading="lazy"
              src={IMAGES.education2}
              alt="esg"
            />
          </Col>
          <Col lg={6} className="align-self-lg-center">
            <div className="card-body">
              <p className="fs-20 mb-4">
                Our custom education software development services are designed
                to help educational institutions enhance learning experiences
                and streamline administrative processes. With over 15 years in
                the software engineering market and extensive experience
                developing our own educational solutions, we understand the
                sector's unique challenges.
              </p>
              <p className="fs-20">
                Our advanced education software solutions automate essential
                tasks like student management, course scheduling, and
                performance tracking, improving the efficiency of educators and
                administrators while enriching the learning journey for
                students.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default IndustrySoftware;

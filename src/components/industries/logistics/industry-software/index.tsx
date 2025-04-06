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
              What you get with Impero’s logistics software development
            </h2>
          </Col>
        </Row>
        <Row className="gy-4 align-items-lg-stretch">
          <Col lg={6} className="order-lg-last">
            <AnimatedImageWithHeight
              className="fit-img rounded-5"
              loading="lazy"
              src={IMAGES.lg2}
              alt="esg"
            />
          </Col>
          <Col lg={6} className="align-self-lg-center">
            <div className="card-body">
              <p className="fs-20 mb-4">
                Our logistics platform development services are designed to help
                logistics providers create secure, efficient, and scalable
                supply chain solutions. With over 15 years of experience in
                platform design and development, and a proven track record in
                building robust logistics solutions, we understand the unique
                challenges the logistics industry faces in an increasingly
                complex and fast-paced environment.
              </p>
              <p className="fs-20">
                Our advanced logistics solutions focus on operational
                efficiency, real-time tracking, route optimization, and secure
                data management. We empower logistics providers to enhance fleet
                management, streamline supply chain operations, and ensure
                seamless integration across multiple systems, all while driving
                business growth and reducing operational costs.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default IndustrySoftware;

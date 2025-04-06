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
              What you get with Impero’s on restaurant software development
            </h2>
          </Col>
        </Row>
        <Row className="gy-4 align-items-lg-stretch">
          <Col lg={6} className="order-lg-last">
            <AnimatedImageWithHeight
              className="fit-img rounded-5"
              loading="lazy"
              src={IMAGES.restaurant2}
              alt="esg"
            />
          </Col>
          <Col lg={6} className="align-self-lg-center">
            <div className="card-body">
              <p className="fs-20 mb-4">
                Our restaurant software development services are designed to
                help foodservice businesses efficiently manage their operations,
                enhance customer experiences, and optimize processes. With over
                15 years of expertise in the software engineering industry and a
                strong background in building specialized restaurant solutions,
                we understand the unique challenges that restaurants face in a
                dynamic, fast-paced environment.
              </p>
              <p className="fs-20">
                Our advanced restaurant software solutions automate key tasks
                like order management, customer interaction, and inventory
                tracking, enabling restaurants to provide seamless dining
                experiences while improving operational efficiency and
                scalability.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default IndustrySoftware;

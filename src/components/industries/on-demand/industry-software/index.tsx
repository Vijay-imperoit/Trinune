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
              What you get with Impero’s on demand software development
            </h2>
          </Col>
        </Row>
        <Row className="gy-4 align-items-lg-stretch">
          <Col lg={6} className="order-lg-last">
            <AnimatedImageWithHeight
              className="fit-img rounded-5"
              loading="lazy"
              src={IMAGES.ondemand2}
              alt="esg"
            />
          </Col>
          <Col lg={6} className="align-self-lg-center">
            <div className="card-body">
              <p className="fs-20 mb-4">
                Our on-demand software development services are tailored to help
                businesses rapidly scale their operations, streamline processes,
                and deliver customized solutions. With over 15 years in the
                software engineering market and extensive experience in building
                on-demand software, we understand the unique challenges
                businesses face in a fast-paced, ever-changing digital
                environment.
              </p>
              <p className="fs-20">
                Our advanced on-demand software solutions automate core tasks,
                such as service management, customer interaction, and workflow
                optimization, ensuring businesses can provide seamless and
                responsive experiences for their clients while improving
                internal efficiency and scalability.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default IndustrySoftware;

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
              What you get with Impero’s travel software development
            </h2>
          </Col>
        </Row>
        <Row className="gy-4 align-items-lg-stretch">
          <Col lg={6} className="order-lg-last">
            <AnimatedImageWithHeight
              className="fit-img rounded-5"
              loading="lazy"
              src={IMAGES.travel2}
              alt="esg"
            />
          </Col>
          <Col lg={6} className="align-self-lg-center">
            <div className="card-body">
              <p className="fs-20 mb-4">
                Our travel software development services are designed to help
                travel businesses streamline their operations, enhance customer
                experiences, and optimize booking workflows. With over 15 years
                of expertise in the software engineering industry and a proven
                track record in building specialized travel solutions, we
                understand the unique challenges travel companies face in a
                competitive and fast-evolving market.
              </p>
              <p className="fs-20">
                Our advanced travel software solutions automate critical tasks
                like booking management, customer interaction, and trip
                planning. We enable travel businesses to provide personalized
                travel experiences, improve customer loyalty, and scale
                operations efficiently while ensuring seamless coordination
                across all platforms.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default IndustrySoftware;

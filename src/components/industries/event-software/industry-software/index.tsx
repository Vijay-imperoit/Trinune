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
              What you get with Impero’s events software development
            </h2>
          </Col>
        </Row>
        <Row className="gy-4 align-items-lg-stretch">
          <Col lg={6} className="order-lg-last">
            <AnimatedImageWithHeight
              className="fit-img rounded-5"
              loading="lazy"
              src={IMAGES.events}
              alt="esg"
            />
          </Col>
          <Col lg={6} className="align-self-lg-center">
            <div className="card-body">
              <p className="fs-20 mb-4">
                Our event software development services are designed to help
                event organizers streamline their operations, enhance attendee
                experiences, and optimize event management workflows. With over
                15 years of expertise in the software engineering industry and a
                proven track record in building specialized event solutions, we
                understand the unique challenges event businesses face in a
                dynamic and fast-paced industry.
              </p>
              <p className="fs-20">
                Our advanced event software solutions automate critical tasks
                like event scheduling, attendee management, and networking. We
                enable event businesses to provide personalized event
                experiences, improve attendee engagement, and scale operations
                efficiently while ensuring seamless coordination across all
                platforms.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default IndustrySoftware;

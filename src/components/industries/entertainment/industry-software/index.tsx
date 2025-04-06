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
              What you get with Impero’s on entertainment software development
            </h2>
          </Col>
        </Row>
        <Row className="gy-4 align-items-lg-stretch">
          <Col lg={6} className="order-lg-last">
            <AnimatedImageWithHeight
              className="fit-img rounded-5"
              loading="lazy"
              src={IMAGES.entertainment}
              alt="esg"
            />
          </Col>
          <Col lg={6} className="align-self-lg-center">
            <div className="card-body">
              <p className="fs-20 mb-4">
                Our entertainment software development services are tailored to
                help businesses in the entertainment sector streamline their
                operations, enhance user experiences, and optimize workflows.
                With over 15 years of expertise in the software engineering
                industry and a proven track record in creating specialized
                entertainment solutions, we understand the unique challenges
                that entertainment businesses face in a constantly evolving,
                fast-paced market.
              </p>
              <p className="fs-20">
                Our advanced entertainment software solutions automate essential
                tasks like content management, user interaction, and audience
                engagement, enabling businesses to deliver seamless experiences
                while improving operational efficiency and scalability.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default IndustrySoftware;

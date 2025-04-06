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
              What you get with Impero’s e-commerce software development
            </h2>
          </Col>
        </Row>
        <Row className="gy-4 align-items-lg-stretch">
          <Col lg={6} className="order-lg-last">
            <AnimatedImageWithHeight
              className="fit-img rounded-5"
              loading="lazy"
              src={IMAGES.eCommerceImage}
              alt="esg"
            />
          </Col>
          <Col lg={6} className="align-self-lg-center">
            <div className="card-body">
              <p className="fs-20 mb-4">
                Our e-commerce software development services are designed to
                help online retailers streamline their operations, enhance
                customer experiences, and optimize product management workflows.
                With over 15 years of expertise in the software engineering
                industry and a proven track record in building specialized
                e-commerce solutions, we understand the unique challenges online
                businesses face in a highly competitive and ever-evolving
                market.
              </p>
              <p className="fs-20">
                Our advanced e-commerce software solutions automate critical
                tasks like order processing, inventory management, and customer
                interactions. We enable e-commerce businesses to provide
                personalized shopping experiences, increase customer
                satisfaction, and scale operations efficiently while ensuring
                seamless coordination across all sales channels.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default IndustrySoftware;

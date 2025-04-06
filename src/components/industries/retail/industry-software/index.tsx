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
              What you get with Impero’s retail software development
            </h2>
          </Col>
        </Row>
        <Row className="gy-4 align-items-lg-stretch">
          <Col lg={6} className="order-lg-last">
            <AnimatedImageWithHeight
              className="fit-img rounded-5"
              loading="lazy"
              src={IMAGES.retail}
              alt="esg"
            />
          </Col>
          <Col lg={6} className="align-self-lg-center">
            <div className="card-body">
              <p className="fs-20 mb-4">
                Our custom retail software development services are designed to
                help retail businesses optimize operations, enhance customer
                experiences, and drive sales growth. With over 15 years in the
                software engineering market and extensive experience developing
                our own retail solutions, we understand the industry's unique
                challenges.
              </p>
              <p className="fs-20">
                Our advanced retail software solutions automate essential tasks
                like inventory management, sales tracking, and customer
                relationship management, improving the efficiency of retail
                operations and delivering seamless shopping experiences for
                customers.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default IndustrySoftware;

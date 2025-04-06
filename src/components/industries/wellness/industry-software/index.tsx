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
              What you get with Impero’s wellness software development
            </h2>
          </Col>
        </Row>
        <Row className="gy-4 align-items-lg-stretch">
          <Col lg={6} className="order-lg-last">
            <AnimatedImageWithHeight
              className="fit-img rounded-5"
              loading="lazy"
              src={IMAGES.wellness2}
              alt="esg"
            />
          </Col>
          <Col lg={6} className="align-self-lg-center">
            <div className="card-body">
              <p className="fs-20 mb-4">
                Our wellness software development services are designed to help
                businesses create personalized and engaging wellness
                experiences. With over 15 years of experience in software design
                and development, and a proven track record in building scalable
                wellness solutions, we understand the unique challenges the
                wellness industry faces in an evolving market.
              </p>
              <p className="fs-20">
                Our advanced wellness software solutions focus on client
                engagement, program management, personalized experiences, and
                operational efficiency. We empower wellness providers to enhance
                client satisfaction, streamline service delivery, and ensure
                smooth operation across multiple platforms, all while optimizing
                business growth.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default IndustrySoftware;

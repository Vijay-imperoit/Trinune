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
              What you get with Impero’s finance software development
            </h2>
          </Col>
        </Row>
        <Row className="gy-4 align-items-lg-stretch">
          <Col lg={6} className="order-lg-last">
            <AnimatedImageWithHeight
              className="fit-img rounded-5"
              loading="lazy"
              src={IMAGES.finance2}
              alt="esg"
            />
          </Col>
          <Col lg={6} className="align-self-lg-center">
            <div className="card-body">
              <p className="fs-20 mb-4">
                Our finance platform development services are designed to help
                financial institutions create secure, efficient, and scalable
                solutions. With over 15 years of experience in platform design
                and development, and a proven track record in building robust
                financial solutions, we understand the unique challenges the
                finance industry faces in a rapidly evolving digital landscape.
              </p>
              <p className="fs-20">
                Our advanced finance solutions focus on operational efficiency,
                real-time analytics, risk management, and secure data handling.
                We empower financial providers to enhance decision-making,
                streamline financial operations, and ensure seamless integration
                across multiple financial systems, all while driving business
                growth and ensuring regulatory compliance.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default IndustrySoftware;

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
              What you get with Impero’s SaaS software development
            </h2>
          </Col>
        </Row>
        <Row className="gy-4 align-items-lg-stretch">
          <Col lg={6} className="order-lg-last">
            <AnimatedImageWithHeight
              className="fit-img rounded-5"
              loading="lazy"
              src={IMAGES.saas2}
              alt="esg"
            />
          </Col>
          <Col lg={6} className="align-self-lg-center">
            <div className="card-body">
              <p className="fs-20 mb-4">
                Our SaaS software development services are tailored to help
                businesses scale and optimize their software solutions. With
                over 15 years of experience in software engineering and a proven
                track record in building flexible and scalable SaaS platforms,
                we understand the challenges SaaS companies face in rapidly
                evolving markets.
              </p>
              <p className="fs-20">
                Our advanced SaaS solutions automate core tasks such as
                subscription management, user onboarding, and customer support.
                We empower SaaS businesses to improve customer retention,
                personalize user experiences, and ensure seamless integration
                across multiple platforms, all while scaling operations
                efficiently.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default IndustrySoftware;

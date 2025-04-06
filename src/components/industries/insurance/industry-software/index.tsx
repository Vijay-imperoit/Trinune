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
              What you get with Impero’s insurance software development
            </h2>
          </Col>
        </Row>
        <Row className="gy-4 align-items-lg-stretch">
          <Col lg={6} className="order-lg-last">
            <AnimatedImageWithHeight
              className="fit-img rounded-5"
              loading="lazy"
              src={IMAGES.banking}
              alt="esg"
            />
          </Col>
          <Col lg={6} className="align-self-lg-center">
            <div className="card-body">
              <p className="fs-20 mb-4">
                Our insurance platform development services are designed to help
                insurance providers create secure, personalized, and efficient
                insurance experiences. With over 15 years of experience in
                platform design and development, and a proven track record in
                building scalable insurance solutions, we understand the unique
                challenges the insurance industry faces in a rapidly evolving
                digital landscape.
              </p>
              <p className="fs-20">
                Our advanced insurance solutions focus on customer engagement,
                secure policy management, personalized insurance services, and
                operational efficiency. We empower insurance providers to
                enhance customer satisfaction, streamline claims processing, and
                ensure seamless operation across multiple devices, all while
                optimizing business growth.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default IndustrySoftware;

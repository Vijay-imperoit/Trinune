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
              What you get with Impero’s social networking software development
            </h2>
          </Col>
        </Row>
        <Row className="gy-4 align-items-lg-stretch">
          <Col lg={6} className="order-lg-last">
            <AnimatedImageWithHeight
              className="fit-img rounded-5"
              loading="lazy"
              src={IMAGES.sn2}
              alt="esg"
            />
          </Col>
          <Col lg={6} className="align-self-lg-center">
            <div className="card-body">
              <p className="fs-20 mb-4">
                Our social networking platform development services are designed
                to help businesses create personalized and engaging social
                experiences. With over 15 years of experience in platform design
                and development, and a proven track record in building scalable
                social solutions, we understand the unique challenges the social
                networking industry faces in an evolving digital landscape.
              </p>
              <p className="fs-20">
                Our advanced social networking solutions focus on user
                engagement, community building, personalized interactions, and
                operational efficiency. We empower social platform providers to
                enhance user satisfaction, streamline content delivery, and
                ensure seamless operation across multiple platforms, all while
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

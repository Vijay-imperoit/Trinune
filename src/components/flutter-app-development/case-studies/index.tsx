import { Col, Container, Row } from "react-bootstrap";
import CaseStudiesCards from "../../landing-page/case-studies/case-studies";

const CaseStudies = () => {
  return (
    <section className="section custom-blog-cursor">
      <Container>
        <div className="title-box text-center">
          <Row>
            <Col xs={12}>
              <h2 className="title-2">Explore Our Success Stories</h2>
              <p>
                Discover projects that have thrilled clients and delighted
                users, crafted with cutting-edge technologies by our expert
                team. See firsthand what we can achieve for you.
              </p>
            </Col>
          </Row>
        </div>
      </Container>
      <CaseStudiesCards />
    </section>
  );
};

export default CaseStudies;

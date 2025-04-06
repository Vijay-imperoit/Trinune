import { Col, Container, Row } from 'react-bootstrap';
import CaseStudiesCards from '../../landing-page/case-studies/case-studies';

const CaseStudies = () => {
  return (
    <section className="section custom-blog-cursor">
      <Container>
        <Row>
          <Col
            xs={12}
            className="title-box text-center"
          >
            <h2 className="title-2">Our UX & UI design portfolio</h2>
          </Col>
        </Row>
      </Container>
      <CaseStudiesCards />
    </section>
  );
};

export default CaseStudies;

import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import CaseStudiesCards from "../../../landing-page/case-studies/case-studies";

const HCSuccessStories = () => {
  return (
    <section className="section custom-blog-cursor">
      <Container>
        <div className="title-box text-center">
          <Row>
            <Col xs={12}>
              <h2 className="title-2">Featured Projects and Case Studies</h2>
              <p>
                See how Impero has helped its clients achieve their vision of
                digital innovation.
              </p>
            </Col>
          </Row>
        </div>
      </Container>
      <CaseStudiesCards />
    </section>
  );
};

export default HCSuccessStories;

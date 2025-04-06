import { Col, Container, Row } from "react-bootstrap";
// import "./style.css";
import CaseStudiesCards from "../../landing-page/case-studies/case-studies";

const Portfolio = () => {
  return (
    <section className="section custom-blog-cursor">
      <Container>
        <Row className="justify-content-center">
          <Col
            xs={12}
            lg={11}
            xl={9}
            xxl={8}
            className="title-box text-center"
          >
            <h2 className="title-2">
              Our custom application development successes
            </h2>
            <p>
              Discover projects that have thrilled clients and delighted users,
              crafted with cutting-edge technologies by our expert team. See
              firsthand what we can achieve for you.
            </p>
          </Col>
        </Row>
      </Container>
      <CaseStudiesCards />
    </section>
  );
};

export default Portfolio;

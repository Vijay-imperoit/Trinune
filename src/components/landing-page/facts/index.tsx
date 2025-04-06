import FactsSection from "./facts-section";
import { Col, Container, Row } from "react-bootstrap";
const Facts = () => {
  return (
    <section className="section custom-blog-cursor">
      <Container>
        <Row>
          <Col
            xs={12}
            lg={8}
            className="mx-auto"
          >
            <div className="title-box text-center">
              <h2 className="title-2">Awards and Recognitions</h2>
              <p>
                Prestigious associations and awards programs acknowledge our
                leadership and the value that Impero’s solutions, products and
                services bring to our clients
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <FactsSection />
    </section>
  );
};

export default Facts;

import { Col, Container, Row } from "react-bootstrap";
import FactsSection from "../../landing-page/facts/facts-section";

const TopBrandSection = () => {
  return (
    <div className="section custom-blog-cursor">
      <Container>
        <Row>
          <Col className="col-12  mx-auto">
            <div className="title-box text-center">
              <h2 className="title-2">
                Interesting facts of the startups we've helped
              </h2>
            </div>
          </Col>
        </Row>
      </Container>
      <FactsSection />
    </div>
  );
};

export default TopBrandSection;

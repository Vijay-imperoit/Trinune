import { Col, Container, Row } from "react-bootstrap";
import OurTeam from "./outTeam";

const LeadershipTeam = () => {
  return (
    <section className="section bg-light-blue custom-blog-cursor">
      <Container>
        <Row className="gy-20">
          <Col
            lg={8}
            className="mx-auto"
          >
            <div className="title-box text-center">
              <h2 className="title-2">Leadership Team</h2>
              <p>
                Meet the global leaders delivering Impero’s award-winning
                services
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <OurTeam />
    </section>
  );
};

export default LeadershipTeam;

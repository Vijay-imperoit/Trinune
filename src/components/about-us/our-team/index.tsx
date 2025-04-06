import { Col, Container, Row } from "react-bootstrap";
import OurTeam from "../../landing-page/leadership-team/outTeam";

const LeadershipTeam = () => {
  return (
    <section className="section bg-light-blue custom-blog-cursor">
      <Container>
        <Row className="gy-20">
          <Col lg={8} className="mx-auto">
            <div className="title-box text-center">
              <h2 className="title-2">Meet Our Dedicated Team</h2>
              <p>
                Our global presence assures that inputs from all over the world
                firmly back your app idea — an extraordinary team of
                technological experts & Startups advisors at your help.
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

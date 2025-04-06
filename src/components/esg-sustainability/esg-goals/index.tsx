import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { IMAGES } from "../../../utils/staticJSON";

const ESGGoals = () => {
  return (
    <section className="section scroll-section custom-blog-cursor-white">
      <Container>
        <Row className="gy-4 align-items-center title-box">
          <Col xs={7}>
            <h2 className="title-2 text-white mb-0">How we help you ?</h2>
          </Col>
          <Col lg={5}>
            <p className="fs-20 fw-normal text-white mb-0">
              Achieve your ESG goals with our expert guidance on strategy,
              implementation, and reporting.
            </p>
          </Col>
        </Row>
        <Row className="scroll-item gx-lg-5 mb-4 mb-md-5">
          <Col lg={7}>
            <img
              className="img-fluid"
              src={IMAGES.esgHero1}
              width="649"
              height="317"
              alt="carbon-footprint-reduction"
              loading="lazy"
            />
          </Col>
          <Col
            lg={5}
            className="text-white"
          >
            <h3 className="h3-title">Carbon footprint reduction</h3>
            <p className="pera">
              We conduct a thorough analysis of your direct and indirect
              emissions, developing tailored strategies to minimize carbon
              outputs. This includes the adoption of renewable energy sources
              and energy-efficient technologies, all aimed at significantly
              reducing your environmental footprint and promoting long-term
              sustainability.
            </p>
          </Col>
        </Row>
        <Row className="scroll-item gx-lg-5 mb-4 mb-md-5">
          <Col lg={7}>
            <img
              className="img-fluid"
              src={IMAGES.comprehensiveEsgReporting}
              width="649"
              height="317"
              alt="esg"
              loading="lazy"
            />
          </Col>
          <Col
            lg={5}
            className="text-white"
          >
            <h3 className="h3-title">Comprehensive ESG reporting</h3>
            <p className="pera">
              We guide you through the process of creating transparent and
              accurate ESG reports, ensuring compliance with EU’s 2024
              regulations. Our tools provide the insights necessary to track
              your sustainability goals and achievements, demonstrating your
              dedication to environmental, social, and governance impact.
            </p>
          </Col>
        </Row>
        <Row className="scroll-item gx-lg-5">
          <Col lg={7}>
            <img
              className="img-fluid"
              src={IMAGES.ensureSustainablePractices}
              width="649"
              height="317"
              alt="practices"
              loading="lazy"
            />
          </Col>
          <Col
            lg={5}
            className="text-white"
          >
            <h3 className="h3-title">Ensure sustainable practices</h3>
            <p className="pera">
              We help optimize your supply chains to reduce emissions and
              promote sustainability within your operations. Our employee
              engagement programs foster a culture of sustainability, while
              integrating circular economy principles to minimize waste and
              support sustainable practices across your business.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ESGGoals;

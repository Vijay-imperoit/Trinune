import { Accordion, Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { IMAGES } from "../../../utils/staticJSON";
import AnimatedImageWithOpacity from '../../../global/AnimatedImageWithOpacity';

const DegreeCoverage = () => {
  return (
    <section className="section custom-blog-cursor">
      <Container>
        <Row className="justify-content-center gy-4 mb-5">
          <Col
            lg={9}
            className="text-center"
          >
            <div className="title-box mb-0">
              <h2 className="title-2 mb-3">
                360 Degree Coverage of All your ESG Problems.
              </h2>
              <p className="fs-18 fw-normal mb-0">
                Leverage our ESG expertise to excel in compliance and
                sustainability with SFDR, CSRD, CSDDD, CBAM, Fit for 55, and the
                EU Taxonomy.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="gy-4 align-items-lg-stretch">
          <Col
            lg={7}
            className="align-self-lg-center"
          >
            <div className="card-body">
              <div className="default-faqs-uiux">
                <div
                  className="accordion accordion-flush custom-blog-cursor"
                  id="ImperoFAQs"
                >
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header className='custom-blog-cursor-white'>
                        <AnimatedImageWithOpacity
                          src={IMAGES.navigateIcon}
                          className="me-3"
                          height="44"
                          width="40"
                          alt="navigate"
                          loading="lazy"
                        />
                        Navigate the SFDR
                      </Accordion.Header>
                      <Accordion.Body>
                        Understand and implement the Sustainable Finance
                        Disclosure Regulation to enhance transparency.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        <AnimatedImageWithOpacity
                          src={IMAGES.adapting}
                          className="me-3"
                          height="44"
                          width="40"
                          alt="adapting"
                          loading="lazy"
                        />
                        Adapting to the CSRD
                      </Accordion.Header>
                      <Accordion.Body>
                        Expand your reporting capabilities in line with the
                        Corporate Sustainability Reporting Directive.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        <AnimatedImageWithOpacity
                          src={IMAGES.mastering}
                          className="me-3"
                          height="44"
                          width="40"
                          alt="mastering"
                          loading="lazy"
                        />
                        Mastering the CBAM
                      </Accordion.Header>
                      <Accordion.Body>
                        Align your business with the Carbon Border Adjustment
                        Mechanism for fair and competitive trade practices.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={5}>
            <AnimatedImageWithOpacity
              className="img-fluid fit-img"
              src={IMAGES.esgProblems}
              width="452"
              height="392"
              alt="esg-problems"
              loading="lazy"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DegreeCoverage;

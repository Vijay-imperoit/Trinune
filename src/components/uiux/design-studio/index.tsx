import { Accordion, Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { IMAGES } from "../../../utils/staticJSON";
import { useState } from 'react';
import AnimatedImageWithOpacity from '../../../global/AnimatedImageWithOpacity';

const DesignStudio = () => {
  const [activeImage, setActiveImage] = useState(IMAGES.uniqueProcess1);

  const imageMapping: any = {
    "0": IMAGES.uniqueProcess1,
    "1": IMAGES.uniqueProcess2,
    "2": IMAGES.uniqueProcess3,
    "3": IMAGES.uniqueProcess4,
    "4": IMAGES.uniqueProcess5,
  };

  console.log()

  return (
    <section className="section custom-blog-cursor">
      <Container>
        <Row className="justify-content-center gy-4 mb-5">
          <Col
            md={6}
            lg={5}
          >
            <div className="title-box mb-0">
              <h2 className="title-2 mb-0">
                UI/UX design studio with a unique process.
              </h2>
            </div>
          </Col>
          <Col
            md={6}
            className="offset-lg-1"
          >
            <p className="fs-18 fw-normal mb-0">
              We combine our expertise with client insights to design solutions
              that seamlessly connect with their audience.
            </p>
          </Col>
        </Row>
        <Row className="g-4">
          <Col lg={7}>
            <div className="default-faqs-uiux">
              <Accordion
                defaultActiveKey="0"
                className="accordion-flush"
                id="ImperoUIUX"
                onSelect={(eventKey: any) =>
                  setActiveImage(imageMapping[eventKey])
                }
              >
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <span className="fs-26 fw-bold text-black-50 me-3">01</span>
                    UX analysis and evaluation
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      We conduct thorough UX analysis to assess your product’s
                      current user experience, identifying areas for improvement
                      and ensuring the design meets user needs and business
                      goals.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <span className="fs-26 fw-bold text-black-50 me-3">02</span>
                    Wireframing
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Our wireframe and prototyping services help turn your
                      ideas into tangible designs, allowing you to visualize
                      your concept. Our process fosters collaboration, clarifies
                      planning and roadmaps.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <span className="fs-26 fw-bold text-black-50 me-3">03</span>
                    Designing the interface
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      We create visually appealing and user-friendly interfaces,
                      focusing on usability and aesthetics to ensure your
                      product is engaging and intuitive for the audience.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    <span className="fs-26 fw-bold text-black-50 me-3">04</span>
                    Rapid prototyping
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Our rapid prototyping process enables you to quickly test
                      and refine ideas, ensuring your design concept is both
                      functional and user-friendly before full-scale
                      development.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    <span className="fs-26 fw-bold text-black-50 me-3">05</span>
                    Usability Testing
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      We conduct extensive usability testing to gather feedback
                      from real users, identifying any issues and fine-tuning
                      the design to enhance user satisfaction and performance.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </Col>
          <Col lg={5}>
            <AnimatedImageWithOpacity
              className="img-fluid fit-img"
              src={activeImage || IMAGES.uniqueProcess1}
              width="452"
              height="392"
              alt="unique-process"
              loading="lazy"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DesignStudio;

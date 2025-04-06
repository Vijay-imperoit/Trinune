import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { IMAGES } from "../../../../utils/staticJSON";

const TechnologyExpertise = () => {
  return (
    <div className="section custom-blog-cursor">
      <Container>
        <div className="technology-expertise-box">
          <Row className="gy-3">
            <Col lg={12}>
              <h2 className="title-2 mb-3">
                Our technology expertise for on-demand software development
              </h2>
              <p className="mb-0">
                Empower your business with our cutting-edge technologies. As a
                top provider of on-demand software development, we create
                flexible and scalable solutions tailored to your unique needs.
              </p>
            </Col>
          </Row>

          <div className="card g-0 flex-lg-row row">
            <div className="col-lg-4 gray-box p-4">
              <div className="h-100 d-flex">
                <div className="my-auto">
                  <img
                    src={IMAGES.blockChainIcon}
                    width="40"
                    height="40"
                    className="mb-3"
                    alt="blockchain"
                    loading="lazy"
                  />
                  <h3 className="title-4 fw-500 mb-0">Blockchain</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-6 card-body align-self-center p-4">
              <p className="mb-0">
                We use blockchain technology to ensure secure, transparent, and
                immutable records, making your business operations more
                trustworthy and efficient.
              </p>
            </div>
          </div>

          <div className="card g-0 flex-lg-row row">
            <div className="col-lg-4 gray-box p-4">
              <div className="h-100 d-flex">
                <div className="my-auto">
                  <img
                    src={IMAGES.aiIcon}
                    width="40"
                    height="40"
                    className="mb-3"
                    alt="ai"
                    loading="lazy"
                  />
                  <h3 className="title-4 fw-500 mb-0">
                    Artificial Intelligence
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-6 card-body p-4 align-self-center">
              <p className="mb-0">
                AI drives personalized experiences and operational efficiency.
                We help you integrate AI for smarter decision-making,
                predictions, and automation.
              </p>
            </div>
          </div>

          <div className="card g-0 flex-lg-row row">
            <div className="col-lg-4 gray-box p-4">
              <div className="h-100 d-flex">
                <div className="my-auto">
                  <img
                    src={IMAGES.iomtIcon}
                    width="40"
                    height="40"
                    className="mb-3"
                    alt="iot"
                    loading="lazy"
                  />
                  <h3 className="title-4 fw-500 mb-0">
                    Internet of Things (IoT)
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-6 card-body p-4 align-self-center">
              <p className="mb-0">
                IoT connects devices and systems, providing real-time insights
                and greater control over operations. It optimizes inventory,
                improves customer experiences, and enhances your overall service
                offering.
              </p>
            </div>
          </div>

          <div className="card g-0 flex-lg-row row">
            <div className="col-lg-4 gray-box p-4">
              <div className="h-100 d-flex">
                <div className="my-auto">
                  <img
                    src={IMAGES.gaiIcon}
                    width="40"
                    height="40"
                    className="mb-3"
                    alt="generative ai"
                    loading="lazy"
                  />
                  <h3 className="title-4 fw-500 mb-0">Generative AI</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-6 card-body p-4 align-self-center">
              <p className="mb-0">
                Generative AI allows for creative and efficient marketing,
                product design, and customer service solutions. We help you
                leverage this technology for innovative business growth.
              </p>
            </div>
          </div>

          <div className="card g-0 flex-lg-row row">
            <div className="col-lg-4 gray-box p-4">
              <div className="h-100 d-flex">
                <div className="my-auto">
                  <img
                    src={IMAGES.biIcon}
                    width="40"
                    height="40"
                    className="mb-3"
                    alt="bi"
                    loading="lazy"
                  />
                  <h3 className="title-4 fw-500 mb-0">Business Intelligence</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-6 card-body p-4 align-self-center">
              <p className="mb-0">
                We harness Business Intelligence to turn data into actionable
                insights, empowering your business to make informed decisions
                and streamline operations for better outcomes.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TechnologyExpertise;

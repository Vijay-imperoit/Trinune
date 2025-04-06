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
                Our technology expertise for the SaaS industry
              </h2>
              <p className="mb-0">
                Empower your SaaS business with our cutting-edge technologies.
                As a leading provider of SaaS software development, we build
                scalable and reliable solutions designed to optimize your
                operations, enhance user experiences, and streamline service
                delivery.
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
                We leverage blockchain technology to ensure secure, transparent,
                and tamper-proof data management, enabling seamless
                integrations, payment systems, and user authentication for SaaS
                platforms.
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
                AI enhances SaaS solutions with predictive analytics, automated
                workflows, and personalized user experiences. We integrate AI to
                boost customer retention, optimize operations, and improve
                decision-making.
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
                IoT provides SaaS businesses with real-time data and device
                connectivity. We implement IoT solutions to enhance monitoring,
                analytics, and automation across various industries.
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
                Generative AI enables SaaS platforms to deliver dynamic content,
                including automated reports, personalized communications, and
                unique digital assets, enhancing creativity and user engagement.
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
                Business Intelligence (BI) transforms SaaS data into actionable
                insights. We optimize key metrics like customer acquisition,
                churn reduction, and revenue forecasting to drive business
                growth.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TechnologyExpertise;

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
                Our technology expertise for logistics platforms
              </h2>
              <p className="mb-0">
                Empower your logistics platform with our innovative technology
                solutions. As a leading provider of logistics platform
                development services, we create flexible and scalable solutions
                designed to enhance operational efficiency, optimize supply
                chain management, and streamline fleet operations.
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
                Blockchain technology ensures secure, transparent transactions
                and helps in tracking goods across the supply chain, preventing
                fraud and enhancing trust.
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
                AI enhances route optimization, predicts delivery times,
                automates inventory management, and improves fleet management
                for higher operational efficiency.
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
                IoT technology enables real-time monitoring of shipments, fleet
                conditions, and vehicle locations, improving delivery accuracy
                and logistics management.
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
                Generative AI can assist in route planning, create dynamic
                delivery schedules, and optimize supply chain decisions,
                ensuring smoother operations and reduced costs.
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
                Business Intelligence (BI) tools analyze shipment data, monitor
                fleet performance, and track supply chain efficiency, providing
                insights to optimize logistics operations.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TechnologyExpertise;

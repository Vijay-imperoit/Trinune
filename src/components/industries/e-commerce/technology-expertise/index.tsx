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
                Our technology expertise for the e-commerce sector
              </h2>
              <p className="mb-0">
                Empower your e-commerce business with our innovative
                technologies. As a leading provider of e-commerce software
                development, we create flexible and scalable solutions designed
                to optimize your operations, enhance customer experiences, and
                streamline online sales processes.
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
                and immutable records in your e-commerce operations, enhancing
                transactions, payments, and customer data management.
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
                AI helps personalize the shopping experience, from tailored
                product recommendations to dynamic pricing. We integrate AI to
                enhance customer interactions, improve inventory management, and
                optimize marketing efforts.
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
                IoT connects products and devices to provide real-time insights.
                We implement IoT solutions to track inventory, manage supply
                chains, and enhance customer interactions across all
                touchpoints.
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
                Generative AI helps create dynamic content for personalized
                marketing, product descriptions, and digital ads. We harness
                this technology to boost creativity and enhance customer
                engagement.
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
                Business Intelligence (BI) turns data from your e-commerce
                platform into actionable insights. We help optimize sales,
                customer behavior analysis, and inventory forecasting to drive
                profitability.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TechnologyExpertise;

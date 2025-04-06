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
                Our technology expertise for news platforms
              </h2>
              <p className="mb-0">
                Empower your news platform with our innovative technology
                solutions. As a leading provider of news platform development
                services, we create flexible and scalable solutions designed to
                enhance audience engagement, optimize content delivery, and
                streamline platform operations.
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
                We leverage blockchain technology to ensure content
                authenticity, combat misinformation, and provide transparency in
                digital publishing, building trust within your news platform.
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
                AI enhances reader engagement by personalizing content
                recommendations, automating news categorization, and providing
                real-time analytics to improve audience satisfaction.
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
                IoT technology enables real-time updates on breaking news,
                monitors reader interaction across devices, and delivers
                personalized, location-specific news content.
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
                Generative AI can create dynamic headlines, auto-generate
                article summaries, and assist in content creation, making news
                delivery faster and more audience-centric.
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
                Business Intelligence (BI) tools analyze audience behavior,
                identify trending topics, and track content performance,
                enabling data-driven strategies to grow your news platform and
                enhance reader engagement.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TechnologyExpertise;

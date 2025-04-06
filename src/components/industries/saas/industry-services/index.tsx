import { Col, Container, Row } from "react-bootstrap";
import "./style.css";

const IndustryServices = () => {
  return (
    <div className="section lasting-solutions-flutter custom-blog-cursor-white">
      <Container>
        <Row className="gy-5 align-items-start">
          <Col
            lg={5}
            className="sticky-lg-top top-50"
          >
            <h2 className="title-2 text-white mb-4">
              Our Innovative SaaS services
            </h2>
            <p className="fs-20 fw-normal text-white mb-0">
              We will help you implement and maintain a tailored, cost-effective
              technology solution that supports your business goals and best
              meets your patients' needs.
            </p>
          </Col>
          <Col
            lg={7}
            className="development-services-flutter no-scroll text-white"
          >
            <div className="py-4">
              <div className="card-body">
                <h3 className="mb-3">Custom SaaS Development</h3>
                <p className="fs-16 text-dark-gray mb-0">
                  Tailored SaaS solutions designed to meet the unique needs of
                  your business, from project management tools to comprehensive
                  customer relationship management (CRM) systems.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3 className="mb-3">Data Analytics and Insights</h3>
                <p className="fs-16 text-dark-gray mb-0">
                  Advanced analytics services that transform raw data into
                  actionable insights, enabling informed decision-making and
                  strategic planning for SaaS applications.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3 className="mb-3">Multi-Tenant Architecture</h3>
                <p className="fs-16 text-dark-gray mb-0">
                  Robust frameworks that allow multiple customers to share the
                  same application while ensuring data security and privacy,
                  optimizing resource utilization.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3 className="mb-3">API Integration Services</h3>
                <p className="fs-16 text-dark-gray mb-0">
                  Comprehensive solutions that facilitate seamless integration
                  with third-party applications, enhancing functionality and
                  user experience.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3 className="mb-3">Subscription Management Solutions</h3>
                <p className="fs-16 text-dark-gray mb-0">
                  Tools designed to manage billing, invoicing, and subscription
                  lifecycles, ensuring a smooth experience for both businesses
                  and customers.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default IndustryServices;

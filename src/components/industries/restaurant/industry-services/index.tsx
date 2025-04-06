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
              Our Innovative restaurant services
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
                <h3 className="mb-3">Custom Restaurant Software Development</h3>
                <p className="fs-16 text-dark-gray mb-0">
                  Tailored restaurant solutions designed to meet the unique
                  needs of your establishment, from point-of-sale (POS) systems
                  to comprehensive reservation and management platforms.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3 className="mb-3">Data Analytics and Insights</h3>
                <p className="fs-16 text-dark-gray mb-0">
                  Advanced analytics services that transform raw data into
                  actionable insights, enabling informed decision-making and
                  strategic planning for restaurant operations.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3 className="mb-3">Online Ordering and Delivery Systems</h3>
                <p className="fs-16 text-dark-gray mb-0">
                  Robust tools that facilitate seamless online ordering,
                  delivery management, and customer engagement, ensuring a
                  smooth dining experience.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3 className="mb-3">
                  Customer Relationship Management (CRM) Solutions
                </h3>
                <p className="fs-16 text-dark-gray mb-0">
                  Comprehensive systems that help restaurants manage customer
                  interactions, improve engagement, and foster loyalty.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3 className="mb-3">
                  Inventory and Supply Chain Management Tools
                </h3>
                <p className="fs-16 text-dark-gray mb-0">
                  Solutions designed to optimize inventory levels, reduce waste,
                  and ensure timely procurement of ingredients and supplies.
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

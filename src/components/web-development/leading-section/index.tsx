import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { IMAGES } from "../../../utils/staticJSON";
import AnimatedImageWithOpacity from '../../../global/AnimatedImageWithOpacity';

const LeadingSection = () => {
  return (
    <div className="section custom-blog-cursor">
      <Container fluid>
        <Row className="align-items-lg-stretch gy-3">
          <Col
            lg={6}
            className="align-self-lg-center text-center text-lg-start"
          >
            <div className="card-body ps-md-5 ms-xxl-5">
              <h2 className="title-2 mb-3">
                Leading Web App Development Services for Your Business
                <br /> Success
              </h2>
              <p className="fs-20 fw-normal">
                Elevate your business with our top-tier web app development
                services, crafting custom solutions that drive efficiency,
                growth, and seamless user experiences.
              </p>
              {/* <a
                href="#"
                className="btn btn-primary"
              >
                Talk to US Now!
              </a> */}
            </div>
          </Col>
          <Col
            lg={6}
            className="text-center text-lg-end right-side-img"
          >
            <AnimatedImageWithOpacity
              className="img-fluid h-100 w-100"
              width="698"
              height="464"
              src={IMAGES.webDevelopment}
              alt="web-development"
              loading="lazy"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LeadingSection;

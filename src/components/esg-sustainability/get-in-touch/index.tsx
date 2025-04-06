import { Col, Row } from "react-bootstrap";
import "./style.css";
import { IMAGES } from "../../../utils/staticJSON";
import AnimatedImageWithOpacity from '../../../global/AnimatedImageWithOpacity';

const GetInTouch = () => {
  return (
    <section className="section section-get-in-touch green">
      <div className="container-fluid">
        <Row className="row gy-4 align-items-center">
          <Col lg={8} className="text-center text-lg-start">
            <div className="ps-xl-5 ms-xl-5 ps-lg-5 p-4">
              <h3 className="title">
                Join the movement towards a sustainable future!
              </h3>
              <p className="sub-title">
                Our commitment goes beyond consultancy. We partner with you to
                implement ESG principles at the core of your operations, driving
                change that benefits your business, society, and the planet.
              </p>
              <a href="/contact-us" className="btn btn-primary custom-cursor">
                Get in Touch
              </a>
            </div>
          </Col>
          <Col lg={4} className="text-center text-xxl-end pe-lg-0">
            <AnimatedImageWithOpacity
              className="img-fluid"
              src={IMAGES.macBookProGreen}
              width="487"
              height="295"
              alt="mobile"
              loading="lazy"
            />
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default GetInTouch;

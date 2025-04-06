import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { IMAGES } from "../../../utils/staticJSON";
import AnimatedImageWithOpacity from '../../../global/AnimatedImageWithOpacity';

const WorkingAtImpero = () => {
  return (
    <div className="section lasting-solutions-careers  custom-blog-cursor-white">
      <Container>
        <Row className="gy-4 mb-5">
          <Col
            lg={5}
            md={6}
          >
            <div className="title-box mb-0">
              <h2 className="title-2 text-white mb-0">
                Perks of working at Impero!
              </h2>
            </div>
          </Col>
          <Col
            md={6}
            className="offset-lg-1"
          >
            <p className="fs-18 fw-normal text-white mb-0">
              Go beyond the ordinary! Enjoy a culture of innovation, flexible
              work-life balance, continuous learning opportunities, and a
              supportive team that celebrates your growth and success. Here,
              your ideas matter, and your potential is limitless!
            </p>
          </Col>
        </Row>
        <Row className="g-4 text-center text-md-start">
          <Col
            lg={4}
            md={6}
            className="flutter-card-careers d-flex"
          >
            <div className="card">
              <div className="card-body p-4">
                <AnimatedImageWithOpacity
                  src={IMAGES.holiday}
                  className="mb-3"
                  alt=""
                />
                <h3 className="title fs-24 text-white mb-2">
                  Holidays on Saturdays
                </h3>
                <p className="text-white mb-0">
                  After a week of hard work,
                  <br /> recharge with weekends off, as we prioritise both
                  physical and mental well-being.
                </p>
              </div>
            </div>
          </Col>
          <Col
            lg={4}
            md={6}
            className="flutter-card-careers d-flex"
          >
            <div className="card">
              <div className="card-body p-4">
                <AnimatedImageWithOpacity
                  src={IMAGES.skill_enhancement}
                  className="mb-3"
                  alt=""
                />
                <h3 className="title fs-24 text-white mb-2">
                  Skills Enhancement
                </h3>
                <p className="text-white mb-0">
                  Monthly, we host top mentors for training, followed by a fun
                  <br />
                  session to uplift your spirits
                </p>
              </div>
            </div>
          </Col>
          <Col
            lg={4}
            md={6}
            className="flutter-card-careers d-flex"
          >
            <div className="card">
              <div className="card-body p-4">
                <AnimatedImageWithOpacity
                  src={IMAGES.medical_insurance}
                  className="mb-3"
                  alt=""
                />
                <h3 className="title fs-24 text-white mb-2">
                  Medical insurance
                </h3>
                <p className="text-white mb-0">
                  We support remote work with
                  <br /> net charge coverage & provide comprehensive medical
                  <br />
                  insurance for your safety.
                </p>
              </div>
            </div>
          </Col>
          <Col
            lg={4}
            md={6}
            className="flutter-card-careers d-flex"
          >
            <div className="card">
              <div className="card-body p-4">
                <AnimatedImageWithOpacity
                  src={IMAGES.annual_team}
                  className="mb-3"
                  alt=""
                />
                <h3 className="title fs-24 text-white mb-2">
                  Annual team outings
                </h3>
                <p className="text-white mb-0">
                  Enjoy fun both in the office and
                  <br /> on exciting trips, offering a refreshing break from the
                  tech world.
                </p>
              </div>
            </div>
          </Col>
          <Col
            lg={4}
            md={6}
            className="flutter-card-careers d-flex"
          >
            <div className="card">
              <div className="card-body p-4">
                <AnimatedImageWithOpacity
                  src={IMAGES.great_place}
                  className="mb-3"
                  alt=""
                />
                <h3 className="title fs-24 text-white mb-2">A great place</h3>
                <p className="text-white mb-0">
                  Deliver great results in our top-
                  <br />
                  notch office with all the
                  <br /> amenities, designed to inspire
                  <br /> and support your best work.
                </p>
              </div>
            </div>
          </Col>
          <Col
            lg={4}
            md={6}
            className="flutter-card-careers d-flex"
          >
            <div className="card">
              <div className="card-body p-4">
                <AnimatedImageWithOpacity
                  src={IMAGES.funding_course}
                  className="mb-3"
                  alt=""
                />
                <h3 className="title fs-24 text-white mb-2">
                  Funding your courses
                </h3>
                <p className="text-white mb-0">
                  Impero offers 50% funding for courses to boost your skills.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WorkingAtImpero;

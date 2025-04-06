import { Col, Container, Row } from 'react-bootstrap';
import './style.css';
import { IMAGES } from '../../../utils/staticJSON';
import AnimatedImageWithOpacity from '../../../global/AnimatedImageWithOpacity';

const IndustriesMasteryService = () => {
  return (
    <div className="section custom-blog-cursor">
      <Container>
        <Row className="align-items-center">
          <Col lg={5}>
            <h2 className="title-2">
              Industries we add value to with our mastery!
            </h2>
            <p className="fs-18 fw-normal text-black-50">
              If you want a web application that is well sorted, easy to manage
              and carries out all your manual tasks in just a click then we are
              here to make things easier for you.
            </p>
          </Col>
          <Col lg={7}>
            <Row className="justify-content-center gy-3">
              <Col className="col-auto">
                <div className="card mastery-card-web">
                  <div className="box-icon">
                    <AnimatedImageWithOpacity
                      src={IMAGES.gamingIndustries}
                      width="28"
                      height="28"
                      alt="Gaming"
                      loading="lazy"
                    />
                  </div>
                  <p className="card-text">Gaming</p>
                </div>
              </Col>
              <Col className="col-auto">
                <div className="card mastery-card-web">
                  <div className="box-icon">
                    <AnimatedImageWithOpacity
                      src={IMAGES.entertainmentIndustries}
                      width="28"
                      height="28"
                      alt="Entertainment"
                      loading="lazy"
                    />
                  </div>
                  <p className="card-text">Entertainment</p>
                </div>
              </Col>
              <Col className="col-auto">
                <div className="card mastery-card-web">
                  <div className="box-icon">
                    <AnimatedImageWithOpacity
                      src={IMAGES.sportsIndustries}
                      width="28"
                      height="28"
                      alt="Sports"
                      loading="lazy"
                    />
                  </div>
                  <p className="card-text">Sports</p>
                </div>
              </Col>
              <Col className="col-auto">
                <div className="card mastery-card-web">
                  <div className="box-icon">
                    <AnimatedImageWithOpacity
                      src={IMAGES.interiorDesigningIndustries}
                      width="28"
                      height="28"
                      alt="Interior Designing"
                      loading="lazy"
                    />
                  </div>
                  <p className="card-text">Interior Designing</p>
                </div>
              </Col>
              <Col className="col-auto">
                <div className="card mastery-card-web">
                  <div className="box-icon">
                    <AnimatedImageWithOpacity
                      src={IMAGES.healthFitnessIndustries}
                      width="28"
                      height="28"
                      alt="Health & Fitness"
                      loading="lazy"
                    />
                  </div>
                  <p className="card-text">Health & Fitness</p>
                </div>
              </Col>
              <Col className="col-auto">
                <div className="card mastery-card-web">
                  <div className="box-icon">
                    <AnimatedImageWithOpacity
                      src={IMAGES.transportationIndustries}
                      width="28"
                      height="28"
                      alt="Transportation"
                      loading="lazy"
                    />
                  </div>
                  <p className="card-text">Transportation</p>
                </div>
              </Col>
              <Col className="col-auto">
                <div className="card mastery-card-web">
                  <div className="box-icon">
                    <AnimatedImageWithOpacity
                      src={IMAGES.educationIndustries}
                      width="28"
                      height="28"
                      alt="Education"
                      loading="lazy"
                    />
                  </div>
                  <p className="card-text">Education</p>
                </div>
              </Col>
              <Col className="col-auto">
                <div className="card mastery-card-web">
                  <div className="box-icon">
                    <AnimatedImageWithOpacity
                      src={IMAGES.realEstateIndustries}
                      width="28"
                      height="28"
                      alt="Real Estate"
                      loading="lazy"
                    />
                  </div>
                  <p className="card-text">Real Estate</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default IndustriesMasteryService;

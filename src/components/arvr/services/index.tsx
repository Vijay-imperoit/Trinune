import { Col, Container, Row } from 'react-bootstrap';
import './style.css';
import { IMAGES } from '../../../utils/staticJSON';

const Services = () => {
  return ( 
    <section className="section pt-0 custom-blog-cursor">
      <Container>
        <Row className="justify-content-center text-center mb-5">
          <Col lg={10}>
            <h2 className="title-2">
              Services we offer under AR/VR app development.
            </h2>
            <p className="mb-0">
              We offer only a few AR/VR services, but we will certainly do it
              well. At Impero, we aim to unify experiences with the most
              innovative technology & bring out a mind-blowing interactive app
              adventure.
            </p>
          </Col>
        </Row>
        <Row className="gy-4">
          <Col
            md={6}
            lg={4}
          >
            <div className="report-card">
              {/* <img
                src={IMAGES.wifi}
                className="wifi-img"
                alt="wifi"
                loading='lazy'
              /> */}
              <img
                src={IMAGES.services2}
                className="overlay-img"
                width="382"
                height="526"
                alt="image"
                loading="lazy"
              />
              <div className="report-info position-absolute p-4">
                <h3 className="text-white mb-3">Sensor-Based AR/VR Apps</h3>
                <p className="text-white">
                  We develop AR/VR apps with sensor, face, and gesture
                  recognition for both desktop and mobile.
                </p>
              </div>
            </div>
          </Col>
          <Col
            md={6}
            lg={4}
          >
            <div className="report-card">
              {/* <img
                src={IMAGES.wifi}
                className="wifi-img"
                alt="wifi"
              /> */}
              <img
                src={IMAGES.services1}
                className="overlay-img"
                width="382"
                height="526"
                alt="image"
                loading="lazy"
              />
              <div className="report-info position-absolute p-4">
                <h3 className="text-white mb-3">AR/VR Consultation</h3>
                <p className="text-white">
                  Unsure how AR/VR fits your business? Consult with us to
                  explore your needs and develop a tailored AR app.
                </p>
              </div>
            </div>
          </Col>
          <Col
            md={6}
            lg={4}
          >
            <div className="report-card">
              {/* <img
                src={IMAGES.wifi}
                className="wifi-img"
                alt="wifi"
                loading='lazy'
              /> */}
              <img
                src={IMAGES.services3}
                className="overlay-img"
                width="382"
                height="526"
                alt="image"
                loading="lazy"
              />
              <div className="report-info position-absolute p-4">
                <h3 className="text-white mb-3">Custom AR/VR Solutions</h3>
                <p className="text-white">
                  Get bespoke AR/VR solutions designed for your industry to
                  enhance user experience with unique technology integration.
                </p>
              </div>
            </div>
          </Col>
          <Col
            md={6}
            lg={4}
          >
            <div className="report-card">
              {/* <img
                src={IMAGES.wifi}
                className="wifi-img"
                alt="WIFI"
                loading='lazy'
              /> */}
              <img
                src={IMAGES.services5}
                className="overlay-img"
                width="382"
                height="526"
                alt="image"
                loading="lazy"
              />
              <div className="report-info position-absolute p-4">
                <h3 className="text-white mb-3">Location-Based AR/VR</h3>
                <p className="text-white">
                  Drive user engagement with interactive, map-based AR/VR apps
                  tailored for specific locations.
                </p>
              </div>
            </div>
          </Col>
          <Col
            md={6}
            lg={4}
          >
            <div className="report-card">
              {/* <img
                src={IMAGES.wifi}
                className="wifi-img"
                alt="wifi"
                loading='lazy'
              /> */}
              <img
                src={IMAGES.services4}
                className="overlay-img"
                width="382"
                height="526"
                alt="image"
                loading="lazy"
              />
              <div className="report-info position-absolute p-4">
                <h3 className="text-white mb-3">Visualization Solutions</h3>
                <p className="text-white">
                  Enhance business outcomes with our creative visual
                  storytelling, presentations, training, and data
                  visualizations.
                </p>
              </div>
            </div>
          </Col>
          <Col
            md={6}
            lg={4}
          >
            <div className="report-card">
              {/* <img
                src={IMAGES.wifi}
                className="wifi-img"
                alt="wifi"
                loading='lazy'
              /> */}
              <img
                src={IMAGES.services6}
                className="overlay-img"
                width="382"
                height="526"
                alt="image"
                loading="lazy"
              />
              <div className="report-info position-absolute p-4">
                <h3 className="text-white mb-3">IoT + AR/VR Apps</h3>
                <p className="text-white">
                  Integrate AR/VR with IoT for seamless experiences across
                  multiple devices, connecting and enhancing user interactions.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;

import { Col, Container, Row } from 'react-bootstrap';
import './style.css';
import { IMAGES } from '../../../utils/staticJSON';
import AnimatedImageWithOpacity from '../../../global/AnimatedImageWithOpacity';

const VRAppDevelopment = () => {
  return (
    <section className="section custom-blog-cursor">
      <Container>
        <div className="title-box text-center">
          <Row className="justify-content-lg-center">
            <Col
              xs={12}
              lg={10}
            >
              <h2 className="title-2">
                What you get with Impero’s VR app development
              </h2>
              <p>
                At Impero, our AR and VR developers turn routine tasks into
                exciting journeys. We use cutting-edge technology to craft app
                and web solutions that ensure outstanding user satisfaction.
              </p>
            </Col>
          </Row>
        </div>
      </Container>

      <Container>
        <Row className="gy-5">
          <Col
            xs={12}
            className="mt-4"
          >
            <div className="portfolio-style4 portfolio-card pb-0">
              <Row className="align-items-center gy-4">
                <Col lg={6}>
                  <div className="info-card">
                    <h3 className="main-title mb-3">
                      Elevate User Experience with AR Apps
                    </h3>
                    <p className="main-pera mb-0">
                      Transform your app with interactive AR technology,
                      creating immersive, real-world experiences that captivate
                      users. Our expert team delivers customized AR solutions
                      tailored to your business needs, ensuring exceptional user
                      satisfaction.
                    </p>
                  </div>
                </Col>
                <Col
                  lg={6}
                  className="order-lg-first text-center align-self-end"
                >
                  <div className="mt-auto">
                    <AnimatedImageWithOpacity
                      className="img-fluid"
                      src={IMAGES.arApps}
                      width="441"
                      height="526"
                      alt="ar-apps"
                      loading="lazy"
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={12}>
            <div className="portfolio-style5 portfolio-card pb-0">
              <Row className="align-items-center gy-4">
                <Col lg={6}>
                  <div className="info-card">
                    <h3 className="main-title mb-3">
                      Immerse Users with Cutting-Edge VR Apps
                    </h3>
                    <p className="main-pera mb-0">
                      Bring your business to life with cutting-edge VR
                      technology. Our VR apps offer highly visual, immersive
                      experiences that captivate users and elevate your brand.
                      Crafted with advanced tools and expert talent, we deliver
                      tailored solutions for a standout impact.
                    </p>
                  </div>
                </Col>
                <Col
                  lg={6}
                  className="text-center align-self-end"
                >
                  <div className="mt-auto">
                    <AnimatedImageWithOpacity
                      className="img-fluid"
                      src={IMAGES.vrApps}
                      width="441"
                      height="526"
                      alt="vr-apps"
                      loading="lazy"
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default VRAppDevelopment;

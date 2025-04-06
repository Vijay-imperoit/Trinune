import { Col, Image, Row } from "react-bootstrap";
import { IMAGES } from "../../../../utils/staticJSON";
import { useEffect, useState } from "react";
import createGlobe from "cobe";
import { useLocation } from 'react-router-dom';

const Services = () => {
  const [activeTab, setActiveTab] = useState<number>();
  const location = useLocation();
  const [isDesktop, setIsDesktop] = useState<boolean>(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (location.pathname == "/about-us") {
      setActiveTab(1)
    } else if (location.pathname == "/achievements") {
      setActiveTab(2)
    } else if (location.pathname == "/careers") {
      setActiveTab(3)
    }else if(location.pathname == "/blogs"){
      setActiveTab(4)
    }
  }, [location.pathname]);

  useEffect(() => {
    let phi = 0;
    if (!isDesktop) return;
    let canvas: any = document.getElementById("cobe");

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: 800,
      height: 600,
      phi: 0,
      theta: 0.3,
      dark: 0,
      diffuse: 1.2,
      mapBrightness: 6,
      baseColor: [0.937, 0.961, 0.988],
      markerColor: [0.9, 0.1, 0.1],
      glowColor: [1, 1, 1], 
      mapSamples: 15000, 
      opacity: 1,
      offset: [0,-0.2],
      scale: 1.16,
      markers: [
        { location: [23.03, 72.58], size: 0.05 }, //India
        { location: [52.8032, -7.2005], size: 0.05 }, //Ireland
        { location: [41.8039, -87.9753], size: 0.05 }, //United States
        { location: [51.566, -0.084], size: 0.05 }, //United Kingdom
        { location: [46.3833, 6.2399], size: 0.05 }, //Switzerland
        { location: [23.6100, 58.5400], size: 0.05 }, //Oman
      ],
      onRender: (state: any) => {
        state.phi = phi;
        phi += 0.005;
      }
    });

    return () => globe.destroy();
  }, [isDesktop]);
 
  return (
    <Row className="gy-3 h-100">
      <Col
        lg={4}
        className="border-lg"
      >
        <div className="nav">
          <a
            href="/about-us"
            className={`nav-link custom-cursor ${
              activeTab == 1 ? 'active' : ''
            }`}
            onClick={() => setActiveTab(1)}
          >
            <Image
              className="img-fluid"
              src={IMAGES.about}
              width="18"
              height="18"
              alt="icon"
              loading="lazy"
            />
            <div>
              <p className="main-text">About Impero</p>
              <p className="sub-text">Explore more about Impero</p>
            </div>
            <Image
              className="img-fluid show-arrow"
              src={IMAGES.arrowRightIcon}
              width="18"
              height="18"
              alt="icon"
              loading="lazy"
            />
          </a>
          <a
            href="/achievements"
            className={`nav-link custom-cursor ${
              activeTab === 2 ? 'active' : ''
            }`}
            onClick={() => setActiveTab(2)}
          >
            <Image
              className="img-fluid"
              src={IMAGES.achievements}
              width="18"
              height="18"
              alt="icon"
              loading="lazy"
            />
            <div>
              <p className="main-text">Achievements</p>
              <p className="sub-text">See our Awards & Recognitions</p>
            </div>
            <Image
              className="img-fluid show-arrow"
              src={IMAGES.arrowRightIcon}
              width="18"
              height="18"
              alt="icon"
              loading="lazy"
            />
          </a>
          <a
            href="/careers"
            className={`nav-link custom-cursor ${
              activeTab === 3 ? 'active' : ''
            }`}
            onClick={() => setActiveTab(3)}
          >
            <Image
              className="img-fluid"
              src={IMAGES.careers}
              width="18"
              height="18"
              alt="icon"
              loading="lazy"
            />
            <div>
              <p className="main-text">Careers</p>
              <p className="sub-text">We’re always hiring!</p>
            </div>
            <Image
              className="img-fluid show-arrow"
              src={IMAGES.arrowRightIcon}
              width="18"
              height="18"
              alt="icon"
              loading="lazy"
            />
          </a>
          <a
            href="/blogs"
            className={`nav-link custom-cursor ${
              activeTab === 4 ? 'active' : ''
            }`}
            onClick={() => setActiveTab(4)}
          >
            <Image
              className="img-fluid"
              src={IMAGES.blogs}
              width="18"
              height="18"
              alt="icon"
              loading="lazy"
            />
            <div>
              <p className="main-text">Blogs</p>
              <p className="sub-text">News and updates</p>
            </div>
            <Image
              className="img-fluid show-arrow"
              src={IMAGES.arrowRightIcon}
              width="18"
              height="18"
              alt="icon"
              loading="lazy"
            />
          </a>
        </div>
      </Col>
      {/* <div
            className={`tab-pane fade show active`}
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
            tabIndex={0}
          >
            <p className="title">Reach out us.</p>
            <Row className="gy-3">
              <Col lg={6}>
                <Image
                  className="img-fluid br-12px"
                  src={IMAGES.aboutCompany}
                  width="256"
                  height="250"
                  alt="Company"
                  loading="lazy"
                />
              </Col>
              <Col lg={6}>
                <div className="info-box">
                  <p className="title">
                    We are available at 9 Top
                    <br /> location
                  </p>
                  <div className="location-info">
                    <Image
                      className="img-fluid"
                      src={IMAGES.Location}
                      width="24"
                      height="24"
                      alt="location"
                      loading="lazy"
                    />
                    <p className="fs-15 fw-500 mb-0">Ahmedabad, India</p>
                  </div>
                  <div className="location-info">
                    <Image
                      className="img-fluid"
                      src={IMAGES.Location}
                      width="24"
                      height="24"
                      alt="location"
                      loading="lazy"
                    />
                    <p className="fs-15 fw-500 mb-0">Kiltown , Ireland</p>
                  </div>
                  <div className="location-info">
                    <Image
                      className="img-fluid"
                      src={IMAGES.Location}
                      width="24"
                      height="24"
                      alt="location"
                      loading="lazy"
                    />
                    <p className="fs-15 fw-500 mb-0">London, United Kingdom</p>
                  </div>
                </div>
              </Col>
            </Row>
          </div> */}
      <Col
        lg={8}
        className="align-self-end align-self-lg-stretch"
      >
        <Row className="gy-3 h-100 px-lg-3">
          <Col
            lg={6}
            className="h-lg-100 align-self-lg-center"
          >
            <div className="card gradient-card h-lg-100 custom-blog-cursor-white">
              <div className="card-body text-white d-flex flex-column p-4">
                <h3 className="text-gradient">
                  Transform Your Ideas with Us
                </h3>
                <p className="sab-text">
                  Reach out and discover how we can elevate your business to the
                  next level.
                </p>
                <a
                  href="/contact-us"
                  className=" text-white mt-auto custom-cursor py-2"
                >
                  Contact Our Team
                  <Image
                    className="ms-2"
                    src={IMAGES.arrowRightIconWhite}
                    width="20"
                    height="15"
                    alt="right"
                  />
                </a>
              </div>
            </div>
          </Col>
          <Col
            lg={6}
            className="position-relative d-none d-lg-block"
          >
            <h3 className="fs-16 fw-500 custom-blog-cursor">
              We are available at 9 Top locations.
            </h3>
            <canvas
              id="cobe"
              // ref={canvasRef}
              style={{
                width: '100%',
                height: '100%',
                maxWidth: '400px',
                maxHeight: '400px',
                position: 'absolute',
                top: '55%',
                left: '45%',
                transform: 'translate(-50%, -50%)',
              }}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Services;

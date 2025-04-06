import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { IMAGES } from "../../../utils/staticJSON";
import { useNavigate } from "react-router-dom";
import { tns } from "tiny-slider/src/tiny-slider";
import "tiny-slider/dist/tiny-slider.css";
import { useEffect } from "react";
import AnimatedImageWithOpacity from "../../../global/AnimatedImageWithOpacity";

const BlogFooter = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();
  useEffect(() => {
    const slider5 = tns({
      container: ".company-slider",
      loop: true,
      items: 2,
      speed: 2500,
      nonce: "1",
      autoplay: true,
      autoplayHoverPause: false,
      mouseDrag: true,
      autoplayTimeout: 3000,
      swipeAngle: false,
      autoplayButtonOutput: false,
      controls: false,
      nav: false,
      gutter: 10,
      responsive: {
        640: {
          items: 3,
          gutter: 10,
        },
        768: {
          items: 4,
          gutter: 15,
        },
        1024: {
          items: 5,
          gutter: 20,
        },
      },
    });
    return () => {
      slider5.destroy();
    };
  }, []);
  return (
    <footer className="section footer-section footer-section2 bg-black custom-blog-cursor-white">
      <Container>
        <Row className="justify-content-lg-between align-items-center gy-4">
          <Col md={6} className=''>
            <div className="footer-box">
              <div className="text-center text-sm-start">

              <AnimatedImageWithOpacity
                className="img-fluid img-item"
                src={IMAGES.footerLogo}
                width="182"
                height="127"
                alt="logo"
                loading="lazy"
              />
              </div>
              <p className="main-text">
                Innovation awaits.
                <br />
                Join us in making it real.
              </p>
              <p className="sub-text">
                Let’s bring your vision to life. Reach out to discuss your
                project scope and budget
              </p>
            </div>
          </Col>
          <Col
            md={6}
            lg="auto"
            onClick={() => navigate("/contact-us")}
            // style={{cursor:'pointer'}}
            className="custom-cursor"
          >
            <div className="text-center">
              <AnimatedImageWithOpacity
                className="img-fluid"
                src={IMAGES.getStarted}
                alt="get-started"
                width="224"
                height="170"
                loading="lazy"
              />
            </div>
          </Col>
        </Row>

        <div className="dropdown-divider"></div>
      </Container>
      <div
        className="company-slider"
        data-config='{
            "items": 2,
            "speed": 2000,
            "autoplayTimeout": 1000,
            "responsive": {
                "640": { "items": 3, "gutter": 10 },
                "768": { "items": 4, "gutter": 15 },
                "1024": { "items": 5, "gutter": 20 }
            }
        }'
      >
        <div className="slider-item">
          <div className="card-box">
            <img
              className="img-fluid"
              src={IMAGES.india}
              width="56"
              height="56"
              alt="HQ India"
              loading="lazy"
            />
            <h3 className="main-text">India</h3>
            <p className="sub-text">SG Highway, Ahmedabad, Gujarat 380051</p>
          </div>
        </div>
        <div className="slider-item">
          <div className="card-box">
            <img
              className="img-fluid"
              src={IMAGES.ireland}
              width="56"
              height="56"
              alt="Ireland"
              loading="lazy"
            />
            <h3 className="main-text">Ireland</h3>
            <p className="sub-text">Kiltown, Castlecomer,County Kilkenny</p>
          </div>
        </div>
        <div className="slider-item">
          <div className="card-box">
            <img
              className="img-fluid"
              src={IMAGES.unitedStates}
              width="56"
              height="56"
              alt="us"
              loading="lazy"
            />
            <h3 className="main-text">United States</h3>
            <p className="sub-text">660 Citadel Dr, Westmont, IL 60559, USA</p>
          </div>
        </div>
        <div className="slider-item">
          <div className="card-box">
            <img
              className="img-fluid"
              src={IMAGES.london}
              width="56"
              height="56"
              alt="London"
              loading="lazy"
            />
            <h3 className="main-text">United Kingdom</h3>
            <p className="sub-text">Lordship Road, London N16 0QJ</p>
          </div>
        </div>
        <div className="slider-item">
          <div className="card-box">
            <img
              className="img-fluid"
              src={IMAGES.switzerland}
              width="56"
              height="56"
              alt="Switzerland"
              loading="lazy"
            />
            <h3 className="main-text">Switzerland</h3>
            <p className="sub-text">
              Chemin du joran 8B, 1260 Nyon, Switzerland
            </p>
          </div>
        </div>
        <div className="slider-item">
          <div className="card-box">
            <img
              className="img-fluid"
              src={IMAGES.oman}
              width="56"
              height="56"
              alt="Oman"
              loading="lazy"
            />
            <h3 className="main-text">Oman</h3>
            <p className="sub-text">Muscqat Oman</p>
          </div>
        </div>
        {/* <div className="slider-item">
          <div className="card-box">
            <img
              className="img-fluid"
              src={IMAGES.india}
              width="56"
              height="56"
              alt="Belgium"
              loading="lazy"
            />
            <h3 className="main-text">Belgium</h3>
            <p className="sub-text">
              Mobile SPRL Av Pasteur 23 1300 Wavre Belgium
            </p>
          </div>
        </div> */}
      </div>
      <Container className="footer-bottom">
        <div className="dropdown-divider"></div>
        <Row className="justify-content-sm-between flex-center gy-3">
          <Col xs="auto">
            <p className="copyright-text fs-16 fw-400">
              {currentYear} © All rights reserved by Impero IT Services
            </p>
          </Col>
          {/* <Col xs="auto">
            <a href="#" className="nav-links">
              Privacy policy
            </a>
            <span className="text-dark-gray">|</span>
            <a href="#" className="nav-links">
              Terms & Conditions
            </a>
          </Col> */}
          <Col xs="auto">
            <div className="d-flex gap-3 align-items-center social-link custom-cursor">
              <a
                href="https://www.facebook.com/ImperoIT/"
                target="_blank"
                className="social-box facebook custom-cursor"
              >
                <AnimatedImageWithOpacity
                  className="img-fluid"
                  src={IMAGES.facebookRounded}
                  width="9"
                  height="17"
                  alt="facebook"
                  loading="lazy"
                />
              </a>
              <a
                href="https://www.instagram.com/impero_it_services?igsh=bm82ZDVnMDRqcnJ6"
                target="_blank"
                className="social-box instagram custom-cursor"
              >
                <AnimatedImageWithOpacity
                  className="img-fluid"
                  src={IMAGES.instagramRounded}
                  width="15"
                  height="15"
                  alt="instagram"
                  loading="lazy"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/imperoitservices"
                target="_blank"
                className="social-box linkedIn custom-cursor"
              >
                <AnimatedImageWithOpacity
                  className="img-fluid"
                  src={IMAGES.linkedinRounded}
                  width="13"
                  height="13"
                  alt="linkedIn"
                  loading="lazy"
                />
              </a>
              <a
                href="https://x.com/Impero49474070"
                target="_blank"
                className="social-box twitter custom-cursor"
              >
                <AnimatedImageWithOpacity
                  className="img-fluid"
                  src={IMAGES.twitterRounded}
                  width="15"
                  height="13"
                  alt="twitter"
                  loading="lazy"
                />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default BlogFooter;

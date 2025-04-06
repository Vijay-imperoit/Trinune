import { Col, Container, Row } from 'react-bootstrap';
import { tns } from 'tiny-slider/src/tiny-slider';
import 'tiny-slider/dist/tiny-slider.css';
import { useEffect } from 'react';
import './style.css';
import { IMAGES } from '../../../utils/staticJSON';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear()
  useEffect(() => {
    const slider5 = tns({
      container: '.company-slider',
      loop: true,
      items: 2,
      speed: 3000,
      nonce: '1',
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
    <footer className="section footer-section custom-blog-cursor-white">
      <Container>
        <Row className="justify-content-lg-between">
          <Col
            md={6}
            lg={3}
          >
            <div className="text-center">
              <img
                className="img-fluid mb-3"
                src={IMAGES.footerLogo}
                width="182"
                height="127"
                alt="logo"
                loading="lazy"
              />
              <p className="fs-18 fw-normal text-dark-gray">
                CIN : U72900GJ2018PTC103437
              </p>
            </div>
          </Col>
          <Col
            sm={6}
            md={6}
            lg={3}
            className="offset-xxl-2 offset-xl-1"
          >
            <ul className="list-group">
              <li className="list-group-item">
                <p>Services</p>
              </li>
              <li className="list-group-item">
                <Link to="/mobile-app-development">Mobile App Development</Link>
              </li>
              <li className="list-group-item">
                <Link to="/web-development">Web App Development</Link>
              </li>
              <li className="list-group-item">
                <Link to="/uiux">UI/UX Designs</Link>
              </li>
              <li className="list-group-item">
                <Link to="/bespoke-software-development">
                  Bespoke Development
                </Link>
              </li>
              <li className="list-group-item">
                <Link to="/arvr">AR/VR Development</Link>
              </li>
            </ul>
          </Col>
          {/* <Col
            sm={6}
            md={6}
            lg={2}
          >
            <ul className="list-group">
              <li className="list-group-item">
                <p>Case Studies</p>
              </li>
              <li className="list-group-item">
                <a href="#">KeepAppy</a>
              </li>
              <li className="list-group-item">
                <a href="#">Scoreboard</a>
              </li>
              <li className="list-group-item">
                <a href="#">U-Trade</a>
              </li>
              <li className="list-group-item">
                <a href="#">NameDow</a>
              </li>
              <li className="list-group-item">
                <a href="#">TeachKloud</a>
              </li>
            </ul>
          </Col> */}
          <Col
            sm={6}
            md={6}
            lg={2}
          >
            <ul className="list-group">
              <li className="list-group-item">
                <p>Other Links</p>
              </li>
              <li className="list-group-item">
                <Link to="/about-us">About Us</Link>
              </li>
              <li className="list-group-item">
                <Link to="/careers">Careers</Link>
              </li>
              <li className="list-group-item">
                <Link to="/achievements">Achievements</Link>
              </li>
              <li className="list-group-item">
                <a href="#">Case Studies</a>
              </li>
              <li className="list-group-item">
                <Link to="/contact-us">Contact Us</Link>
              </li>
            </ul>
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
            <h3 className="main-text">HQ India</h3>
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
              src={IMAGES.london}
              width="56"
              height="56"
              alt="London"
              loading="lazy"
            />
            <h3 className="main-text">London</h3>
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
        <div className="slider-item">
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
        </div>
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
            <h3 className="main-text">HQ India</h3>
            <p className="sub-text">SG Highway, Ahmedabad, Gujarat 380051</p>
          </div>
        </div>
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
            <h3 className="main-text">HQ India</h3>
            <p className="sub-text">SG Highway, Ahmedabad, Gujarat 380051</p>
          </div>
        </div>
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
            <h3 className="main-text">HQ India</h3>
            <p className="sub-text">SG Highway, Ahmedabad, Gujarat 380051</p>
          </div>
        </div>
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
            <a
              href="#"
              className="nav-links"
            >
              Privacy policy
            </a>
            <span className="text-dark-gray">|</span>
            <a
              href="#"
              className="nav-links"
            >
              Terms & Conditions
            </a>
          </Col> */}
          <Col xs="auto">
            <div className="d-flex gap-3 align-items-center social-link">
              <a
                href="https://www.facebook.com/ImperoIT/"
                target="_blank"
                className="social-box facebook"
              >
                <img
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
                className="social-box instagram"
              >
                <img
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
                className="social-box linkedIn"
              >
                <img
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
                className="social-box twitter"
              >
                <img
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

export default Footer;

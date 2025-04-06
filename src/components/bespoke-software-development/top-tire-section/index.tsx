import { Col, Container, Row } from 'react-bootstrap';
import './style.css';
import { IMAGES } from '../../../utils/staticJSON';
import { tns } from 'tiny-slider/src/tiny-slider';
import 'tiny-slider/dist/tiny-slider.css';
import { useEffect } from 'react';
import AnimatedImageWithOpacity from '../../../global/AnimatedImageWithOpacity';

const TopTireSection = () => {
  useEffect(() => {
    const slider1 = tns({
      container: ".bespoke-slider",
      loop: true,
      rewind: true,
      items: 1,
      speed: 3000,
      autoplay: true,
      autoplayHoverPause: true,
      mouseDrag: true,
      autoplayTimeout: 3000,
      swipeAngle: false,
      autoplayButtonOutput: false,
      controls: false,
      nav: false,
      responsive: {
        540: {
          items: 2,
          gutter: 20,
        },
        768: {
          items: 2.6,
          gutter: 20,
        },
        1024: {
          items: 3.1,
          gutter: 20,
          // edgePadding: 73,
        },
      },
    });
    return () => {
      slider1.destroy();
    };
  }, []);

  return (
    <section className="section Top-Tier-section pb-0 custom-blog-cursor-white">
      <Container>
        <Row className="gy-4 mb-30">
          <Col lg={6}>
            <h2 className="title-2 mb-lg-4">
              Top-Tier Bespoke Software Development Services
            </h2>
          </Col>
          <Col lg={5} className="offset-lg-1">
            <p className="sub-title mb-lg-4">
              Our bespoke solutions span a range of successes, from employee
              wellness apps for MNCs to fundraising platforms generating $400k
              daily.
            </p>
          </Col>
        </Row>
        <Row className="gy-4">
          <Col lg={7}>
            <AnimatedImageWithOpacity
              className="img-fluid br-12px"
              src={IMAGES.topTierMain}
              width="696"
              height="398"
              alt="image"
              loading="lazy"
            />
          </Col>
          <Col lg={5}>
            <h3>Our Bespoke Web Development</h3>
            <p>
              Crafting custom web solutions that drive business growth and
              enhance user engagement. From intuitive websites to complex
              platforms, our bespoke web development services are designed to
              deliver seamless, high-performing experiences tailored to your
              unique needs.
            </p>
          </Col>
        </Row>
      </Container>
      <div className="bespoke-slider py-5">
          <div className="slider-item">
            <div className="card">
              <div className="card-body">
                <img
                  className="img-fluid"
                  src={IMAGES.topTierSub1}
                  width="48"
                  height="48"
                  alt="icon"
                  loading="lazy"
                />
                <h3 className="title">Bespoke Software</h3>
                <p className="sub-text">
                  Tailored software solutions to meet the unique needs of your
                  business, ensuring flexibility, scalability, and performance.
                </p>
              </div>
            </div>
          </div>
          <div className="slider-item">
            <div className="card">
              <div className="card-body">
                <img
                  className="img-fluid"
                  src={IMAGES.topTierSub2}
                  width="48"
                  height="48"
                  alt="icon"
                  loading="lazy"
                />
                <h3 className="title">Custom Software Development</h3>
                <p className="sub-text">
                  End-to-end custom software development that empowers your
                  business with solutions crafted to fit your goals and
                  workflows.
                </p>
              </div>
            </div>
          </div>
          <div className="slider-item">
            <div className="card">
              <div className="card-body">
                <img
                  className="img-fluid"
                  src={IMAGES.topTierSub3}
                  width="48"
                  height="48"
                  alt="icon"
                  loading="lazy"
                />
                <h3 className="title">Cloud Software Service</h3>
                <p className="sub-text">
                  Leverage the cloud with secure, cost-effective software
                  solutions that ensure accessibility and collaboration.
                </p>
              </div>
            </div>
          </div>
          <div className="slider-item">
            <div className="card">
              <div className="card-body">
                <img
                  className="img-fluid"
                  src={IMAGES.topTierSub4}
                  width="48"
                  height="48"
                  alt="icon"
                  loading="lazy"
                />
                <h3 className="title">UX/UI Design</h3>
                <p className="sub-text">
                  User-centered design that enhances experience and boosts
                  engagement, ensuring your software is functional and
                  delightful.
                </p>
              </div>
            </div>
          </div>
          <div className="slider-item">
            <div className="card">
              <div className="card-body">
                <img
                  className="img-fluid"
                  src={IMAGES.topTierSub5}
                  width="48"
                  height="48"
                  alt="icon"
                  loading="lazy"
                />
                <h3 className="title">Mobile App Development</h3>
                <p className="sub-text">
                  Building high-performance mobile apps that provide seamless
                  experiences, ensuring your business stays connected on the go.
                </p>
              </div>
            </div>
          </div>
          <div className="slider-item">
            <div className="card">
              <div className="card-body">
                <img
                  className="img-fluid"
                  src={IMAGES.topTierSub6}
                  width="48"
                  height="48"
                  alt="icon"
                  loading="lazy"
                />
                <h3 className="title">Enterprise Development</h3>
                <p className="sub-text">
                  Comprehensive enterprise software solutions that streamline
                  processes, boost productivity, and help your organization
                  scale.
                </p>
              </div>
            </div>
          </div>
        </div>
      
    </section>
  );
};

export default TopTireSection;

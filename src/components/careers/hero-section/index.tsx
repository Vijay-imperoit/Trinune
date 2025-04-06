import { Col, Container, Row } from 'react-bootstrap';
import './style.css';
import { IMAGES } from '../../../utils/staticJSON';
import { useEffect } from 'react';
import { tns } from 'tiny-slider/src/tiny-slider';
import 'tiny-slider/dist/tiny-slider.css';
import AnimatedImageWithOpacity from '../../../global/AnimatedImageWithOpacity';

const HeroSection = () => {
  
  useEffect(() => {
    const slider1 = tns({
      container: '.slider-startups',
      items: 1,
      speed: 3000,
      autoplay: true,
      loop: true,
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
          items: 5,
          gutter: 15,
        },
        1024: {
          items: 4,
          gutter: 15,
        },
      },
    });

    return () => {
      slider1.destroy();
    };
  }, []);
  return (
    <>
      <div className="careers-hero-careers custom-blog-cursor">
        <Container>
          <Row className="h-100 gy-4">
            <Col>
              <div className="hero-contain">
                <div className="d-none d-md-block">
                  <AnimatedImageWithOpacity
                    className="img-fluid icon-set heart-icon"
                    src={IMAGES.heart}
                    width="60"
                    height="60"
                    alt="className icon"
                    loading="lazy"
                  />
                  <AnimatedImageWithOpacity
                    className="img-fluid icon-set bag-icon"
                    src={IMAGES.bag}
                    width="70"
                    height="70"
                    alt="bag icon"
                    loading="lazy"
                  />
                </div>
                <span className="text-with-pill dark shimmer">Careers</span>
                <h1 className="fs-50 fw-bolder mb-3 text-dark">
                  <span className="text-gradient-style2">
                    Step In. Stand Out{' '}
                  </span>
                  <br />
                  Join Us. Make an Impact
                </h1>
                <p className="fs-20 fw-normal mb-30 text-dark">
                  Discover opportunities to excel and lead.Join Impero !
                </p>
                <div className=" d-none d-md-block">
                  <AnimatedImageWithOpacity
                    className="img-fluid icon-set search-icon"
                    src={IMAGES.search}
                    width="108"
                    height="108"
                    alt="bag icon"
                    loading="lazy"
                  />
                  <AnimatedImageWithOpacity
                    className="img-fluid icon-set star-icon"
                    src={IMAGES.diamond}
                    width="60"
                    height="58.14"
                    alt="start outline icon"
                    loading="lazy"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section pt-0 slider-shape overflow-hidden">
        <div className="top-oval"></div>
        <div className="bottom-oval"></div>
        <div className="slider-startups">
          <div className="slider-item">
            <img
              className="img-fluid"
              src={IMAGES.tourImage1}
              width="250"
              height="250"
              alt="tour1"
            />
          </div>
          <div className="slider-item">
            <img
              className="img-fluid"
              src={IMAGES.tourImage2}
              width="250"
              height="250"
              alt="tour2"
              loading="lazy"
            />
          </div>
          <div className="slider-item">
            <img
              className="img-fluid"
              src={IMAGES.tourImage3}
              width="250"
              height="250"
              alt="tour3"
              loading="lazy"
            />
          </div>
          <div className="slider-item">
            <img
              className="img-fluid"
              src={IMAGES.tourImage4}
              width="250"
              height="250"
              alt="tour4"
              loading="lazy"
            />
          </div>
          <div className="slider-item">
            <img
              className="img-fluid"
              src={IMAGES.tourImage5}
              width="250"
              height="250"
              alt="tour5"
              loading="lazy"
            />
          </div>
          <div className="slider-item">
            <img
              className="img-fluid"
              src={IMAGES.tourImage1}
              width="250"
              height="250"
              alt="tour1"
              loading="lazy"
            />
          </div>
          <div className="slider-item">
            <img
              className="img-fluid"
              src={IMAGES.tourImage2}
              width="250"
              height="250"
              alt="tour2"
              loading="lazy"
            />
          </div>
          <div className="slider-item">
            <img
              className="img-fluid"
              src={IMAGES.tourImage3}
              width="250"
              height="250"
              alt="tour3"
              loading="lazy"
            />
          </div>
          <div className="slider-item">
            <img
              className="img-fluid"
              src={IMAGES.tourImage4}
              width="250"
              height="250"
              alt="tour4"
              loading="lazy"
            />
          </div>
          <div className="slider-item">
            <img
              className="img-fluid"
              src={IMAGES.tourImage5}
              width="250"
              height="250"
              alt="tour5"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;

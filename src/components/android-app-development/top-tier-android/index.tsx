import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { tns } from "tiny-slider/src/tiny-slider";
import "tiny-slider/dist/tiny-slider.css";
import { useEffect } from "react";
import { IMAGES } from "../../../utils/staticJSON";
import AnimatedImageWithOpacity from '../../../global/AnimatedImageWithOpacity';

const TopTierAndroid = () => {
  useEffect(() => {
    const slider1 = tns({
      container: ".android-slider",
      loop: true,
      items: 1,
      speed: 3000,
      nonce: "1",
      autoplay: true,
      autoplayHoverPause: true,
      mouseDrag: true,
      autoplayTimeout: 3000,
      autoplayDirection: "forward",
      swipeAngle: false,
      autoplayButtonOutput: false,
      controls: false,
      nav: false,
      rewind: false,
      gutter: 10,
      responsive: {
        540: {
          items: 1,
          gutter: 10,
        },
        768: {
          items: 2,
          gutter: 10,
        },
        1024: {
          items: 3.8,
          gutter: 20,
        },
      },
    });
    return () => {
      slider1.destroy();
    };
  }, []);
  return (
    <section className='section Top-Tier-section custom-blog-cursor-white'>
      <Container>
        <Row className='gy-4 mb-30'>
          <Col xl={4} lg={5}>
            <h2 className='title-2 mb-lg-4'>
              Top-Tier Android App Development Services
            </h2>
          </Col>
          <Col xl={5} lg={5} className='offset-lg-2 offset-xl-3'>
            <p className='sub-title mb-lg-4'>
              Leverage our Android app development expertise to create powerful,
              user-friendly solutions. Our skilled team delivers tailored apps
              that drive success.
            </p>
          </Col>
        </Row>
        <Row className='gy-4'>
          <Col lg={7}>
            <AnimatedImageWithOpacity
              className='img-fluid'
              src={IMAGES.androidHero3}
              width='696'
              height='398'
              alt='image'
              // loading='lazy'
            />
          </Col>
          <Col lg={5}>
            <h3>Our Android App Development</h3>
            <p>
              With a deep understanding of Android development, we create apps
              that are both innovative and user-centric. Our team crafts
              seamless experiences, focusing on performance, scalability, and
              security to deliver high-quality solutions. We partner with you to
              turn your vision into a reality.
            </p>
          </Col>
        </Row>
      </Container>
      <div className='android-slider-section py-5'>
        {/* <div className="text-end if-black-bg py-5" id="custom-control">
            <button className="btn-flush px-2" aria-label="flush">
              <svg
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 8L2 8M2 8L8 14M2 8L8 2"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button className="btn-flush px-2" aria-label="flush">
              <svg
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 8H18M18 8L12 2M18 8L12 14"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div> */}
        <div
          className='android-slider'
        >
          <div className='slider-item'>
            <div className='card'>
              <div className='card-body d-flex align-items-center'>
                <h3 className='title'>Android App Development</h3>
              </div>
            </div>
          </div>
          <div className='slider-item'>
            <div className='card'>
              <div className='card-body d-flex align-items-center'>
                <h3 className='title'>Android TV Development</h3>
              </div>
            </div>
          </div>
          <div className='slider-item'>
            <div className='card'>
              <div className='card-body d-flex align-items-center'>
                <h3 className='title'>Android Wearables Development</h3>
              </div>
            </div>
          </div>
          <div className='slider-item'>
            <div className='card'>
              <div className='card-body d-flex align-items-center'>
                <h3 className='title'>Custom Android Development</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopTierAndroid;

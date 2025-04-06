import React from 'react';
import { Col, Container, Row, Carousel } from 'react-bootstrap';
import { IMAGES } from '../../../utils/staticJSON';
import './style.css';
const AnimatedImageWithOpacity = React.lazy(
  () => import('../../../global/AnimatedImageWithOpacity')
);

const FirstPage = () => {
  // Array of background images for the carousel
  const carouselImages = [IMAGES.HeroImage, IMAGES.Carousal2, IMAGES.Carousal3];

  return (
    <div className="hero-section custom-blog-cursor-white">
      <Carousel
        interval={5000} // Change image every 5 seconds
        controls={false} // Hide next/prev arrows (optional)
        indicators={false} // Show dots for navigation
        pause={false} // Continue cycling even on hover
        className="w-100"
      >
        {carouselImages.map((image, index) => (
          <Carousel.Item key={index}>
            <div
              className="carousel-image"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
                position: 'relative',
              }}
            >
              <Container>
                <Row className="h-100">
                  <Col
                    lg={8}
                    xl={7}
                    className="mt-md-20 mt-10"
                  >
                    <div className="hero-container">
                      <div className="text-with-pill mt-5">
                        IT Staffing Simplified
                      </div>
                      <div className="content">
                        <div className="main-title">
                          Transforming Careers Since 2005
                        </div>
                        <div className="sub-title ps-3 text-wrap">
                          At Triune, we have been staffing the right way for
                          nearly two decades. Whether you're seeking your next
                          big career opportunity or looking to take your current
                          role to new heights, we are committed to helping you
                          find the perfect job— or a better one if you're
                          already employed.
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default FirstPage;

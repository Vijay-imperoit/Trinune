import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { IMAGES } from "../../../utils/staticJSON";
import { tns } from "tiny-slider/src/tiny-slider";
import "tiny-slider/dist/tiny-slider.css";
import { useEffect } from "react";

const UIUXProduct = () => {
  useEffect(() => {
    const slider1 = tns({
      container: ".uiux-product",
      loop: true,
      items: 1,
      speed: 2500,
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
          items: 1,
          gutter: 20,
        },
        768: {
          items: 2.6,
          gutter: 20,
        },
        1024: {
          items: 3.1,
          gutter: 20,
          edgePadding: 73,
        },
      },
    });

    return () => {
      slider1.destroy();
    };
  }, []);
  return (
    <section className="section lasting-solutions-uiux2 custom-blog-cursor-white">
      <Container>
        <Row className="gy-4">
          <Col md={12}>
            <div className="title-box">
              <h2 className="title-2 text-white mb-0">
                Why is it necessary to have great UI/UX in your product?
              </h2>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="uiux-product">
        <div className="uiux-card">
          <div className="card">
            <div className="card-body p-4">
              <img
                src={IMAGES.userEngagement}
                className="mb-5"
                alt="engagement"
              />
              <h3 className="title-28 fw-500 text-white mb-4">
                User Engagement
              </h3>
              <p className="text-white mb-0">
                Great UI/UX design captivates users, encouraging frequent
                interactions and deeper engagement with your product.
              </p>
            </div>
          </div>
        </div>
        <div className="uiux-card">
          <div className="card">
            <div className="card-body p-4">
              <img
                src={IMAGES.userSatisfaction}
                className="mb-5"
                alt="satisfaction"
              />
              <h3 className="title-28 fw-500 text-white mb-3">
                User Satisfaction
              </h3>
              <p className="text-white mb-0">
                Intuitive design leads to smoother interactions and loyalty by
                making the product easy and enjoyable to use.
              </p>
            </div>
          </div>
        </div>
        <div className="uiux-card">
          <div className="card">
            <div className="card-body p-4">
              <img
                src={IMAGES.reputation}
                className="mb-5"
                alt="reputation"
              />
              <h3 className="title-28 fw-500 text-white mb-3">
                Increased Reputation
              </h3>
              <p className="text-white mb-0">
                A well-designed product builds trust, boosting your brand’s
                reputation and setting it apart in a competitive market.
              </p>
            </div>
          </div>
        </div>
        <div className="uiux-card">
          <div className="card">
            <div className="card-body p-4">
              <img
                src={IMAGES.uiuxDesign}
                className="mb-5"
                alt="design"
              />
              <h3 className="title-28 fw-500 text-white mb-3">UX/UI Design</h3>
              <p className="text-white mb-0">
                Effective UX/UI design ensures your product is visually
                appealing and user-friendly, enhancing functionality and ease of
                use.
              </p>
            </div>
          </div>
        </div>
        <div className="uiux-card">
          <div className="card">
            <div className="card-body p-4">
              <img
                src={IMAGES.mobileDevelopment}
                className="mb-5"
                alt="development"
              />
              <h3 className="title-28 fw-500 text-white mb-3">
                Mobile App Development
              </h3>
              <p className="text-white mb-0">
                UI/UX is crucial in mobile app development, ensuring seamless
                navigation and positive experiences across devices.
              </p>
            </div>
          </div>
        </div>
        <div className="uiux-card">
          <div className="card">
            <div className="card-body p-4">
              <img
                src={IMAGES.enterpriseDevelopment}
                className="mb-5"
                alt="enterprise"
              />
              <h3 className="title-28 fw-500 text-white mb-3">
                Enterprise Development
              </h3>
              <p className="text-white mb-0">
                Great UI/UX drives efficiency, streamlines workflows, and
                enhances productivity for better business outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UIUXProduct;

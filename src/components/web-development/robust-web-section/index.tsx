import { Col, Container, Row } from 'react-bootstrap';
import './style.css';
import { useEffect } from 'react';
import { tns } from 'tiny-slider/src/tiny-slider';
import 'tiny-slider/dist/tiny-slider.css';

const RobustWebSection = () => {
  useEffect(() => {
    const slider1 = tns({
      container: '.mobile-slider2',
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
      gutter: 10,
      responsive: {
        540: {
          items: 2,
          gutter: 10,
        },
        768: {
          items: 2,
          gutter: 10,
        },
        1024: {
          items: 3,
          gutter: 20,
        },
      },
    });

    return () => {
      slider1.destroy();
    };
  }, []);
  return (
    <div className="section bg-light-blue process-section-web custom-blog-cursor">
      <Container className="container">
        <Row className="justify-content-center pb-5 mb-3">
          <Col
            lg={7}
            className="text-center"
          >
            <h2 className="title-2">Proven Web Development Process</h2>
            <p>
              Trust our expert team and structured process to deliver
              exceptional web experiences and build outstanding web applications
              for your business.
            </p>
          </Col>
        </Row>
        {/* <div>
          <div className="process-box">
            <h3 className="main-title">
              <span className="box-number">01.</span>
              Planning & Discussing
            </h3>
            <p className="process-text">
              We start by getting to know your business and understanding your
              web app idea. We then brainstorm your requirements and strategize
              the next steps for a successful project.
            </p>
          </div>
          <div className="process-box">
            <h3 className="main-title">
              <span className="box-number">02.</span>
              Designing the Web App
            </h3>
            <p className="process-text">
              Our team brings the designs to life through coding, ensuring full
              functionality and responsiveness. We optimize the app for search
              engines and make it fully operational.
            </p>
          </div>
          <div className="process-box">
            <h3 className="main-title">
              <span className="box-number">03.</span>
              Web Development
            </h3>
            <p className="process-text">
              Our team brings the designs to life through coding, ensuring full
              functionality and responsiveness. We optimize the app for search
              engines and make it fully operational.
            </p>
          </div>
          <div className="process-box">
            <h3 className="main-title">
              <span className="box-number">04.</span>
              Testing
            </h3>
            <p className="process-text">
              We run comprehensive tests, including spell checks and thorough
              functionality assessments. Any bugs or issues are fixed, and final
              data synchronization is completed.
            </p>
          </div>
          <div className="process-box">
            <h3 className="main-title">
              <span className="box-number">05.</span>
              Deployment
            </h3>
            <p className="process-text">
              The web app is uploaded to secure servers, launched live, and
              subjected to a final test. We continuously monitor its performance
              to ensure smooth operation.
            </p>
          </div>
          <div className="process-box">
            <h3 className="main-title">
              <span className="box-number">06.</span>
              Support & Maintenance
            </h3>
            <p className="process-text">
              We provide three months of support and maintenance, ensuring the
              web app remains issue-free, up-to-date, and integrates feedback
              and new updates as needed.
            </p>
          </div>
        </div> */}
      </Container>
      <div className="mobile-slider2-section">
        <div className="mobile-slider2">
          <div className="slider-item">
            <div className="card">
              <div className="card-body">
                <div className="img-box">01</div>
                <div className="content-box-slider">
                  <h3 className="title">Planning & Discussing</h3>
                  <p className="sub-text">
                    We start by getting to know your business and understanding
                    your web app idea. We then brainstorm your requirements and
                    strategize the next steps for a successful project.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="slider-item">
            <div className="card">
              <div className="card-body">
                <div className="img-box">02</div>
                <div className="content-box-slider">
                  <h3 className="title">Designing the Web App</h3>
                  <p className="sub-text">
                    Our team brings the designs to life through coding, ensuring
                    full functionality and responsiveness. We optimize the app
                    for search engines and make it fully operational.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="slider-item">
            <div className="card">
              <div className="card-body">
                <div className="img-box">03</div>
                <div className="content-box-slider">
                  <h3 className="title">Web Development</h3>
                  <p className="sub-text">
                    Our team brings the designs to life through coding, ensuring
                    full functionality and responsiveness. We optimize the app
                    for search engines and make it fully operational.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="slider-item">
            <div className="card">
              <div className="card-body">
                <div className="img-box">04</div>
                <div className="content-box-slider">
                  <h3 className="title">Testing</h3>
                  <p className="sub-text">
                    We run comprehensive tests, including spell checks and
                    thorough functionality assessments. Any bugs or issues are
                    fixed, and final data synchronization is completed.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="slider-item">
            <div className="card">
              <div className="card-body">
                <div className="img-box">05</div>
                <div className="content-box-slider">
                  <h3 className="title">Deployment</h3>
                  <p className="sub-text">
                    The web app is uploaded to secure servers, launched live,
                    and subjected to a final test. We continuously monitor its
                    performance to ensure smooth operation.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="slider-item">
            <div className="card">
              <div className="card-body">
                <div className="img-box">06</div>
                <div className="content-box-slider">
                  <h3 className="title">Support & Maintenance</h3>
                  <p className="sub-text">
                    We provide three months of support and maintenance, ensuring
                    the web app remains issue-free, up-to-date, and integrates
                    feedback and new updates as needed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RobustWebSection;

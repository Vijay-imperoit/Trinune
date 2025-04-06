import { Col, Container, Row } from 'react-bootstrap';
import './style.css';
import { IMAGES } from '../../../utils/staticJSON';
import { useNavigate } from 'react-router-dom';
import AnimatedImageWithOpacity from '../../../global/AnimatedImageWithOpacity';

const FlutterAppDevelopmentProcess = () => {
  const navigate = useNavigate();
  return (
    <div className="section lasting-solutions-flutter2 custom-blog-cursor-white">
      <Container>
        <Row className="gy-4 text-center">
          <Col md={12}>
            <div className="title-box">
              <h2 className="title-2 text-white mb-0">
                Flutter app development process
              </h2>
            </div>
          </Col>
        </Row>
        <Row className="g-4 text-center text-md-start">
          <Col
            lg={4}
            md={6}
            className="flutter-card-flutter2 d-flex"
          >
            <div className="card">
              <div className="card-body p-4">
                <AnimatedImageWithOpacity
                  src={IMAGES.ideaFlutter}
                  className="mb-2"
                  alt="idea"
                  loading="lazy"
                />
                <h3 className="title text-white mb-3">Idea Analysis</h3>
                <p className="text-white mb-0">
                  We analyze your idea, align it with requirements, and plan a
                  path to the goal.
                </p>
              </div>
            </div>
          </Col>
          <Col
            lg={4}
            md={6}
            className="flutter-card-flutter2 d-flex"
          >
            <div className="card">
              <div className="card-body p-4">
                <AnimatedImageWithOpacity
                  src={IMAGES.paintBoardFlutter}
                  className="mb-2"
                  alt="paint"
                  loading="lazy"
                />
                <h3 className="title text-white mb-3">Design</h3>
                <p className="text-white mb-0">
                  Our design team creates user-friendly Flutter app designs that
                  effectively convey your idea.
                </p>
              </div>
            </div>
          </Col>
          <Col
            lg={4}
            md={6}
            className="flutter-card-flutter2 d-flex"
          >
            <div className="card">
              <div className="card-body p-4">
                <AnimatedImageWithOpacity
                  src={IMAGES.sourceCodeFlutter}
                  className="mb-2"
                  alt="sourcecode"
                  loading="lazy"
                />
                <h3 className="title text-white mb-3">Development</h3>
                <p className="text-white mb-0">
                  Skilled developers build scalable, robust Flutter apps using
                  clean code for reliability.
                </p>
              </div>
            </div>
          </Col>
          <Col
            lg={4}
            md={6}
            className="flutter-card-flutter2 d-flex"
          >
            <div className="card">
              <div className="card-body p-4">
                <AnimatedImageWithOpacity
                  src={IMAGES.ideaFlutter}
                  className="mb-2"
                  alt="idea"
                  loading="lazy"
                />
                <h3 className="title text-white mb-3">Testing</h3>
                <p className="text-white mb-0">
                  We perform thorough testing to ensure the app meets all
                  quality standards.
                </p>
              </div>
            </div>
          </Col>
          <Col
            lg={4}
            md={6}
            className="flutter-card-flutter2 d-flex"
          >
            <div className="card">
              <div className="card-body p-4">
                <AnimatedImageWithOpacity
                  src={IMAGES.rocketFlutter}
                  className="mb-2"
                  alt="rocket"
                  loading="lazy"
                />
                <h3 className="title text-white mb-3">Deployment</h3>
                <p className="text-white mb-0">
                  After completing all phases, we deploy scalable Flutter
                  solutions, turning ideas into profit.
                </p>
              </div>
            </div>
          </Col>
          <Col
            lg={4}
            md={6}
            className="flutter-card-flutter2 d-flex"
          >
            <div className="card">
              <div className="card-body p-4">
                <h3 className="title text-white mb-3">
                  Discuss Your Flutter Idea
                </h3>
                <p className="text-white mb-4">
                  Let’s discuss your project and bring your ideas to life.
                </p>
                <button
                  className="btn btn-primary custom-cursor"
                  onClick={() => navigate('/contact-us')}
                >
                  Contact Us
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FlutterAppDevelopmentProcess;

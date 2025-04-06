import { Col, Container, Row } from 'react-bootstrap';
import './style.css';
import { useState } from 'react';
import { IMAGES } from '../../../utils/staticJSON';

const AndroidTechStack = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabId: number) => {
    setActiveTab(tabId);
  };

  return (
    <section className="section bg-light-blue custom-blog-cursor">
      <Container>
        <div className="title-box mb-lg-5">
          <Row className="gy-4 align-items-center text-center text-md-start mb-5">
            <Col
              md={6}
              lg={5}
            >
              <div className="title-box mb-0">
                <h2 className="title-2 mb-0">
                  Powering Apps with Our
                  <br /> Tech Stack
                </h2>
              </div>
            </Col>
            <Col
              md={6}
              className="offset-lg-1"
            >
              <p className="mb-0">
                We leverage cutting-edge technologies to build exceptional
                mobile applications, ensuring top performance & innovation.
                Explore our suite of tools & frameworks driving app's success.
              </p>
            </Col>
          </Row>
          <Row className="gy-5 g-lg-5 justify-content-between align-items-start">
            <Col lg={5}>
              <div
                className="nav flex-column nav-tabs custom-tabs"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <button
                  className={`nav-link  custom-blog-cursor ${
                    activeTab === 1 ? 'active' : ''
                  }`}
                  onClick={() => handleTabClick(1)}
                  id="v-pills-android-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-android"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-android"
                  aria-selected="true"
                >
                  Android
                </button>
                <button
                  className={`nav-link custom-blog-cursor ${
                    activeTab === 2 ? 'active' : ''
                  }`}
                  onClick={() => handleTabClick(2)}
                  id="v-pills-iOS-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-iOS"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-iOS"
                  aria-selected="false"
                >
                  IOS
                </button>
                <button
                  className={`nav-link  custom-blog-cursor ${
                    activeTab === 3 ? 'active' : ''
                  }`}
                  onClick={() => handleTabClick(3)}
                  id="v-pills-hybridapps-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-hybridapps"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-hybridapps"
                  aria-selected="false"
                >
                  Hybrid Apps
                </button>
                <button
                  className={`nav-link custom-blog-cursor ${
                    activeTab === 4 ? 'active' : ''
                  }`}
                  onClick={() => handleTabClick(4)}
                  id="v-pills-database-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-database"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-database"
                  aria-selected="false"
                >
                  Database
                </button>
                <button
                  className={`nav-link custom-blog-cursor ${
                    activeTab === 5 ? 'active' : ''
                  }`}
                  onClick={() => handleTabClick(5)}
                  id="v-pills-arvr-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-arvr"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-arvr"
                  aria-selected="false"
                >
                  AR/VR
                </button>
              </div>
            </Col>
            <Col lg={6}>
              <div
                className="tab-content"
                id="v-pills-tabContent"
              >
                <div
                  className={`tab-pane fade ${
                    activeTab === 1 ? 'show active' : ''
                  }  powering-services`}
                  id="v-pills-android"
                  role="tabpanel"
                  aria-labelledby="v-pills-android-tab"
                >
                  <h2 className="title">Our Android TechStack</h2>
                  <p className="fs-20 mb-5">
                    We utilize Kotlin and Java for powerful, high-performance
                    Android app development.
                  </p>
                  <Row className="gy-4">
                    <Col xs="auto">
                      <img
                        src={IMAGES.kotlin}
                        className="img-fluid"
                        alt="kotlin"
                        loading="lazy"
                      />
                    </Col>
                    <Col xs="auto">
                      <img
                        src={IMAGES.java}
                        className="img-fluid"
                        alt="java"
                        loading="lazy"
                      />
                    </Col>
                  </Row>
                </div>
                <div
                  className={`tab-pane fade ${
                    activeTab === 2 ? 'show active' : ''
                  }  powering-services`}
                  id="v-pills-iOS"
                  role="tabpanel"
                  aria-labelledby="v-pills-iOS-tab"
                >
                  <h2 className="title">Our IOS TechStack</h2>
                  <p className="fs-20 mb-5">
                    Crafting innovative iOS apps with Swift and Objective-C, we
                    ensure top-notch performance and a smooth user experience.
                  </p>
                  <Row className="gy-4">
                    <Col xs="auto">
                      <img
                        src={IMAGES.swift}
                        className="img-fluid"
                        alt="java"
                        loading="lazy"
                      />
                    </Col>
                    <Col xs="auto">
                      <img
                        src={IMAGES.objC}
                        className="img-fluid"
                        alt="kotlin"
                        loading="lazy"
                      />
                    </Col>
                  </Row>
                </div>
                <div
                  className={`tab-pane fade ${
                    activeTab === 3 ? 'show active' : ''
                  }  powering-services`}
                  id="v-pills-hybridapps"
                  role="tabpanel"
                  aria-labelledby="v-pills-hybridapps-tab"
                >
                  <h2 className="title">Our Hybrid Apps</h2>
                  <p className="fs-20 mb-5">
                    Using React Native and Flutter, we create cross-platform
                    apps that offer native-like performance on both iOS and
                    Android.
                  </p>
                  <Row className="gy-4">
                    <Col xs="auto">
                      <img
                        src={IMAGES.flutterSymbol}
                        className="img-fluid"
                        alt="kotlin"
                        loading="lazy"
                      />
                    </Col>
                    <Col xs="auto">
                      <img
                        src={IMAGES.reactNative}
                        className="img-fluid"
                        alt="java"
                        loading="lazy"
                      />
                    </Col>
                  </Row>
                </div>
                <div
                  className={`tab-pane fade ${
                    activeTab === 4 ? 'show active' : ''
                  }  powering-services`}
                  id="v-pills-database"
                  role="tabpanel"
                  aria-labelledby="v-pills-database-tab"
                >
                  <h2 className="title">Our Database</h2>
                  <p className="fs-20 mb-5">
                    From MySQL to Firebase and MongoDB, we implement scalable,
                    secure databases for efficient data management.
                  </p>
                  <Row className="gy-4">
                    <Col xs="auto">
                      <img
                        src={IMAGES.mysql}
                        className="img-fluid"
                        alt="java"
                        loading="lazy"
                      />
                    </Col>
                    <Col xs="auto">
                      <img
                        src={IMAGES.firebase}
                        className="img-fluid"
                        alt="kotlin"
                        loading="lazy"
                      />
                    </Col>
                    <Col xs="auto">
                      <img
                        src={IMAGES.mongodb}
                        className="img-fluid"
                        alt="kotlin"
                        loading="lazy"
                      />
                    </Col>
                  </Row>
                </div>
                <div
                  className={`tab-pane fade ${
                    activeTab === 5 ? 'show active' : ''
                  }  powering-services`}
                  id="v-pills-arvr"
                  role="tabpanel"
                  aria-labelledby="v-pills-arvr-tab"
                >
                  <h2 className="title">Our AR/VR</h2>
                  <p className="fs-20 mb-5">
                    Leveraging ARKit and Vuforia, we create immersive AR/VR
                    experiences that engage users with interactive, real-time
                    environments.
                  </p>
                  <Row className="gy-4">
                    <Col xs="auto">
                      <img
                        src={IMAGES.arKit}
                        className="img-fluid"
                        alt="kotlin"
                        loading="lazy"
                      />
                    </Col>
                    <Col xs="auto">
                      <img
                        src={IMAGES.vuforia}
                        className="img-fluid"
                        alt="java"
                        loading="lazy"
                      />
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default AndroidTechStack;

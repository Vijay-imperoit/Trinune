import { Col, Image, Row } from "react-bootstrap";
import { IMAGES } from "../../../../utils/staticJSON";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Achievements = () => {
  const [activeTab, setActiveTab] = useState("nav-application");
  const location = useLocation();

  useEffect(() => {
    if (
      [
        "/ios-app-development",
        "/flutter-app-development",
        "/android-app-development",
        "/react-native-development",
        "/mobile-app-development",
      ].includes(location.pathname)
    ) {
      handleTabClick("nav-application");
    } else if (
      [
        "/uiux",
        "/bespoke-software-development",
        "/web-development",
      ].includes(location.pathname)
    ) {
      handleTabClick("nav-digital");
    } else if (["/arvr", "/esg-sustainability"].includes(location.pathname)) {
      handleTabClick("nav-emerging");
    }
  }, [location.pathname]);
  const handleTabClick = (tabId: any) => {
    setActiveTab(tabId);
  };
  return (
    <Row className="gy-3">
      <Col
        lg={4}
        className="p-lg-4 border-lg-line"
      >
        <div
          className="nav"
          id="nav-tab"
          role="tablist"
        >
          <div
            data-bs-toggle="tab"
            data-bs-target="#nav-application"
            className={`nav-link custom-cursor ${
              activeTab === 'nav-application' ? 'active' : ''
            }`}
            id="nav-application-tab"
            role="tab"
            aria-controls="nav-application"
            aria-selected={activeTab === 'nav-application'}
            onClick={() => handleTabClick('nav-application')}
          >
            <div>
              <p className="main-text">Application Development</p>
              <p className="sub-text">Custom apps built to fit your needs.</p>
            </div>
            <Image
              className="img-fluid show-arrow"
              src={IMAGES.arrowRightIcon}
              width="18"
              height="18"
              alt="icon"
              loading="lazy"
            />
          </div>
          <div
            data-bs-toggle="tab"
            data-bs-target="#nav-digital"
            className={`nav-link custom-cursor ${
              activeTab === 'nav-digital' ? 'active' : ''
            }`}
            id="nav-digital-tab"
            role="tab"
            aria-controls="nav-digital"
            aria-selected={activeTab === 'nav-digital'}
            onClick={() => handleTabClick('nav-digital')}
          >
            <div>
              <p className="main-text">Digital Expertise</p>
              <p className="sub-text">
                Shaping future with digital innovation.
              </p>
            </div>
            <Image
              className="img-fluid show-arrow"
              src={IMAGES.arrowRightIcon}
              width="18"
              height="18"
              alt="icon"
              loading="lazy"
            />
          </div>
          <div
            data-bs-toggle="tab"
            data-bs-target="#nav-emerging"
            className={`nav-link custom-cursor ${
              activeTab === 'nav-emerging' ? 'active' : ''
            }`}
            id="nav-emerging-tab"
            role="tab"
            aria-controls="nav-emerging"
            aria-selected={activeTab === 'nav-emerging'}
            onClick={() => handleTabClick('nav-emerging')}
          >
            <div>
              <p className="main-text">Emerging Technologies</p>
              <p className="sub-text">Leveraging cutting-edge technology.</p>
            </div>
            <Image
              className="img-fluid show-arrow"
              src={IMAGES.arrowRightIcon}
              width="18"
              height="18"
              alt="icon"
              loading="lazy"
            />
          </div>
        </div>
      </Col>
      <Col lg={8}>
        <div
          className="tab-content p-0 h-100"
          id="nav-tabContent"
        >
          <div
            className={`h-100 tab-pane fade ${
              activeTab === 'nav-application' ? 'show active' : ''
            }`}
            id="nav-application"
            role="tabpanel"
            aria-labelledby="nav-application-tab"
            tabIndex={0}
          >
            <Row className="h-100 gx-lg-1">
              <Col
                lg={6}
                className="px-2 px-md-3 py-4 h-100"
              >
                <div className="row gy-30 gx-2 gx-lg-auto">
                  <a
                    href="/mobile-app-development"
                    className="col-lg-12 nav-hover custom-cursor"
                  >
                    <div className="nav-ions gap-3">
                      <div className="svg-box">
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 14 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.8617 0H3.13672C1.61172 0 0.386719 1.225 0.386719 2.75V19.25C0.386719 20.775 1.63672 22 3.13672 22H10.8617C12.3867 22 13.6117 20.775 13.6117 19.25V2.75C13.6117 1.225 12.3867 0 10.8617 0ZM7.01172 20.225C6.31172 20.225 5.76172 19.675 5.76172 18.975C5.76172 18.275 6.31172 17.725 7.01172 17.725C7.71172 17.725 8.26172 18.275 8.26172 18.975C8.26172 19.675 7.71172 20.225 7.01172 20.225ZM12.3617 16.4H1.63672V3.675H12.3617V16.4Z"
                            fill="#191A4E"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="title mb-1">Mobile App Development</h3>
                        {/* <span className='sab-text'>
                          Cross-platform excellence.
                        </span> */}
                      </div>
                      <img
                        className="click-show"
                        src={IMAGES.upArrow}
                        width="15"
                        height="15"
                        alt="arrow"
                        loading="lazy"
                      />
                    </div>
                  </a>
                  <a
                    href="/ios-app-development"
                    className="col-lg-12 nav-hover custom-cursor"
                  >
                    <div className="nav-ions gap-3">
                      <div className="svg-box svg-box2">
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18.7725 15.3181H16.1816"
                            stroke="currentColor"
                            stroke-opacity="0.99"
                            stroke-width="2.59091"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M17.9099 18.7727L12.9785 9.89453"
                            stroke="currentColor"
                            stroke-opacity="0.99"
                            stroke-width="2.59091"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M11.0007 6.33639L9.27344 3.22729"
                            stroke="currentColor"
                            stroke-opacity="0.99"
                            stroke-width="2.59091"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12.7282 3.22729L4.0918 18.7727"
                            stroke="currentColor"
                            stroke-opacity="0.99"
                            stroke-width="2.59091"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M11.8649 15.3181H3.22852"
                            stroke="currentColor"
                            stroke-opacity="0.99"
                            stroke-width="2.59091"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="title mb-1">iOS App Development</h3>
                        {/* <span className='sab-text'>
                          Smart iOS apps for growth.
                        </span> */}
                      </div>
                      <img
                        className="click-show"
                        src={IMAGES.upArrow}
                        width="15"
                        height="15"
                        alt="arrow"
                        loading="lazy"
                      />
                    </div>
                  </a>
                  <a
                    href="/flutter-app-development"
                    className="col-lg-12 nav-hover custom-cursor"
                  >
                    <div className="nav-ions gap-3">
                      <div className="svg-box">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          fill="currentColor"
                          viewBox="0 0 448 512"
                        >
                          <path d="M429.5 236.3L291.7 374.1 429.5 512H272l-59.1-59.1-78.8-78.8L272 236.3H429.5zM272 0L16 256l78.8 78.8L429.5 0H272z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="title mb-1">Flutter Development</h3>
                        {/* <span className='sab-text'>
                          Cross-platform excellence.
                        </span> */}
                      </div>
                      <img
                        className="click-show"
                        src={IMAGES.upArrow}
                        width="15"
                        height="15"
                        alt="arrow"
                        loading="lazy"
                      />
                    </div>
                  </a>
                  <a
                    href="/android-app-development"
                    className="col-lg-12 nav-hover custom-cursor"
                  >
                    <div className="nav-ions gap-3">
                      <div className="svg-box svg-box3">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M23.66 0.341064H0.341797V23.6592H23.66V0.341064Z"
                            fill="white"
                            fill-opacity="0.01"
                          />
                          <path
                            className="stroke-box"
                            d="M21.6679 17.8295H2.33203C2.8195 12.9198 6.96191 9.08521 12 9.08521C17.038 9.08521 21.1804 12.9198 21.6679 17.8295Z"
                            stroke="#191A4E"
                            stroke-width="1.72727"
                            stroke-linejoin="round"
                          />
                          <path
                            className="stroke-box"
                            d="M7.1424 10.0568L5.19922 6.65625"
                            stroke="#191A4E"
                            stroke-width="1.72727"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            className="stroke-box"
                            d="M16.373 10.0568L18.3162 6.65625"
                            stroke="#191A4E"
                            stroke-width="1.72727"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M8.21129 16.0808C9.01618 16.0808 9.66868 15.4283 9.66868 14.6234C9.66868 13.8185 9.01618 13.166 8.21129 13.166C7.4064 13.166 6.75391 13.8185 6.75391 14.6234C6.75391 15.4283 7.4064 16.0808 8.21129 16.0808Z"
                            fill="#191A4E"
                          />
                          <path
                            d="M15.7894 16.0808C16.5943 16.0808 17.2468 15.4283 17.2468 14.6234C17.2468 13.8185 16.5943 13.166 15.7894 13.166C14.9845 13.166 14.332 13.8185 14.332 14.6234C14.332 15.4283 14.9845 16.0808 15.7894 16.0808Z"
                            fill="#191A4E"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="title mb-1">Android App Development</h3>
                        {/* <span className='sab-text'>Tailored Android apps.</span> */}
                      </div>
                      <img
                        className="click-show"
                        src={IMAGES.upArrow}
                        width="15"
                        height="15"
                        alt="arrow"
                        loading="lazy"
                      />
                    </div>
                  </a>
                  <a
                    href="/react-native-development"
                    className="col-lg-12 nav-hover custom-cursor"
                  >
                    <div className="nav-ions gap-3">
                      <div className="svg-box">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          viewBox="0 0 512 512"
                          fill="currentColor"
                        >
                          <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1 .9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2 .6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6 .4 19.5 .6 29.5 .6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8 .9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="title mb-1">React Native Development</h3>
                        {/* <span className='sab-text'>
                          Seamless mobile experiences.
                        </span> */}
                      </div>
                      <img
                        className="click-show"
                        src={IMAGES.upArrow}
                        width="15"
                        height="15"
                        alt="arrow"
                        loading="lazy"
                      />
                    </div>
                  </a>
                </div>
              </Col>
              <Col
                lg={6}
                className="bg-blue-gradient p-4 text-white h-lg-100 custom-blog-cursor-white"
              >
                <h3 className="">
                  Looking for App Developers? Let's Discuss!
                </h3>
                <p className="">
                  With 50+ expert developers, we’re here to turn your app vision
                  into reality. Let’s discuss your ideas!
                </p>
                <a
                  href="/contact-us"
                  className="btn btn-outline-light rounded-pill text-white mt-4 custom-cursor"
                >
                  Talk to Sales
                </a>
              </Col>
            </Row>
          </div>
          <div
            className={`h-100 tab-pane fade ${
              activeTab === 'nav-digital' ? 'show active' : ''
            }`}
            id="nav-digital"
            role="tabpanel"
            aria-labelledby="nav-digital-tab"
            tabIndex={1}
          >
            <Row className="h-100 gx-lg-1">
              <Col
                lg={6}
                className="px-2 px-md-3 py-4 h-100"
              >
                <div className="row gy-30 gx-2 gx-lg-auto">
                  <a
                    href="/bespoke-software-development"
                    className="col-lg-12 nav-hover custom-cursor"
                  >
                    <div className="nav-ions gap-3">
                      <div className="svg-box">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.4504 9.5835C11.5137 9.061 11.5612 8.5385 11.5612 8.00016C11.5612 7.46183 11.5137 6.93933 11.4504 6.41683H14.1262C14.2529 6.9235 14.332 7.45391 14.332 8.00016C14.332 8.54641 14.2529 9.07683 14.1262 9.5835M10.0491 13.9852C10.5241 13.1064 10.8883 12.1564 11.1416 11.1668H13.477C12.71 12.4875 11.4932 13.488 10.0491 13.9852ZM9.8512 9.5835H6.1462C6.06703 9.061 6.01953 8.5385 6.01953 8.00016C6.01953 7.46183 6.06703 6.93141 6.1462 6.41683H9.8512C9.92245 6.93141 9.97786 7.46183 9.97786 8.00016C9.97786 8.5385 9.92245 9.061 9.8512 9.5835ZM7.9987 14.3018C7.34161 13.3518 6.8112 12.2989 6.48661 11.1668H9.51078C9.1862 12.2989 8.65578 13.3518 7.9987 14.3018ZM4.83203 4.8335H2.52036C3.27929 3.50906 4.4953 2.50698 5.94036 2.01516C5.46536 2.89391 5.10911 3.84391 4.83203 4.8335ZM2.52036 11.1668H4.83203C5.10911 12.1564 5.46536 13.1064 5.94036 13.9852C4.49816 13.4882 3.28376 12.4875 2.52036 11.1668ZM1.8712 9.5835C1.74453 9.07683 1.66536 8.54641 1.66536 8.00016C1.66536 7.45391 1.74453 6.9235 1.8712 6.41683H4.54703C4.4837 6.93933 4.4362 7.46183 4.4362 8.00016C4.4362 8.5385 4.4837 9.061 4.54703 9.5835M7.9987 1.69058C8.65578 2.64058 9.1862 3.70141 9.51078 4.8335H6.48661C6.8112 3.70141 7.34161 2.64058 7.9987 1.69058ZM13.477 4.8335H11.1416C10.8935 3.8531 10.5266 2.90666 10.0491 2.01516C11.5058 2.51391 12.717 3.51933 13.477 4.8335ZM7.9987 0.0834961C3.62078 0.0834961 0.0820312 3.646 0.0820312 8.00016C0.0820312 10.0998 0.916106 12.1134 2.40077 13.5981C3.1359 14.3332 4.00863 14.9164 4.96912 15.3142C5.92961 15.7121 6.95907 15.9168 7.9987 15.9168C10.0983 15.9168 12.112 15.0828 13.5966 13.5981C15.0813 12.1134 15.9154 10.0998 15.9154 8.00016C15.9154 6.96053 15.7106 5.93108 15.3127 4.97058C14.9149 4.01009 14.3318 3.13736 13.5966 2.40223C12.8615 1.6671 11.9888 1.08397 11.0283 0.686116C10.0678 0.288267 9.03833 0.0834961 7.9987 0.0834961Z"
                            fill="#191A4E"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="title mb-1">Bespoke Software</h3>
                        {/* <span className='sab-text'>
                          Bespoke Software for Your Needs.
                        </span> */}
                      </div>
                      <img
                        className="click-show"
                        src={IMAGES.upArrow}
                        width="15"
                        height="15"
                        alt="arrow"
                        loading="lazy"
                      />
                    </div>
                  </a>
                  <a
                    href="/web-development"
                    className="col-lg-12 nav-hover custom-cursor"
                  >
                    <div className="nav-ions gap-3">
                      <div className="svg-box svg-box2">
                        <svg
                          width="22"
                          height="20"
                          viewBox="0 0 22 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18.5993 12.3751V4.7751C18.5993 2.9834 18.5993 2.0885 18.0426 1.5318C17.4859 0.975098 16.591 0.975098 14.7993 0.975098H7.19925C5.40755 0.975098 4.51265 0.975098 3.95595 1.5318C3.39925 2.0885 3.39925 2.9834 3.39925 4.7751V12.3751M2.92235 13.3393L3.41825 12.3751H18.5537L19.0762 13.3393C20.447 15.8682 20.789 17.1327 20.2675 18.0789C19.7459 19.0251 18.3656 19.0251 15.603 19.0251H6.39555C3.632 19.0251 2.2507 19.0251 1.7301 18.0789C1.20855 17.1327 1.55055 15.8682 2.92235 13.3393Z"
                            stroke="#191A4E"
                            stroke-width="1.425"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M14.325 5.25005L15.199 6.0034C15.5666 6.31975 15.75 6.4784 15.75 6.67505C15.75 6.8717 15.5666 7.03035 15.199 7.3467L14.325 8.10005M7.675 5.25005L6.801 6.0034C6.43335 6.31975 6.25 6.4784 6.25 6.67505C6.25 6.8717 6.43335 7.03035 6.801 7.3467L7.675 8.10005M11.95 4.30005L10.05 9.05005"
                            stroke="#191A4E"
                            stroke-width="1.425"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="title mb-1">Web App Development</h3>
                        {/* <span className='sab-text'>
                          Seamless & scalable web apps.
                        </span> */}
                      </div>
                      <img
                        className="click-show"
                        src={IMAGES.upArrow}
                        width="15"
                        height="15"
                        alt="arrow"
                        loading="lazy"
                      />
                    </div>
                  </a>
                  <a
                    href="/uiux"
                    className="col-lg-12 nav-hover custom-cursor"
                  >
                    <div className="nav-ions gap-3">
                      <div className="svg-box svg-box2">
                        <svg
                          width="12"
                          height="18"
                          viewBox="0 0 12 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.36168 6.36129C2.66176 6.36129 1.99052 6.08325 1.49561 5.58834C1.0007 5.09343 0.722656 4.42218 0.722656 3.72227C0.722656 3.02236 1.0007 2.35112 1.49561 1.8562C1.99052 1.36129 2.66176 1.08325 3.36168 1.08325H6.0003V6.36129M3.36168 6.36129H6.0003M3.36168 6.36129C2.66187 6.36129 1.99073 6.63929 1.49589 7.13413C1.00105 7.62897 0.723052 8.30011 0.723052 8.99992C0.723052 9.69972 1.00105 10.3709 1.49589 10.8657C1.99073 11.3605 2.66187 11.6385 3.36168 11.6385H6.0003V6.36129"
                            stroke="#191A4E"
                            stroke-width="1.425"
                          />
                          <path
                            d="M11.2779 8.99986C11.2779 9.69977 10.9999 10.371 10.505 10.8659C10.0101 11.3608 9.33884 11.6389 8.63893 11.6389C7.93902 11.6389 7.26777 11.3608 6.77286 10.8659C6.27795 10.371 5.99991 9.69977 5.99991 8.99986C5.99991 8.29995 6.27795 7.6287 6.77286 7.13379C7.26777 6.63888 7.93902 6.36084 8.63893 6.36084C9.33884 6.36084 10.0101 6.63888 10.505 7.13379C10.9999 7.6287 11.2779 8.29995 11.2779 8.99986ZM3.36128 11.6393H5.99991V14.2779C5.99975 14.7997 5.84486 15.3098 5.55483 15.7436C5.2648 16.1774 4.85265 16.5155 4.37049 16.7151C3.88833 16.9147 3.35782 16.9668 2.84603 16.8649C2.33424 16.763 1.86415 16.5117 1.49521 16.1426C1.12627 15.7736 0.875048 15.3034 0.7733 14.7916C0.671552 14.2798 0.723852 13.7493 0.923586 13.2672C1.12332 12.7851 1.46152 12.373 1.89542 12.0831C2.32933 11.7932 2.83944 11.6393 3.36128 11.6393Z"
                            stroke="#191A4E"
                            stroke-width="1.425"
                          />
                          <path
                            d="M6 1.08325H8.63862C9.33854 1.08325 10.0098 1.36129 10.5047 1.8562C10.9996 2.35112 11.2776 3.02236 11.2776 3.72227C11.2776 4.42219 10.9996 5.09343 10.5047 5.58834C10.0098 6.08326 9.33854 6.36129 8.63862 6.36129H6V1.08325Z"
                            stroke="#191A4E"
                            stroke-width="1.425"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="title mb-1">UI UX Designing</h3>
                        {/* <span className='sab-text'>
                          User-Centered UI/UX Design.
                        </span> */}
                      </div>
                      <img
                        className="click-show"
                        src={IMAGES.upArrow}
                        width="15"
                        height="15"
                        alt="arrow"
                        loading="lazy"
                      />
                    </div>
                  </a>
                </div>
              </Col>
              <Col
                lg={6}
                className="bg-blue-gradient p-4 pb-lg-0 pe-lg-0 text-white h-lg-100 pattern-line"
              >
                <div className="pe-4">
                  <h3 className="custom-blog-cursor">
                    Unlock Cutting-Edge Solutions with Our Digital Expertise
                    Let's Discuss!
                  </h3>
                  <a
                    href="/contact-us"
                    className="text-white mt-4 custom-cursor"
                  >
                    Contact Our Team
                    <Image
                      className="ms-2"
                      src={IMAGES.arrowRightIconWhite}
                      width="16"
                      height="15"
                      alt="right"
                    />
                  </a>
                </div>
                <div className="nav-hide-img text-center text-lg-end mt-4">
                  <Image
                    src={IMAGES.laptopMobile}
                    width="300"
                    height="162"
                    className="img-fluid mt-4"
                    alt="laptop"
                  />
                </div>
              </Col>
            </Row>
          </div>
          <div
            className={`h-100 tab-pane fade ${
              activeTab === 'nav-emerging' ? 'show active' : ''
            }`}
            id="nav-emerging"
            role="tabpanel"
            aria-labelledby="nav-emerging-tab"
            tabIndex={2}
          >
            <Row className="h-100 gx-lg-1">
              <Col
                lg={6}
                className="px-2 px-md-3 py-4 h-100"
              >
                <div className="row gy-30 gx-2 gx-lg-auto">
                  <a
                    href="/esg-sustainability"
                    className="col-lg-12 nav-hover custom-cursor"
                  >
                    <div className="nav-ions gap-3">
                      <div className="svg-box svg-box2">
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M29.8797 10.15L28.6798 10.55C26.6232 11.2646 24.427 11.4838 22.2698 11.19C20.0029 10.8382 17.6827 11.1508 15.5898 12.09C14.4802 12.5625 13.5065 13.3049 12.7572 14.2498C12.0079 15.1947 11.5069 16.312 11.2998 17.5C11.089 18.6425 11.1106 19.8157 11.3631 20.9496C11.6157 22.0835 12.0941 23.155 12.7698 24.1C12.7098 24.31 12.6498 24.52 12.5998 24.73C12.1936 26.457 11.9922 28.2259 11.9998 30H13.9998C14.0948 28.548 14.2919 27.1044 14.5898 25.68C15.9772 26.4292 17.5331 26.8113 19.1098 26.79C20.5802 26.789 22.0356 26.4932 23.3898 25.92C30.9998 22.67 29.9998 11.86 29.9998 11.41L29.8797 10.15ZM22.6098 24.08C19.9998 25.19 16.8798 25 15.1298 23.63C15.4256 22.6411 15.8315 21.6885 16.3398 20.79C16.7352 20.1436 17.2014 19.5432 17.7298 19C18.2699 18.4512 18.8782 17.974 19.5398 17.58C20.9068 16.7626 22.423 16.2255 23.9998 16V15C22.1854 14.9361 20.3821 15.3063 18.7398 16.08C17.0607 16.9004 15.6365 18.1621 14.6198 19.73C14.2427 20.329 13.9086 20.9539 13.6198 21.6C13.1563 20.4144 13.0249 19.1248 13.2398 17.87C13.3805 16.9916 13.7427 16.1634 14.292 15.4636C14.8414 14.7638 15.5598 14.2154 16.3798 13.87C17.575 13.3102 18.8799 13.0233 20.1998 13.03C20.8198 13.03 21.4298 13.09 22.0698 13.14C24.0741 13.3986 26.1091 13.2799 28.0697 12.79C27.9998 15.55 27.4998 22 22.6098 24.08Z"
                            stroke="currentColor"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="title mb-1">Expert ESG Stratergy</h3>
                        {/* <span className='sab-text'>
                          Empowering businesses with sustainable strategies.
                        </span> */}
                      </div>
                      <img
                        className="click-show"
                        src={IMAGES.upArrow}
                        width="15"
                        height="15"
                        alt="arrow"
                        loading="lazy"
                      />
                    </div>
                  </a>
                  <a
                    href="/arvr"
                    className="col-lg-12 nav-hover custom-cursor"
                  >
                    <div className="nav-ions gap-3">
                      <div className="svg-box svg-box2">
                        <svg
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8 10.5L12 12.5M8 10.5V14.5L12 16.5M8 10.5L12 8.5L16 10.5M12 12.5L16 10.5M12 12.5V16.5M12 16.5L16 14.5V10.5M9.4 21.5C7.16 21.5 6.04 21.5 5.184 21.064C4.43139 20.6805 3.81949 20.0686 3.436 19.316C3 18.46 3 17.34 3 15.1M21 15.1C21 17.34 21 18.46 20.564 19.316C20.1805 20.0686 19.5686 20.6805 18.816 21.064C17.96 21.5 16.84 21.5 14.6 21.5M14.6 3.5C16.84 3.5 17.96 3.5 18.816 3.936C19.5686 4.31949 20.1805 4.93139 20.564 5.684C21 6.54 21 7.66 21 9.9M9.4 3.5C7.16 3.5 6.04 3.5 5.184 3.936C4.43139 4.31949 3.81949 4.93139 3.436 5.684C3 6.54 3 7.66 3 9.9"
                            stroke="#191A4E"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="title mb-1">AR VR App Development</h3>
                        {/* <span className='sab-text'>
                          Immersive AR/VR solutions for innovative experiences.
                        </span> */}
                      </div>
                      <Image
                        className="click-show"
                        src={IMAGES.upArrow}
                        width="15"
                        height="15"
                        alt="arrow"
                        loading="lazy"
                      />
                    </div>
                  </a>
                </div>
              </Col>
              <Col
                lg={6}
                className="bg-blue-gradient2 p-4 pb-0 text-white h-lg-100 d-flex flex-column"
              >
                <h3 className="custom-blog-cursor">Unlock the Future with Emerging Technologies</h3>
                <a
                  href="/contact-us"
                  className="text-white mt-4 custom-cursor"
                >
                  Contact Our Team
                  <Image
                    className="ms-2"
                    src={IMAGES.arrowRightIconWhite}
                    width="16"
                    height="15"
                    alt=""
                  />
                </a>

                <div className="text-end mt-4 mt-lg-auto">
                  <Image
                    src={IMAGES.vrMan}
                    width="190"
                    height="204"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Achievements;

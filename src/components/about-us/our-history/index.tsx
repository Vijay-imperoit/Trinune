import { Col, Container, Row } from 'react-bootstrap';
import './style.css';
import { IMAGES } from '../../../utils/staticJSON';
import { useEffect, useState } from 'react';
// import { useEffect, useState } from 'react';

const OurHistory = () => {

  const [preloadedImages, setPreloadedImages] = useState<Set<string>>(new Set());

  const imageJSON: any = {
      "history1": IMAGES.history1,
      "history2": IMAGES.history2,
      "history3": IMAGES.history3,
      "history4": IMAGES.history4,
      "history5": IMAGES.history5,
      "history6": IMAGES.history6,
      "history7": IMAGES.history7,
      "history8": IMAGES.history8,
      "history9": IMAGES.history9,
      "history10": IMAGES.history10,
      "history11": IMAGES.history11
  }

  useEffect(() => {
    const preloadImage: any = (src: string) => {
      return new Promise<void>((resolve, reject) => {
        const img = new window.Image();
        img.src = src;
        img.onload = () => {
          setPreloadedImages((prev) => new Set(prev).add(src));
          resolve();
        };
        img.onerror = (err) => reject(err);
      });
    };

    const preloadAllImages = async () => {
      try {
        const imagePromises = Object.values(imageJSON).map(preloadImage);
        await Promise.all(imagePromises);
        console.log("All images preloaded successfully.");
      } catch (error) {
        console.error("Error preloading images:", error);
      }
    };

    preloadAllImages();
  }, []);
  return (
    <section
      id="mouse-up"
      className="section our-history-section-about custom-blog-cursor-white"
    >
      <Container>
        <Row>
          <Col lg={6}>
            <h2 className="title-2">Our History: Tech Evolution</h2>
          </Col>
          <Col lg={6}>
            <p>
              Explore the journey of innovation that has defined our path.
              Discover
              <br /> how our technological innovations shaped the future.
            </p>
          </Col>
        </Row>
        <div className='mt-5'>
          {/* <div className="mouse-up-box">
            <a href="#mouse-up">
              <img
                className="img-fluid"
                src={IMAGES.mouseIcon}
                width="40"
                height="40"
                alt="mouse-up"
                loading="lazy"
              />
            </a>
          </div> */}

          <div
            className="card position-sticky"
            style={{ zIndex: 0, top: '140px' }}
          >
            {preloadedImages.has(imageJSON["history1"])?
            <img
              className="card-background-img"
              src={IMAGES.history1}
              alt="Background 1"
              loading="lazy"
            />
            :
            <img
              className="card-background-img"
              src={IMAGES.history1}
              alt="Background 1"
              loading="lazy"
              style={{
                opacity: preloadedImages.has(imageJSON["history1"]) ? 0 : 1,
                transition: 'opacity 0.5s ease-in-out',
                filter: 'blur(5px)',
              }}
            />
            }
            <div className="card-body">
              <Row>
                <Col lg={8}>
                  {/* <img
                    className="img-fluid"
                    src={IMAGES.logoWhite}
                    alt="impero-logo"
                    width="252"
                    height="58"
                    loading="lazy"
                  /> */}
                </Col>
                <Col lg={4}>
                  <div className="info-box">
                    <h3 className="time-text">2011</h3>
                    <h4 className="title-text">Impero comes to life</h4>
                    <p className="desc-text">
                      Impero began its journey in a modest 200-square-foot
                      office, where big ideas and innovation came to life. From
                      these humble beginnings, we’ve grown into a leading force
                      in technology.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <div
            className="card position-sticky"
            style={{ zIndex: 1, top: '160px' }}
          >
            {preloadedImages.has(imageJSON["history2"]) ?
            <img
              className="card-background-img"
              src={IMAGES.history2}
              alt="Background 1"
              loading="lazy"
            />
            :
            <img
            className="card-background-img"
            src={IMAGES.history2}
            alt="Background 1"
            loading="lazy"
            style={{
              opacity: preloadedImages.has(imageJSON["history2"]) ? 0 : 1,
              transition: 'opacity 0.5s ease-in-out',
              filter: 'blur(5px)',
            }}
          />
            }
            <div className="card-body">
              <Row>
                <Col lg={8}>
                  {/* <img
                    className="img-fluid"
                    src={IMAGES.logoWhite}
                    alt="impero-logo"
                    width="252"
                    height="58"
                    loading="lazy"
                  /> */}
                </Col>
                <Col lg={4}>
                  <div className="info-box">
                    <h3 className="time-text">2012</h3>
                    <h4 className="title-text">
                      First offshore project from USA
                    </h4>
                    <p className="desc-text">
                      After enduring numerous challenges and setbacks, we
                      secured a pivotal project from Texas, USA, marking a
                      significant milestone in our journey.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <div
            className="card position-sticky"
            style={{ zIndex: 2, top: '180px' }}
          >
            {preloadedImages.has(imageJSON["history3"]) ?
            <img
              className="card-background-img"
              src={IMAGES.history3}
              alt="Background 1"
              loading="lazy"
            />
            :
            <img
            className="card-background-img"
            src={IMAGES.history3}
            alt="Background 1"
            loading="lazy"
            style={{
              opacity: preloadedImages.has(imageJSON["history3"]) ? 0 : 1,
              transition: 'opacity 0.5s ease-in-out',
              filter: 'blur(5px)',
            }}
          />
            }
            <div className="card-body">
              <Row>
                <Col lg={8}>
                  {/* <img
                    className="img-fluid"
                    src={IMAGES.logoWhite}
                    alt="impero-logo"
                    width="252"
                    height="58"
                    loading="lazy"
                  /> */}
                </Col>
                <Col lg={4}>
                  <div className="info-box">
                    <h3 className="time-text">2013</h3>
                    <h4 className="title-text">
                      Worked with Fire Dept of Washington
                    </h4>
                    <p className="desc-text">
                      We partnered with a federal agency to revolutionize site
                      inspections by developing a mobile app that automates and
                      streamlines the entire process.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <div
            className="card position-sticky"
            style={{ zIndex: 3, top: '200px' }}
          >
            {preloadedImages.has(imageJSON["history4"]) ?
            <img
              className="card-background-img"
              src={IMAGES.history4}
              alt="Background 1"
              loading="lazy"
            />
            :
             <img
              className="card-background-img"
              src={IMAGES.history4}
              alt="Background 1"
              loading="lazy"
              style={{
                opacity: preloadedImages.has(imageJSON["history4"]) ? 0 : 1,
                transition: 'opacity 0.5s ease-in-out',
                filter: 'blur(5px)',
              }}
            />
            }
            <div className="card-body">
              <Row>
                <Col lg={8}>
                  {/* <img
                    className="img-fluid"
                    src={IMAGES.logoWhite}
                    alt="impero-logo"
                    width="252"
                    height="58"
                    loading="lazy"
                  /> */}
                </Col>
                <Col lg={4}>
                  <div className="info-box">
                    <h3 className="time-text">2015</h3>
                    <h4 className="title-text">
                      Top brands in our clientele list
                    </h4>
                    <p className="desc-text">
                      We’re very fortunate to have Times of India, Publicis
                      Groupe, ReMax, ITC Limited, DNA Daily, and Tanishq, to
                      name a few, in our clientele list.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <div
            className="card position-sticky"
            style={{ zIndex: 4, top: '220px' }}
          >
            {preloadedImages.has(imageJSON["history5"]) ?
            <img
              className="card-background-img"
              src={IMAGES.history5}
              alt="Background 1"
              loading="lazy"
            />
            :
            <img
              className="card-background-img"
              src={IMAGES.history5}
              alt="Background 1"
              loading="lazy"
              style={{
                opacity: preloadedImages.has(imageJSON["history5"]) ? 0 : 1,
                transition: 'opacity 0.5s ease-in-out',
                filter: 'blur(5px)',
              }}
            />
            }
            <div className="card-body">
              <Row>
                <Col lg={8}>
                  {/* <img
                    className="img-fluid"
                    src={IMAGES.logoWhite}
                    alt="impero-logo"
                    width="252"
                    height="58"
                    loading="lazy"
                  /> */}
                </Col>
                <Col lg={4}>
                  <div className="info-box">
                    <h3 className="time-text">2016</h3>
                    <h4 className="title-text">
                      Certificate of Excellence from Indian Army
                    </h4>
                    <p className="desc-text">
                      What a Republic Day! We were honored for our work in
                      developing a Custom ERP system for the EME 611 Battalion,
                      enhancing their operational efficiency and effectiveness.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <div
            className="card position-sticky"
            style={{ zIndex: 5, top: '240px' }}
          >
            {preloadedImages.has(imageJSON["history6"]) ?
            <img
              className="card-background-img"
              src={IMAGES.history6}
              alt="Background 1"
              loading="lazy"
            />
            :
            <img
              className="card-background-img"
              src={IMAGES.history6}
              alt="Background 1"
              loading="lazy"
              style={{
                opacity: preloadedImages.has(imageJSON["history6"]) ? 0 : 1,
                transition: 'opacity 0.5s ease-in-out',
                filter: 'blur(5px)',
              }}
            />
            }
            <div className="card-body">
              <Row>
                <Col lg={8}>
                  {/* <img
                    className="img-fluid"
                    src={IMAGES.logoWhite}
                    alt="impero-logo"
                    width="252"
                    height="58"
                    loading="lazy"
                  /> */}
                </Col>
                <Col lg={4}>
                  <div className="info-box">
                    <h3 className="time-text">2017</h3>
                    <h4 className="title-text">
                      Completed 100 Projects in 14 Countries
                    </h4>
                    <p className="desc-text">
                      Truly a phenomenal year when we completed a century of
                      successful projects!
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <div
            className="card position-sticky"
            style={{ zIndex: 6, top: '260px' }}
          >
            {preloadedImages.has(imageJSON["history7"]) ?
            <img
              className="card-background-img"
              src={IMAGES.history7}
              alt="Background 1"
              loading="lazy"
            />
            :
            <img
            className="card-background-img"
            src={IMAGES.history7}
            alt="Background 1"
            loading="lazy"
            style={{
              opacity: preloadedImages.has(imageJSON["history7"]) ? 0 : 1,
              transition: 'opacity 0.5s ease-in-out',
              filter: 'blur(5px)',
            }}
          />
            }
            <div className="card-body">
              <Row>
                <Col lg={8}>
                  {/* <img
                    className="img-fluid"
                    src={IMAGES.logoWhite}
                    alt="impero-logo"
                    width="252"
                    height="58"
                    loading="lazy"
                  /> */}
                </Col>
                <Col lg={4}>
                  <div className="info-box">
                    <h3 className="time-text">2018</h3>
                    <h4 className="title-text">
                      Opened a new office in Ireland
                    </h4>
                    <p className="desc-text">
                      We achieved our dream of international expansion with the
                      establishment of Smart Stats Limited in Dublin, marking
                      our first offshore presence.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <div
            className="card position-sticky"
            style={{ zIndex: 7, top: '280px' }}
          >
            {preloadedImages.has(imageJSON["history8"]) ?
              <img
                className="card-background-img"
                src={IMAGES.history8}
                alt="Background 1"
                loading="lazy"
              />
              :
              <img
              className="card-background-img"
              src={IMAGES.history8}
              alt="Background 1"
              loading="lazy"
              style={{
                opacity: preloadedImages.has(imageJSON["history8"]) ? 0 : 1,
                transition: 'opacity 0.5s ease-in-out',
                filter: 'blur(5px)',
              }}
            />
            }
            <div className="card-body">
              <Row>
                <Col lg={8}>
                  {/* <img
                    className="img-fluid"
                    src={IMAGES.logoWhite}
                    alt="impero-logo"
                    width="252"
                    height="58"
                    loading="lazy"
                  /> */}
                  <div className="d-flex justify-content-center align-items-center h-100">
                    <img
                      className="img-fluid"
                      src={IMAGES.mobileClutch1x}
                      alt="award"
                      width="230"
                      height="260"
                      loading="lazy"
                    />
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="info-box">
                    <h3 className="time-text">2019</h3>
                    <h4 className="title-text">
                      Top Mobile App Development Company by Clutch
                    </h4>
                    <p className="desc-text">
                      Won the Clutch Business Leader Award and opened a new
                      office in the USA.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <div
            className="card position-sticky"
            style={{ zIndex: 8, top: '300px' }}
          >
            {preloadedImages.has(imageJSON["history9"]) ?
            <img
              className="card-background-img"
              src={IMAGES.history9}
              alt="Background 1"
              loading="lazy"
            />
            :
            <img
            className="card-background-img"
            src={IMAGES.history9}
            alt="Background 1"
            loading="lazy"
            style={{
              opacity: preloadedImages.has(imageJSON["history9"]) ? 0 : 1,
              transition: 'opacity 0.5s ease-in-out',
              filter: 'blur(5px)',
            }}
          />
            }

            <div className="card-body">
              <Row>
                <Col lg={8}>
                  {/* <img
                    className="img-fluid"
                    src={IMAGES.logoWhite}
                    alt="impero-logo"
                    width="252"
                    height="58"
                    loading="lazy"
                  /> */}
                </Col>
                <Col lg={4}>
                  <div className="info-box">
                    <h3 className="time-text">2020</h3>
                    <h4 className="title-text">
                      Startup Success: 5 Secured Over $5 Million in Funding
                    </h4>
                    <p className="desc-text">
                      Partnered with five innovative startups, helping them
                      secure over $5 million in funding.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <div
            className="card position-sticky"
            style={{ zIndex: 9, top: '320px' }}
          >
            {preloadedImages.has(imageJSON["history10"])?
            <img
              className="card-background-img"
              src={IMAGES.history10}
              alt="Background 1"
              loading="lazy"
            />
            :
            <img
            className="card-background-img"
            src={IMAGES.history10}
            alt="Background 1"
            loading="lazy"
            style={{
              opacity: preloadedImages.has(imageJSON["history10"]) ? 0 : 1,
              transition: 'opacity 0.5s ease-in-out',
              filter: 'blur(5px)',
            }}
          />
            }

            <div className="card-body">
              <Row>
                <Col lg={8}>
                  {/* <img
                    className="img-fluid"
                    src={IMAGES.logoWhite}
                    alt="impero-logo"
                    width="252"
                    height="58"
                    loading="lazy"
                  /> */}
                </Col>
                <Col lg={4}>
                  <div className="info-box">
                    <h3 className="time-text">2021</h3>
                    <h4 className="title-text">
                      Featured in Forbes - June 2021
                    </h4>
                    <p className="desc-text">
                      With our excellent offerings & 100% client satisfaction
                      results, we are glad to be featured in the Forbes’ Company
                      in Focus 2021 list.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <div
            className="card position-sticky"
            style={{ zIndex: 10, top: '0px' }}
          >
            {preloadedImages.has(imageJSON["history11"])?
            <img
              className="card-background-img"
              src={IMAGES.history11}
              alt="Background 1"
              loading="lazy"
            />
            :
            <img
              className="card-background-img"
              src={IMAGES.history11}
              alt="Background 1"
              loading="lazy"
              style={{
                opacity: preloadedImages.has(imageJSON["history11"]) ? 0 : 1,
                transition: 'opacity 0.5s ease-in-out',
                filter: 'blur(5px)',
              }}
            />}
            {/* <div className="card-body d-flex flex-center">
              <img
                className="img-fluid"
                src={IMAGES.logoWhite}
                alt="impero-logo"
                width="442"
                height="102"
                loading="lazy"
              />
            </div> */}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurHistory;

import { Col, Container, Image, Row } from "react-bootstrap";
import "./style.css";
import { IMAGES } from "../../../utils/staticJSON";
import { useEffect } from "react";
import $ from "jquery";
import "magnific-popup";
import "magnific-popup/dist/magnific-popup.css";
import AnimatedImageWithOpacity from '../../../global/AnimatedImageWithOpacity';

const AboutDonaghmore = () => {
  useEffect(() => {
    $(document).ready(function () {
      $(".popup-youtube").magnificPopup({
        type: "iframe",
        iframe: {
          patterns: {
            youtube: {
              index: "youtube.com/",
              id: function (url: any) {
                console.log("🚀 ~ url:", url);

                var match = url.match(/[?&]v=([^&]+)/); // Extract video ID from short URL
                if (match && match[1]) {
                  return match[1];
                }
                // Fallback to standard YouTube URL handling
                match = url.match(/[?&]v=([^&]+)/);
                return match ? match[1] : null;
              },
              src: "https://www.youtube.com/embed/%id%?autoplay=1",
            },
          },
          srcAction: "iframe_src",
        },
      });
    });

    return () => {
      $(".popup-youtube").magnificPopup("close");
    };
  }, []);

  return (
    <>
      <section className="section about-donaghmore custom-blog-cursor">
        <Container className="text-center">
          <h2 className="mb-3 fs-32">
            About{' '}
            <span className="donaghmore-primary-color">
              Donaghmore Museum App
            </span>
          </h2>
          <p className="fs-20">
            A project that Impero is proud to be associated with! A local museum
            finds it challenging to promote itself outside, but that’s not the
            case with La Cois Museum. With the Donaghmore, Museum app, the
            workhouse museum has opened a new arena to provide a quintessential
            visitor experience.
          </p>
          <p className="fs-20">
            The app has become a source for visitors to know the stories behind
            the 200 centuries old heirloom pieces. The ‘scan & know’ feature
            integrated with 3D & AR technology releases videos, images, and
            audios that make the visitor experiences exciting & interactive.
          </p>
          <div className="row mt-5">
            <div className="col-lg-12">
              <div className="video-popup">
                <div className="thumbnail-inner">
                  <AnimatedImageWithOpacity
                    className="img-fluid w-100 lazyload border-10 max-500"
                    width="1230"
                    height="500"
                    src={IMAGES.donaghmore4}
                    alt="Donaghmore Museum"
                  />
                  <a
                    href="http://www.youtube.com/watch?v=sEbTzBnCGPE"
                    className="play-btn popup-youtube custom-cursor"
                    aria-label="playbtn"
                  >
                    <Image
                      className="img-fluid"
                      src={IMAGES.videoPlay}
                      width="60"
                      height="60"
                      alt="play-img"
                      loading="lazy"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-10 mx-auto pt-5">
              <div className="text-center mb-0">
                <h2 className="fs-26 text-black">
                  The motivation behind launching Donaghmore App!
                </h2>
                <p className="fs-20">
                  The La Cois Museum was finding it difficult to reach & relate
                  to the younger citizens who are obsessed with mobile devices.
                  The administrative department wanted a practical & viable
                  solution and at the same time which increase the footfalls in
                  the rural museum.
                </p>
                <p className="fs-20">
                  With combined efforts, we developed an AR based museum app
                  that has successfully brought in 70% more footfalls. And not
                  only that, but also the Donaghmore museum app benefited the
                  local area 30% more!
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section bg_color--5 custom-blog-cursor">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="text-center mb-5">
                <h2 className="fs-32 mb-3">Our Involvement</h2>
                <p className="fs-20">
                  We carried out a detailed analysis of the museum business
                  structure, demographics, total number of artefacts present. We
                  specifically developed AR Markers, QR codes for each artefact
                  so that it can be easily scanned by users’ devices.
                  Subsequently, we developed full-fledged Android/iOS native
                  applications and rendered AR & 3D technology to the app
                  solution.
                </p>
              </div>
            </div>
            <div className="col-12 text-center">
              <AnimatedImageWithOpacity
                className="img-fluid lazyload"
                height="530"
                width="900"
                src={IMAGES.donaghmoreM5}
                alt="siente app screenshot"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section custom-blog-cursor">
        <div className="container">
          <div className="row gy-3">
            <div className="col-lg-6">
              <iframe
                id="defframe"
                src="https://marvelapp.com/65gfhe7?emb=1&iosapp=false&frameless=false"
                width="100%"
                height="500"
                allowTransparency={true}
                style={{ textAlign: 'center', verticalAlign: 'middle' }}
              />
            </div>
            <div className="col-lg-6 align-self-center ">
              <div className=" align-self-center mb-3">
                <h2 className="fs-32 ps-2">App features</h2>
              </div>
              <div>
                <ul className="liststyle bullet">
                  <li>User-friendly UI/UX</li>
                  <li>Scanning the artefacts</li>
                  <li>Place tracking</li>
                  <li>Image detection</li>
                  <li>AR instant detection</li>
                  <li>Geofencing AR</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg_color--5 custom-blog-cursor">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div>
                <div className="mb-3">
                  <h2 className="fs-32 ps-2">
                    Achievements &<br />
                    recognitions
                  </h2>
                </div>
                <ul className="liststyle bullet">
                  <li>Launched by Sean Canney, Minister for Rural Affairs.</li>
                  <li>Gained national recognition.</li>
                  <li>Acknowledged as first of its kind in Rural Ireland.</li>
                  <li>Attracted 57% more tourists from all over the world. </li>
                  <li>Garnered a lot of appreciation.</li>
                  <li>3x increase in visitors.</li>
                  <li>Benefited surrounding area 30% more.</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 align-self-center text-center mt-4 mt-lg-0">
              <AnimatedImageWithOpacity
                className="img-fluid lazyload border-10"
                width="528"
                height="501"
                src={IMAGES.donaghmore2}
                alt="man sitting at lake"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="feddback"
        className="section donaghmore-primary-bg custom-blog-cursor"
      >
        <div className="container testimonial-donaghmore-card">
          <p className="fs-22 fw-400 mb-4">
            Impero IT Services really exceeded our expectations. The entire
            Donaghmore App is fully functional and without bugs. The AR images
            are of super quality and we are totally in awe of the way it works.
            Excellent professional service, timely management, right on budget.
            We highly recommend them.
          </p>
          <Row className="align-items-center gx-lg-3">
            <Col sm="auto">
              <AnimatedImageWithOpacity
                className="img-fluid rounded-circle"
                src={IMAGES.donaghmore3}
                width="70"
                height="70"
                alt="avtar"
                loading="lazy"
              />
            </Col>
            <Col>
              <h4 className="fs-18 fw-500 mb-1">DenseAir</h4>
              <h5 className="fs-14 fw-400 mb-0">Sponsor company</h5>
            </Col>
          </Row>
        </div>
      </section>

      <section className="portfolio-style3 portfolio-card portfolio-bluecatskill section custom-blog-cursor">
        <Container className="my-5">
          <div className="title-box text-center mb-5">
            <h2 className="title-2 mb-0">Read Next</h2>
          </div>
          <Row className="align-items-center gy-4">
            <Col lg={6}>
              <div className="info-card">
                <AnimatedImageWithOpacity
                  className="logo-img img-fluid"
                  src={IMAGES.ITCarlowLogo}
                  width="178"
                  height="90"
                  alt="logo"
                  loading="lazy"
                />
                <p className="main-text">
                  An excellent & comprehensive guide app for students of IT
                  Carlow!
                </p>
                <a
                  href="/ITCarlow"
                  className="btn bg-white custom-cursor"
                >
                  Explore More
                </a>
              </div>
            </Col>
            <Col lg={6}>
              <div className="grid-scoreboard-view grid-carlow-view">
                <div className="div1 pb-0 justify-content-end">
                  <AnimatedImageWithOpacity
                    className="img-fluid"
                    src={IMAGES.CarlowM5}
                    width="504"
                    height="308"
                    alt="scoreboard"
                    loading="lazy"
                  />
                </div>
                <div className="div2 bg-carlow pb-0 justify-content-end">
                  <AnimatedImageWithOpacity
                    className="img-fluid"
                    src={IMAGES.carlowMobile}
                    width="116"
                    height="231"
                    alt="carlow"
                    loading="lazy"
                  />
                </div>
                <div className="div3 text-start align-items-start">
                  <p className="fw-normal">
                    Cloud-based app for effortless information storage with
                    FAQs, links, and PDFs.
                  </p>
                </div>
                <div className="div4 text-start align-items-start">
                  <p className="fw-normal">
                    Real-time updates delivered through push notifications.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AboutDonaghmore;

import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import $ from "jquery";
import "magnific-popup";
import "magnific-popup/dist/magnific-popup.css";
import "./style.css";
import { IMAGES } from "../../../utils/staticJSON";
import AnimatedImageWithOpacity from '../../../global/AnimatedImageWithOpacity';

const ImperianSpeaks = () => {
  useEffect(() => {
    $(document).ready(function () {
      $(".popup-youtube").magnificPopup({
        type: "iframe",
        iframe: {
          patterns: {
            youtube: {
              index: "youtu.be/",
              id: function (url: any) {
                var match = url.match(/youtu\.be\/([^\?]+)/); // Extract video ID from short URL
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
    <div className="section custom-blog-cursor">
      <Container>
        <Row>
          <Col className="col-12">
            <div className="title-box">
              <h2 className="title-2">Imperian Speaks 😍</h2>
              <p>
                Impero is a leading app development company serving multiple
                time zones with over 13 years of innovation. Our solutions have
                impacted 50k+ users, ensuring your tech reaches real people.
                Discover how our team, the Imperians, feels about their journey
                with us!
              </p>
            </div>
          </Col>
        </Row>
        <Row className="imperian-speaks d-flex flex-row align-items-center justify-content-center">
          {/* <Col md={6}>
            <div className="imperian-speaks-box-careers">
              <AnimatedImageWithOpacity
                className="img-fluid"
                src={IMAGES.ImperianSpeaks3}
                width="577"
                height="360"
                alt=""
                loading="lazy"
              />
              <a
                href="https://youtu.be/DYUBmg7-8j8?si=pYVUBFjA4FxZ9WOG"
                className="play-btn popup-youtube"
                aria-label="playbtn"
              >
                <AnimatedImageWithOpacity
                  className="img-fluid"
                  src={IMAGES.videoPlay}
                  width="60"
                  height="60"
                  alt="play-img"
                  loading="lazy"
                />
              </a>
            </div>
          </Col> */}
          <Col md={6}>
            <div className="imperian-speaks-box-careers">
              <AnimatedImageWithOpacity
                className="img-fluid"
                src={IMAGES.ImperianSpeaks4}
                width="577"
                height="360"
                alt=""
                loading="lazy"
              />
              <a
                href="https://youtu.be/8z-sBifzuug?si=Na4WhILJ-aj5QxfD"
                className="play-btn popup-youtube"
                aria-label="playbtn"
              >
                <AnimatedImageWithOpacity
                  className="img-fluid"
                  src={IMAGES.videoPlay}
                  width="60"
                  height="60"
                  alt="play-img"
                  loading="lazy"
                />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ImperianSpeaks;

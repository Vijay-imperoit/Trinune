import './style.css';
import { tns } from 'tiny-slider/src/tiny-slider';
import 'tiny-slider/dist/tiny-slider.css';
import { useEffect } from 'react';
import { IMAGES } from '../../../utils/staticJSON';

const OurTeam = () => {
  useEffect(() => {
    const slider2 = tns({
      container: '.dedicated-team-slider',
      loop: true,
      items: 2,
      speed: 3000,
      nonce: '1',
      autoplay: true,
      autoplayHoverPause: false,
      mouseDrag: true,
      autoplayTimeout: 3000,
      swipeAngle: false,
      autoplayButtonOutput: false,
      controls: false,
      nav: false,
      gutter: 30, 
      responsive: {
        640: {
          items: 3,
          gutter: 30,
        },
        768: {
          items: 4,
          gutter: 30,
        },
        1024: {
          items: 5,
          gutter: 30,
        },
      },
    });
    return () => {
      slider2.destroy();
    };
  }, []);

  return (
    <div className="dedicated-team-slider pb-lg-5 mb-lg-3">
      <div className="slider-item">
        <div className="card">
          <img
            className="img-fluid"
            src={IMAGES.Mohammad_Lakhani}
            width="200"
            height="auto"
            alt="team"
            loading="lazy"
          />
          <div className="name-box">
            <p className="main-text">Mohammed L.</p>
            <p className="sub-text">Project Manager</p>
          </div>
        </div>
      </div>
      <div className="slider-item">
        <div className="card">
          <img
            className="img-fluid"
            src={IMAGES.Moin_Shirazi}
            width="200"
            height="auto"
            alt="team"
            loading="lazy"
          />
          <div className="name-box">
            <p className="main-text">Moin Shirazi</p>
            <p className="sub-text">Vice President</p>
          </div>
        </div>
      </div>
      <div className="slider-item">
        <div className="card">
          <img
            className="img-fluid"
            src={IMAGES.Ishan_Shah}
            width="200"
            height="auto"
            alt="team"
            loading="lazy"
          />
          <div className="name-box">
            <p className="main-text">Issan Shah</p>
            <p className="sub-text">Project Manager</p>
          </div>
        </div>
      </div>
      <div className="slider-item">
        <div className="card">
          <img
            className="img-fluid"
            src={IMAGES.Chetan_Kukadiya}
            width="200"
            height="auto"
            alt="team"
            loading="lazy"
          />
          <div className="name-box">
            <p className="main-text">Chetan Kukadiya</p>
            <p className="sub-text">Team Lead PHP</p>
          </div>
        </div>
      </div>
      <div className="slider-item">
        <div className="card">
          <img
            className="img-fluid"
            src={IMAGES.kamlesh_Raiya}
            width="200"
            height="auto"
            alt="team"
            loading="lazy"
          />
          <div className="name-box">
            <p className="main-text">Kamlesh Raiya</p>
            <p className="sub-text">Project Manager</p>
          </div>
        </div>
      </div>
      <div className="slider-item">
        <div className="card">
          <img
            className="img-fluid"
            src={IMAGES.Azaz_Shaikh}
            width="200"
            height="auto"
            alt="team"
            loading="lazy"
          />
          <div className="name-box">
            <p className="main-text">Ajaz Shaikh</p>
            <p className="sub-text">Lead Designer</p>
          </div>
        </div>
      </div>
      <div className="slider-item">
        <div className="card">
          <img
            className="img-fluid"
            src={IMAGES.Lalit_Poptani}
            width="200"
            height="auto"
            alt="team"
            loading="lazy"
          />
          <div className="name-box">
            <p className="main-text">Lalit Poptani</p>
            <p className="sub-text">Tech Lead</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;

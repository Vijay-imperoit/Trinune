import './style.css';
import { IMAGES } from '../../../utils/staticJSON';
import $ from 'jquery';
import 'magnific-popup';
import 'magnific-popup/dist/magnific-popup.css';
import { useEffect } from 'react';
declare global {
  interface JQuery {
    magnificPopup(options?: any): JQuery;
  }
}

const ClientCards = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.our-value-body .card');
    cards.forEach((card) => {
      card.addEventListener('mouseenter', () => {
        cards.forEach((c) => c.classList.remove('active'));
        card.classList.add('active');
      });
      card.addEventListener('mouseleave', () => {
        const isLastCard = Array.from(cards).indexOf(card) === cards.length - 1;
        if (isLastCard) {
          card.classList.add('active');
        }
      });
    });

    $(document).ready(function () {
      $('.popup-youtube').magnificPopup({
        type: 'iframe',
        iframe: {
          patterns: {
            youtube: {
              index: 'youtu.be/',
              id: function (url: any) {
                var match = url.match(/youtu\.be\/([^\?]+)/); // Extract video ID from short URL
                if (match && match[1]) {
                  return match[1];
                }
                // Fallback to standard YouTube URL handling
                match = url.match(/[?&]v=([^&]+)/);
                return match ? match[1] : null;
              },
              src: 'https://www.youtube.com/embed/%id%?autoplay=1',
            },
          },
          srcAction: 'iframe_src',
        },
      });
    });

    return () => {
      $('.popup-youtube').magnificPopup('destroy');
    };
  }, []);
  return (
    <div className="our-value-body custom-blog-cursor">
      <div className="card active">
        <div className="card-body">
          <div className="img-box">
            <img
              className="client-img"
              src={IMAGES.client5}
              width="200"
              height="200"
              alt="client"
              loading="lazy"
            />
            <a
              href="https://youtu.be/1-Zvdx8_niE?si=DlvoGHwTgXwEiOqK"
              className="play-btn popup-youtube custom-cursor"
              aria-label="playbtn"
            >
              <img
                className="img-fluid"
                src={IMAGES.playBtn}
                width="60"
                height="60"
                alt="play-img"
                loading="lazy"
              />
            </a>
          </div>
          <h3 className="main-text">Tadhg Farrelly</h3>
          <p className="sub-text">Greenhills</p>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="img-box">
            <img
              className="client-img"
              src={IMAGES.client1}
              width="200"
              height="200"
              alt="client"
              loading="lazy"
            />
            <a
              href="https://youtu.be/RSQIPQvhNn4?si=QA4Ftc2igxsMPRgG"
              className="play-btn popup-youtube custom-cursor"
              aria-label="playbtn"
            >
              <img
                className="img-fluid"
                src={IMAGES.playBtn}
                width="60"
                height="60"
                alt="play-img"
                loading="lazy"
              />
            </a>
          </div>
          <h3 className="main-text">Avril McMonagle</h3>
          <p className="sub-text">Mosaic</p>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="img-box">
            <img
              className="client-img"
              src={IMAGES.client2}
              width="200"
              height="200"
              alt="client"
              loading="lazy"
            />
            <a
              href="https://youtu.be/oV4oWgvxRsY?si=5V4YiatzFAbOFQ_O"
              className="play-btn popup-youtube custom-cursor"
              aria-label="playbtn"
            >
              <img
                className="img-fluid"
                src={IMAGES.playBtn}
                width="60"
                height="60"
                alt="play-img"
                loading="lazy"
              />
            </a>
          </div>
          <h3 className="main-text">Aimée Carton</h3>
          <p className="sub-text">KeepAppy</p>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="img-box">
            <img
              className="client-img"
              src={IMAGES.client3}
              width="200"
              height="200"
              alt="client"
              loading="lazy"
            />
            <a
              href="https://youtu.be/gkKOE1Rgbv4?si=JLt1KkEdnqmtDjvA"
              className="play-btn popup-youtube custom-cursor"
              aria-label="playbtn"
            >
              <img
                className="img-fluid"
                src={IMAGES.playBtn}
                width="60"
                height="60"
                alt="play-img"
                loading="lazy"
              />
            </a>
          </div>
          <h3 className="main-text">Alkis Mitsotakis</h3>
          <p className="sub-text">LED App</p>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="img-box">
            <img
              className="client-img"
              src={IMAGES.client4}
              width="200"
              height="200"
              alt="client"
              loading="lazy"
            />
            <a
              href="https://www.youtube.com/embed/R5wJA8D41Eg?autoplay=1"
              className="play-btn popup-youtube custom-cursor"
              aria-label="playbtn"
            >
              <img
                className="img-fluid"
                src={IMAGES.playBtn}
                width="60"
                height="60"
                alt="play-img"
                loading="lazy"
              />
            </a>
          </div>
          <h3 className="main-text">Laura Vinogradov</h3>
          <p className="sub-text">EthiCart</p>
        </div>
      </div>
    </div>
  );
};

export default ClientCards;

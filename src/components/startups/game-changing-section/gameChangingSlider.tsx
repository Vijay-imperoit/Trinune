import "./style.css";
import { IMAGES } from "../../../utils/staticJSON";
import { tns } from "tiny-slider/src/tiny-slider";
import "tiny-slider/dist/tiny-slider.css";
import { useEffect } from "react";

const GameChangingSlider = () => {
  useEffect(() => {
    const slider1 = tns({
      container: ".game-slider",
      loop: true,
      items: 1,
      speed: 3000,
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
          items: 2,
          gutter: 0,
        },
        768: {
          items: 2.6,
          gutter: 0,
        },
        1024: {
          items: 4,
          gutter: 0,
          edgePadding: 73,
        },
      },
    });
    return () => {
      slider1.destroy();
    };
  }, []);

  return (
    <div className="game-slider custom-blog-cursor">
      <div className="card industry-card-startups">
        <div className="card-body">
          <div className="icon">
            <svg
              width="52"
              height="53"
              viewBox="0 0 52 53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="50"
                height="50"
                rx="7.5"
                stroke="white"
              />
              <path
                d="M22.5 28.2493V22.9993C22.5 21.8994 22.5 21.3494 22.1583 21.0077C21.8166 20.666 21.2666 20.666 20.1667 20.666H17.8333C16.7334 20.666 16.1834 20.666 15.8417 21.0077C15.5 21.3494 15.5 21.8994 15.5 22.9993V33.4993C15.5 35.6992 15.5 36.7991 16.1834 37.4826C16.8668 38.166 17.9668 38.166 20.1667 38.166H22.5M22.5 28.2493L26.3695 26.3145C27.6536 25.6725 28.2958 25.3515 28.7932 25.5648C28.8995 25.6105 28.9983 25.6716 29.0867 25.7463C29.5 26.0958 29.5 26.8136 29.5 28.2493L33.1232 26.4377C34.6366 25.681 35.3934 25.3027 35.9466 25.6446C36.5 25.9866 36.5 26.8327 36.5 28.5248V33.4993C36.5 35.6992 36.5 36.7991 35.8166 37.4826C35.1331 38.166 34.0332 38.166 31.8333 38.166H22.5M22.5 28.2493V38.166"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.5 24.166H22.5"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M27.1667 14.834H21.3333C20.2334 14.834 19.6834 14.834 19.3417 15.1757C19 15.5174 19 16.0674 19 17.1673"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M30.666 14.834H31.8327"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M24.834 18.334H31.834"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <h3 className="title">Manufacturing</h3>
          <p className="text">
            Experts at Impero are dedicated to Modernize operational processes
            with intelligent IT solutions to digitally transform your
            manufacturing business.
          </p>
        </div>
        <div className="card-img">
          <img
            className="img-fluid"
            src={IMAGES.manufacture}
            alt="manufacture"
            loading="lazy"
          />
        </div>
      </div>
      <div className="card industry-card-startups">
        <div className="card-body">
          <div className="icon">
            <svg
              width="52"
              height="53"
              viewBox="0 0 52 53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="0.5"
                width="52"
                height="52"
                rx="8"
                stroke="white"
              />
              <path
                d="M35.5594 27.6652C37.4924 31.0133 36.3454 35.2944 32.9973 37.2274C29.6492 39.1605 25.3681 38.0133 23.4351 34.6652M35.5594 27.6652C33.6264 24.3172 29.3454 23.1701 25.9973 25.1031C22.6492 27.0361 21.5021 31.3172 23.4351 34.6652M35.5594 27.6652L23.4351 34.6652"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M23.7166 18.9664L29.6491 15.4609C31.8333 14.1703 34.6263 14.9362 35.8874 17.1717C36.9005 18.9677 36.6167 21.1657 35.3333 22.6299M23.7166 18.9664L17.7842 22.4718C15.5999 23.7624 14.8515 26.6209 16.1126 28.8564C16.8708 30.2005 18.1828 31.0133 19.5833 31.1673M23.7166 18.9664L25.4167 21.834"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <h3 className="title">Healthcare</h3>
          <p className="text">
            Impero empowers healthcare organisations seeking to optimise their
            digital business by providing software development services .
          </p>
        </div>
        <div className="card-img">
          <img
            className="img-fluid"
            src={IMAGES.healthcare}
            alt="healthcare"
            loading="lazy"
          />
        </div>
      </div>
      <div className="card industry-card-startups">
        <div className="card-body">
          <div className="icon">
            <svg
              width="52"
              height="53"
              viewBox="0 0 52 53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="0.5"
                width="52"
                height="52"
                rx="8"
                stroke="white"
              />
              <path
                d="M15.4609 24.7461V30.5815C15.4609 33.8825 15.4609 35.533 16.4861 36.5585C17.5112 37.5841 19.1611 37.5841 22.4609 37.5841H29.4609C32.7607 37.5841 34.4106 37.5841 35.4358 36.5585C36.4609 35.533 36.4609 33.8825 36.4609 30.5815V24.7461"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M29.4609 32.3262C28.6628 33.0346 27.3922 33.4928 25.9609 33.4928C24.5297 33.4928 23.259 33.0346 22.4609 32.3262"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M23.7884 22.3223C23.4594 23.5104 22.263 25.5599 19.9897 25.857C17.9825 26.1192 16.4602 25.2431 16.0713 24.8767C15.6426 24.5797 14.6655 23.6292 14.4262 23.0352C14.1869 22.4411 14.4661 21.154 14.6655 20.6292L15.4626 18.3211C15.6572 17.7414 16.1128 16.3702 16.5798 15.9064C17.0469 15.4426 17.9924 15.4224 18.3816 15.4224H26.5547C28.6584 15.4521 33.2584 15.4037 34.1677 15.4224C35.077 15.4412 35.6234 16.2034 35.7829 16.5302C37.1396 19.8164 37.6673 21.6985 37.6673 22.5005C37.4902 23.3561 36.7573 24.9692 34.1677 25.6788C31.4762 26.4161 29.9503 24.9818 29.4716 24.4312M22.6817 24.4312C23.0606 24.8966 24.2491 25.8333 25.9719 25.857C27.6949 25.8808 29.1825 24.6787 29.7109 24.0748C29.8604 23.8966 30.1835 23.3678 30.5186 22.3223"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <h3 className="title">Retail</h3>
          <p className="text">
            Our custom retail software development services can simplify
            customer journeys in new ways, through innovative technologies.
          </p>
        </div>
        <div className="card-img">
          <img
            className="img-fluid"
            src={IMAGES.retail}
            alt="retail"
            loading="lazy"
          />
        </div>
      </div>
      <div className="card industry-card-startups">
        <div className="card-body">
          <div className="icon">
            <svg
              width="52"
              height="53"
              viewBox="0 0 52 53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="0.5"
                width="52"
                height="52"
                rx="8"
                stroke="white"
              />
              <path
                d="M14.334 22.4979C14.334 21.1024 14.8968 20.2471 16.0614 19.599L20.8555 16.931C23.3676 15.533 24.6236 14.834 26.0006 14.834C27.3777 14.834 28.6337 15.533 31.1458 16.931L35.9399 19.599C37.1045 20.2471 37.6673 21.1024 37.6673 22.4979C37.6673 22.8763 37.6673 23.0655 37.626 23.2211C37.4089 24.0383 36.6683 24.1673 35.9531 24.1673H16.0481C15.333 24.1673 14.5924 24.0383 14.3753 23.2211C14.334 23.0655 14.334 22.8763 14.334 22.4979Z"
                stroke="currentColor"
                stroke-width="1.5"
              />
              <path
                d="M25.9961 20.666H26.0081"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.666 24.166V34.0827M21.3327 24.166V34.0827"
                stroke="currentColor"
                stroke-width="1.5"
              />
              <path
                d="M30.666 24.166V34.0827M35.3327 24.166V34.0827"
                stroke="currentColor"
                stroke-width="1.5"
              />
              <path
                d="M34.1673 34.084H17.834C15.901 34.084 14.334 35.6509 14.334 37.584C14.334 37.9061 14.5952 38.1673 14.9173 38.1673H37.084C37.4061 38.1673 37.6673 37.9061 37.6673 37.584C37.6673 35.6509 36.1004 34.084 34.1673 34.084Z"
                stroke="currentColor"
                stroke-width="1.5"
              />
            </svg>
          </div>
          <h3 className="title">Finance</h3>
          <p className="text">
            We help the financial services sector manage risk and unlock Big
            Data’s potential – with advanced analytics, Machine Learning and
            more.
          </p>
        </div>
        <div className="card-img">
          <img
            className="img-fluid"
            src={IMAGES.finance}
            alt="finance"
            loading="lazy"
          />
        </div>
      </div>
      <div className="card industry-card-startups">
        <div className="card-body">
          <div className="icon">
            <svg
              width="52"
              height="53"
              viewBox="0 0 52 53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="0.5"
                width="52"
                height="52"
                rx="8"
                stroke="white"
              />
              <path
                d="M30.666 24.166L33.1736 24.9183C34.7757 25.3989 35.5767 25.6393 36.038 26.2592C36.4993 26.8792 36.4993 27.7156 36.4993 29.3881V38.166"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
              <path
                d="M21.334 23H24.834M21.334 27.6667H24.834"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M25.9993 38.1673V34.6673C25.9993 33.5674 25.9993 33.0174 25.6576 32.6757C25.3159 32.334 24.7659 32.334 23.666 32.334H22.4993C21.3994 32.334 20.8494 32.334 20.5077 32.6757C20.166 33.0174 20.166 33.5674 20.166 34.6673V38.1673"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
              <path
                d="M14.334 38.166H37.6673"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M15.5 38.1673V20.3374C15.5 17.4082 15.5 15.9436 16.423 15.2169C17.3461 14.4903 18.7053 14.8848 21.4238 15.6739L27.2571 17.3671C28.8975 17.8433 29.7178 18.0813 30.1922 18.7302C30.6667 19.3792 30.6667 20.263 30.6667 22.0307V38.1673"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <h3 className="title">Entertainment</h3>
          <p className="text">
            Enabling you to engage and inspire audiences with digital
            experiences that are on-demand, relevant and adaptable.
          </p>
        </div>
        <div className="card-img">
          <img
            className="img-fluid"
            src={IMAGES.entertainment}
            alt="entertainment"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default GameChangingSlider;

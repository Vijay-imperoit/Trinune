import "./style.css";
import "tiny-slider/dist/tiny-slider.css";
import { useEffect } from "react";
import { IMAGES } from '../../../utils/staticJSON';
import { Col, Container, Row } from 'react-bootstrap';
const IndustriesSection = () => {
  // useEffect(() => {
  //   const slider1 = tns({
  //     container: ".industries-slider",
  //     loop: false,
  //     items: 1,
  //     speed: 3000,
  //     autoplay: false,
  //     autoplayHoverPause: true,
  //     mouseDrag: true,
  //     autoplayTimeout: 3000,
  //     swipeAngle: false,
  //     autoplayButtonOutput: false,
  //     controlsContainer: "#custom-control3",
  //     nav: false,
  //     gutter: 10,
  //     responsive: {
  //       540: {
  //         items: 2,
  //       },
  //       768: {
  //         items: 2,
  //       },
  //       1024: {
  //         items: 3,
  //       },
  //       1200: {
  //         items: 4,
  //       },
  //     },
  //   });
  //   return () => {
  //     slider1.destroy();
  //   };
  // }, []);

  useEffect(() => {
    const columns = document.querySelectorAll(".columns-box");
    const section: any = document.querySelector(".industries-columns-sec");

    columns.forEach((column) => {
      column.addEventListener("mouseenter", () => {
        const bgImage = column.getAttribute("data-background");
        section.style.backgroundImage = `url(${bgImage})`;
      });

      column.addEventListener("mouseleave", () => {
        section.style.backgroundImage = `url(${IMAGES.fintech})`;
      });
    });

    return () => {
      columns.forEach((column) => {
        column.removeEventListener("mouseenter", () => {});
        column.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);
  return (
    // <div className="section p-0 industries-columns-sec custom-blog-cursor">
    //   <div className="back-side-text">
    //     <h2 className="heading">Industries we serve</h2>
    //   </div>
    //   <div className="icon if-black-bg" id="custom-control3">
    //     <button className="btn-flush" aria-label="flush">
    //       <svg
    //         width="20"
    //         height="16"
    //         viewBox="0 0 20 16"
    //         fill="none"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <path
    //           d="M18 8L2 8M2 8L8 14M2 8L8 2"
    //           stroke="currentColor"
    //           stroke-width="1.5"
    //           stroke-linecap="round"
    //           stroke-linejoin="round"
    //         />
    //       </svg>
    //     </button>
    //     <button className="btn-flush px-2" aria-label="flush">
    //       <svg
    //         width="20"
    //         height="16"
    //         viewBox="0 0 20 16"
    //         fill="none"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <path
    //           d="M2 8H18M18 8L12 2M18 8L12 14"
    //           stroke="currentColor"
    //           stroke-width="1.5"
    //           stroke-linecap="round"
    //           stroke-linejoin="round"
    //         />
    //       </svg>
    //     </button>
    //   </div>
    //   <div className="industries-slider">
    //     <div className="columns-box" data-background={IMAGES.fintech}>
    //       <div className="box-end">
    //         <div className="card-box">
    //           <h3 className="main-text">Fintech</h3>
    //           <p className="fs-25 sub-text">
    //             We help the financial services sector manage risk and unlock Big
    //             Data’s potential – with advanced analytics, Machine Learning and
    //             more.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="columns-box" data-background={IMAGES.manufacturing}>
    //       <div className="box-end">
    //         <div className="card-box">
    //           <h3 className="main-text">Manufacturing</h3>
    //           <p className="fs-25 sub-text">
    //             Experts at Impero are dedicated to Modernize operational
    //             processes with intelligent IT solutions to digitally transform
    //             your manufacturing business.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="columns-box" data-background={IMAGES.healthcare}>
    //       <div className="box-end">
    //         <div className="card-box">
    //           <h3 className="main-text">Healthcare</h3>
    //           <p className="fs-25 sub-text">
    //             Impero empowers healthcare organisations seeking to optimise
    //             their digital business by providing bespoke development services
    //             .
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="columns-box" data-background={IMAGES.retail}>
    //       <div className="box-end">
    //         <div className="card-box">
    //           <h3 className="main-text">Retail</h3>
    //           <p className="fs-25 sub-text">
    //             Our custom retail bespoke software development services can
    //             simplify customer journeys in new ways, through innovative
    //             technologies.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="section lasting-solutions-flutter custom-blog-cursor-white">
    <Container>
      <Row className="gy-5 align-items-start">
        <Col
          lg={5}
          className="sticky-lg-top top-50"
        >
          <h2 className="title-2 text-white mb-4">
          Industries we serve
          </h2>
        </Col>
        <Col
          lg={7}
          className="development-services-flutter no-scroll text-white"
        >
          <div className="py-4">
            <div className="card-body">
              <h3 className="mb-3">Fintech</h3>
              <p className="fs-16 text-dark-gray mb-0">
              We help the financial services sector manage risk and unlock Big
              Data’s potential – with advanced analytics, Machine Learning and
              more.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h3 className="mb-3">Manufacturing</h3>
              <p className="fs-16 text-dark-gray mb-0">
              Experts at Impero are dedicated to Modernize operational
              processes with intelligent IT solutions to digitally transform
              your manufacturing business.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h3 className="mb-3">Healthcare</h3>
              <p className="fs-16 text-dark-gray mb-0">
              Impero empowers healthcare organisations seeking to optimise
              their digital business by providing bespoke development services
              .
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h3 className="mb-3">Retail</h3>
              <p className="fs-16 text-dark-gray mb-0">
              Our custom retail bespoke software development services can
              simplify customer journeys in new ways, through innovative
              technologies.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
  );
};

export default IndustriesSection;

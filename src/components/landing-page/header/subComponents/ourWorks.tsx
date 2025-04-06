import React, { useEffect, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { IMAGES } from "../../../../utils/staticJSON";
const AnimatedImageWithOpacity = React.lazy(() => import('../../../../global/AnimatedImageWithOpacity'));

const OurWorks = () => {
  const [activeTab, setActiveTab] = useState("work1");
  const [preloadedImages, setPreloadedImages] = useState<Set<string>>(new Set<string>());
  const [previousTab, setPreviousTab] = useState("work1");

   // Preload all images
    useEffect(() => {
      const preloadImage = (src: string) => {
        return new Promise((resolve, reject) => {
          const img = new window.Image();
          img.src = src;
          img.onload = () => {
            setPreloadedImages(prev => new Set(prev).add(src));
            resolve(src);
          };
          img.onerror = reject;
        });
      };
   
      const preloadAllImages = async () => {
        try {
          const imagePromises = Object.values(worksData).map((data: any) => [
            preloadImage(data.image),
            preloadImage(data.icon)
          ]).flat();
          
          await Promise.all(imagePromises);
        } catch (error) {
          console.error('Error preloading images:', error);
        }
      };
   
      preloadAllImages();
    }, []);

   useEffect(() => {
      if (
        [
          "/aquinas-education",
        ].includes(location.pathname)
      ) {
        setActiveTab("work1");
      } else if (
        [
          "/utrade",
        ].includes(location.pathname)
      ) {
        setActiveTab("work2");
      } else if (["/inpractice"].includes(location.pathname)) {
        setActiveTab("work3");
      } else if ([
        "/teach-kloud",
      ].includes(location.pathname)){
        setActiveTab("work4");
      }
    }, [location.pathname]);

  const worksData: any = {
    work1: {
      title: "Aquinas Education",
      description: "Seamless School Staff Booking",
      subDescription: "Connecting schools with qualified education staff—just Look, Click, Book!",
      image: IMAGES.AquinasMegamenu,
      icon: IMAGES.aquinasLogo,
      link: "/aquinas-education"
    },
    work2: {
      title: "Utrade",
      description: "Streamlined B2B Supply Platform",
      subDescription: "A B2B portal in East Africa to streamline partnerships by eliminating intermediaries.",
      image: IMAGES.UtradeMegamenu1,
      icon: IMAGES.uTradeLogo,
      link: "/utrade"
    },
    work3: {
      title: "InPractice",
      description: "Efficient Cloud-Based Audit Tool",
      subDescription: "A cutting-edge financial audit platform built for SMEs.",
      image: IMAGES.InPracticeMegamenu1,
      icon: IMAGES.inPractiseLogo,
      link: "/inpractice"
    },
    work4: {
      title: "TeachKloud",
      description: "Unified Early Education Platform",
      subDescription: "An app for educators to focus on what they love! Saved 60% time in admin & compliance!",
      image: IMAGES.TeachkloudMegamenu1,
      icon: IMAGES.teachkloudLogo,
      link: "/teach-kloud"
    },
  };

  return (
    <Row className="h-100 py-0">
      <Col lg={4} className="border-lg">
        <div className="nav">
          {Object.entries(worksData).map(([key, data]: any) => (
            <a
              key={key}
              href='#'
              className={`nav-link custom-cursor ${activeTab === key ? "active" : ""}`}
              onClick={() => {
                setPreviousTab(activeTab);
                setActiveTab(key)
              }}
            >
              <div className="d-flex align-items-center gap-3">
                <AnimatedImageWithOpacity
                  className="img-fluid"
                  src={data.icon}
                  width="40"
                  height="40"
                  alt={`${data.title} icon`}
                  loading="lazy"
                />
                <div style={{ whiteSpace: 'nowrap' }}>
                  <p className="main-text">{data.title}</p>
                  <p className="sub-text">{data.description}</p>
                </div>
              </div>
              <Image
                className="img-fluid show-arrow"
                src={IMAGES.arrowRightIcon}
                width="18"
                height="18"
                alt="icon"
                loading="lazy"
              />
            </a>
          ))}
          {/* <div className="d-flex flex-row">
            <a href='/case-studies' className='col-lg-12 nav-hover'>
              <h6>See All Works</h6>
              <Image
                className="img-fluid show-arrow"
                src={IMAGES.arrowRightIcon}
                width="30"
                height="30"
                alt="icon"
                loading="lazy"
              />
            </a>
          </div> */}
           <div className="see-all-works ms-4 w-100 custom-cursor">
            <a  href='/case-studies'  className="link-with-arrow custom-cursor">
              See All Works
              <Image
                className="img-fluid show-arrow"
                src={IMAGES.arrowRightIcon}
                width="18"
                height="18"
                alt="arrow icon"
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </Col>
      <Col lg={8} className="align-self-end align-self-lg-stretch">
        <Row className="gy-3 h-100 px-lg-3">
          <Col lg={12} className="custom-blog-cursor">
            <h4>{worksData[activeTab].title}</h4>
            <p className="sub-text mb-0">
              {worksData[activeTab].subDescription}
            </p>
            <a href= {worksData[activeTab].link} className="link-with-arrow my-2 custom-cursor">
              View Details
              <Image
                className="img-fluid show-arrow"
                src={IMAGES.arrowRightIcon}
                width="18"
                height="18"
                alt="arrow icon"
                loading="lazy"
              />
            </a>
          </Col>
          {/* <Col lg={12}>
          <AnimatedImageWithOpacity
              className="img-fix img-fluid p-1"
              src={worksData[activeTab].image}
              width="400"
              height="400"
              alt={worksData[activeTab].title}
              loading="lazy"
            />
          </Col> */}
          <Col lg={12} className="">
          {preloadedImages.has(worksData[activeTab].image) ?
            <AnimatedImageWithOpacity
              key={activeTab}
              className="img-fix"
              src={worksData[activeTab].image}
              width="600"
              height="600"
              alt={worksData[activeTab].title}
              loading="eager"
              // style={{
              //   opacity: preloadedImages.has(industriesData[activeTab].image) ? 1 : 0,
              //   transition: 'opacity 0.5s ease-in-out',
              //   position: 'relative',
              //   zIndex: 1,
              // }}
            />
            :
            <Image
              key={previousTab}
              className="img-fix"
              src={worksData[previousTab].image}
              width="600"
              height="600"
              alt={worksData[previousTab].title}
              loading="eager"
              style={{
                opacity: preloadedImages.has(worksData[activeTab].image) ? 0 : 1,
                transition: 'opacity 0.5s ease-in-out',
                filter: 'blur(1px)',
              }}
            />
            }
          </Col>
        </Row>
      </Col>
    </Row>
  );  
};

export default OurWorks;

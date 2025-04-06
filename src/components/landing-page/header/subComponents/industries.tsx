import React, { useEffect, useState } from 'react';
import { Col, Image, Row } from "react-bootstrap";
import { IMAGES } from "../../../../utils/staticJSON";
import { useLocation } from 'react-router-dom';
const AnimatedImageWithOpacity = React.lazy(() => import('../../../../global/AnimatedImageWithOpacity'));

interface IndustryData {
  title: string;
  description: string;
  image: string;
  icon: string;
  link: string;
}

type IndustriesDataType = {
  [key: string]: IndustryData;
};

const Industries = () => {
  const [activeTab, setActiveTab] = useState("education");
  const [preloadedImages, setPreloadedImages] = useState<Set<string>>(new Set<string>());
  const [previousTab, setPreviousTab] = useState("education");
  const location = useLocation();

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
        const imagePromises = Object.values(industriesData).map((data: IndustryData) => [
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

  const pathToTabMap: Record<string, string> = {
    "/manufacturing": "manufacturing",
    "/healthcare": "healthcare",
    "/finance": "finance",
    "/education": "education",
    "/retail": "retail",
    "/on-demand": "onDemand",
    "/restaurant": "restaurant",
    "/entertainment": "entertainment",
    "/travel": "travel",
    "/events": "events",
    "/ecommerce": "eCommerce",
    "/saas": "SaaS",
    "/games": "games",
    "/wellness": "wellness",
    "/social-networking": "socialNetworking",
    "/banking": "banking",
    "/insurance": "insurance",
    "/real-estate": "realEstate",
    "/news": "news",
    "/logistics": "logistics",
  };


  useEffect(() => {
    // Match the pathname to a tab
    const tab = pathToTabMap[location.pathname];
    if (tab) {
      setActiveTab(tab);
    }
  }, [location.pathname]);

  const industriesData: IndustriesDataType = {
    education: {
      title: "Education",
      description: "Building innovative educational technology solutions to enhance learning experiences and institutional efficiency.",
      image: IMAGES.education,
      icon: IMAGES.educationIcon,
      link: "/education"
    },
    finance: {
      title: "Finance",
      description: "Delivering secure and scalable fintech solutions to transform financial services and banking operations.",
      image: IMAGES.industriesFinance,
      icon: IMAGES.financeIcon,
      link: "/finance"
    },
    realEstate: {
      title: "Real Estate",
      description: "Enhancing real estate management with innovative tools.",
      image: IMAGES.realEstate,
      icon: IMAGES.realEstateIcon,
      link: "/real-estate"
    },
    manufacturing: {
      title: "Manufacturing",
      description: "Empowering manufacturing businesses with cutting-edge digital solutions and automation capabilities.",
      image: IMAGES.manufactureImage,
      icon: IMAGES.manufacturingIcon,
      link: "/manufacturing"
    },
    healthcare: {
      title: "Healthcare",
      description: "Impero empowers healthcare organisations seeking to optimise their digital business by providing software development services.",
      image: IMAGES.industriesHealthCare,
      icon: IMAGES.healthCareIcon,
      link: "/healthcare"
    },
    games: {
      title: "Games",
      description: "Creating immersive gaming experiences and solutions.",
      image: IMAGES.games,
      icon: IMAGES.gamesIcon,
      link: "/games"
    },
    wellness: {
      title: "Wellness",
      description: "Empowering the wellness industry with innovative solutions.",
      image: IMAGES.wellness,
      icon: IMAGES.wellnessIcon,
      link: "/wellness"
    },
    socialNetworking: {
      title: "Social Networking",
      description: "Building dynamic platforms for social networking.",
      image: IMAGES.socialNetworking,
      icon: IMAGES.socialNetworkingIcon,
      link: "/social-networking"
    },
    eCommerce: {
      title: "eCommerce",
      description: "Building robust eCommerce platforms for seamless shopping experiences.",
      image: IMAGES.eCommerce,
      icon: IMAGES.eCommerceIcon,
      link: "/ecommerce"
    },
    restaurant: {
      title: "Restaurant",
      description: "Innovative solutions for restaurant management and customer experience enhancement.",
      image: IMAGES.restaurant,
      icon: IMAGES.restaurantIcon,
      link: "/restaurant"
    },
    SaaS: {
      title: "SaaS",
      description: "Developing cutting-edge SaaS solutions for diverse industries.",
      image: IMAGES.SaaS,
      icon: IMAGES.SaaSIcon,
      link: "/saas"
    },
    events: {
      title: "Events",
      description: "Revolutionizing event management with tailored solutions.",
      image: IMAGES.events,
      icon: IMAGES.eventsIcon,
      link: "/events"
    },
    entertainment: {
      title: "Entertainment",
      description: "Creating engaging entertainment platforms and solutions.",
      image: IMAGES.industriesEntertainment,
      icon: IMAGES.entertainmentIcon,
      link: "/entertainment"
    },
    travel: {
      title: "Travel",
      description: "Streamlining travel and tourism with advanced digital platforms.",
      image: IMAGES.travel,
      icon: IMAGES.travelIcon,
      link: "/travel"
    },
    banking: {
      title: "Banking",
      description: "Revolutionizing banking with secure and scalable solutions.",
      image: IMAGES.banking,
      icon: IMAGES.bankingIcon,
      link: "/banking"
    },
    insurance: {
      title: "Insurance",
      description: "Transforming insurance processes with digital solutions.",
      image: IMAGES.insurance,
      icon: IMAGES.insuranceIcon,
      link: "/insurance"
    },
    news: {
      title: "News",
      description: "Providing cutting-edge solutions for the news industry.",
      image: IMAGES.news,
      icon: IMAGES.newsIcon,
      link: "/news"
    },
    logistics: {
      title: "Logistics",
      description: "Optimizing logistics and supply chain with advanced solutions.",
      image: IMAGES.logistics,
      icon: IMAGES.logisticsIcon,
      link: "/logistics"
    },
    retail: {
      title: "Retail",
      description: "Creating seamless omnichannel experiences and digital solutions for modern retail businesses.",
      image: IMAGES.industriesRetail,
      icon: IMAGES.retailIcon,
      link: "/retail"
    },
    onDemand: {
      title: "On Demand",
      description: "Empowering on-demand businesses with scalable and reliable solutions.",
      image: IMAGES.onDemand,
      icon: IMAGES.onDemandIcon,
      link: "/on-demand"
    },
  };



  return (
    <Row className="h-100">
      <Col
        lg={4}
        className="border-lg scroll-nav"
      >
        <div className="nav">
          {Object.entries(industriesData).map(([key, data]: [string, IndustryData]) => (
            <a
              key={key}
              className={`nav-link custom-cursor ${activeTab === key ? 'active' : ''
                }`}
              href="#"
              onClick={() => {
                setPreviousTab(activeTab);
                setActiveTab(key);
              }}
            >
              <div className="d-flex align-items-center gap-3">
                <Image
                  className="img-fluid"
                  src={data.icon}
                  width="18"
                  height="18"
                  alt={`${data.title} icon`}
                  loading="lazy"
                />
                <div>
                  <p className="main-text">{data.title}</p>
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
        </div>
      </Col>
      <Col
        lg={8}
        className="align-self-end align-self-lg-stretch"
      >
        <Row className="gy-3 h-100 px-lg-3">
          <Col
            lg={12}
            className="align-self-lg-center custom-blog-cursor"
          >
            <h4>{industriesData[activeTab].title}</h4>
            <p className="sab-text">{industriesData[activeTab].description}</p>
            <a href={industriesData[activeTab].link} className="link-with-arrow custom-cursor">
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
          <Col lg={12} className="">
            {preloadedImages.has(industriesData[activeTab].image) ?
              <AnimatedImageWithOpacity
                key={activeTab}
                className="img-fix"
                src={industriesData[activeTab].image}
                width="600"
                height="600"
                alt={industriesData[activeTab].title}
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
                src={industriesData[previousTab].image}
                width="600"
                height="600"
                alt={industriesData[previousTab].title}
                loading="eager"
                style={{
                  opacity: preloadedImages.has(industriesData[activeTab].image) ? 0 : 1,
                  transition: 'opacity 0.5s ease-in-out',
                  filter: 'blur(5px)',
                }}
              />
            }
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Industries;
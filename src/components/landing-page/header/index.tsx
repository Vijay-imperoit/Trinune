import React, { useState, useEffect, useRef } from 'react';
import { IMAGES } from '../../../utils/staticJSON';
import { Container, Image } from 'react-bootstrap';
import './style.css';
import { Link, useLocation } from 'react-router-dom';
// const Industries = React.lazy(() => import('./subComponents/industries'));
// const Services = React.lazy(() => import('./subComponents/ourServices'));
// const OurWorks = React.lazy(() => import('./subComponents/ourWorks'));
// const Achievements = React.lazy(() => import('./subComponents/achievements'));
interface HeaderProps {
  isWhiteHeader?: boolean;
}
const Header: React.FC<HeaderProps> = ({ isWhiteHeader = false }) => {
  const [menuActive, setMenuActive] = useState(false);
  const [subMenuActive, setSubMenuActive] = useState(false);
  const [currentMenuTitle, setCurrentMenuTitle] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);
  const progressBarScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    setScrollPercent(scrolled);
  };

  let lastScrollTop = 0;
  const location = useLocation();
  const subMenuRef = useRef<HTMLDivElement | null>(null);
  const mobileMenuHeadRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setMenuActive((prev) => !prev);
    setSubMenuActive(true);
  };

  const showSubMenu = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const hasChildren = target.closest('.menu-item-has-children');

    if (hasChildren) {
      const subMenu = hasChildren.querySelector('.sub-menu') as HTMLElement;
      if (subMenu) {
        subMenu.classList.add('active', 'slide-left');
        const menuTitle = hasChildren.querySelector('a')?.textContent || '';
        setCurrentMenuTitle(menuTitle);

        if (mobileMenuHeadRef.current) {
          mobileMenuHeadRef.current.classList.add('active');
        }
      }
    }
  };

  const hideSubMenu = () => {
    if (subMenuRef.current) {
      subMenuRef.current.classList.replace('slide-left', 'slide-right');
      subMenuRef.current?.classList.remove('active', 'slide-right');
    }

    setCurrentMenuTitle('');
    if (mobileMenuHeadRef.current) {
      mobileMenuHeadRef.current.classList.remove('active');
    }

    setSubMenuActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1200 && menuActive) {
        toggleMenu();
      }
    };
    setSubMenuActive(true);
    const handleScroll = () => {
      const currentScroll = document.documentElement.scrollTop;

      if (currentScroll > lastScrollTop) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      if (currentScroll === 0) {
        setIsScrolled(false);
      } else {
        setIsScrolled(true);
      }

      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    };
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', progressBarScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', progressBarScroll);
    };
  }, [menuActive, !subMenuActive]);

  return (
    <>
      <div className="progress-container progress-container-custom">
        <div
          className="progress-bar progress-bar-custom"
          id="progressBar"
          style={{ width: `${scrollPercent}%` }}
        ></div>
      </div>
      <div
        id="site-header"
        className={`  sub-menu default-header ${isHidden ? 'hide' : ''} ${
          isWhiteHeader
            ? 'is-nav-white custom-blog-cursor'
            : 'custom-blog-cursor-white'
        }
        ${isScrolled ? (isWhiteHeader ? 'scrolled-black' : 'scrolled') : ''}
      `}
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <Container className="">
          <div className="header">
            <div className="nav-section d-flex align-items-center justify-content-between">
              <div className="header-item">
                <div className="logo d-flex align-items-center gap-1">
                  <Link
                    to="/"
                    className=" custom-cursor"
                  >
                    <Image
                      className="res-logo"
                      src={IMAGES.Triune}
                      alt="logo"
                    />
                  </Link>
                  <Image
                    className="res-years"
                    src={IMAGES.Celebration}
                    alt="logo"
                  />
                </div>
              </div>
              <div className="header-item">
                <div className="menu-overlay"></div>
                <nav className={`menu ${menuActive ? 'active' : ''}`}>
                  <div
                    className="mobile-menu-head"
                    ref={mobileMenuHeadRef}
                  >
                    {subMenuActive && (
                      <div
                        className="go-back"
                        onClick={() => {
                          hideSubMenu();
                        }}
                      >
                        <svg
                          width="20"
                          height="12"
                          viewBox="0 0 20 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 1.15625L10.4862 9.67549L19 1.15625"
                            stroke="#000000"
                            strokeWidth="3"
                          />
                        </svg>
                      </div>
                    )}
                    <div className="current-menu-title">{currentMenuTitle}</div>
                    <div
                      className="mobile-menu-close"
                      onClick={toggleMenu}
                    >
                      &times;
                    </div>
                  </div>
                  <ul
                    className="menu-main d-lg-flex gap-3 align-items-center"
                    onClick={showSubMenu}
                  >
                    <li className="menu-item-has-children">
                      <a
                        href="#"
                        className={`py-2 ${
                          [
                            // "/achievements",
                            '/home',
                            '/careers',
                            '/careers-details',
                            '/blogs',
                            '/blogs-details',
                          ].includes(location.pathname) && !menuActive
                            ? isWhiteHeader
                              ? 'text-active-dark custom-blog-cursor'
                              : 'text-active-light custom-blog-cursor-white'
                            : isWhiteHeader
                            ? 'text-not-active custom-blog-cursor'
                            : 'is-nav-white custom-blog-cursor-white'
                        }`}
                      >
                        Home
                        <i>
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 20 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 1.15625L10.4862 9.67549L19 1.15625"
                              stroke="#000000"
                              strokeWidth="3"
                            ></path>
                          </svg>
                        </i>
                      </a>
                      {/* <div ref={subMenuRef}>
                        {subMenuActive && (
                          <div className="sub-menu mega-menu mega-menu-column-4 normal-link overflow-hidden custom-blog-cursor">
                            <Services />
                          </div>
                        )}
                      </div> */}
                    </li>
                    <li className="menu-item-has-children">
                      <a
                        href="#"
                        className={`py-2 ${
                          [
                            '/ios-app-development',
                            '/flutter-app-development',
                            '/android-app-development',
                            '/react-native-development',
                            '/uiux',
                            '/bespoke-software-development',
                            '/web-development',
                            '/esg-sustainability',
                            '/arvr',
                            '/mobile-app-development',
                          ].includes(location.pathname) && !menuActive
                            ? isWhiteHeader
                              ? 'text-active-dark custom-blog-cursor'
                              : 'text-active-light custom-blog-cursor-white'
                            : isWhiteHeader
                            ? 'text-not-active custom-blog-cursor'
                            : 'is-nav-white custom-blog-cursor-white'
                        }`}
                      >
                        About
                        <i>
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 20 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 1.15625L10.4862 9.67549L19 1.15625"
                              stroke="#000000"
                              strokeWidth="3"
                            ></path>
                          </svg>
                        </i>
                      </a>
                      {/* <div ref={subMenuRef}>
                        {subMenuActive && (
                          <div className="sub-menu mega-menu mega-menu-column-4 p-lg-0 custom-blog-cursor">
                            <Achievements />
                          </div>
                        )}
                      </div> */}
                    </li>
                    {/* <li>
                      <a
                        href="/startups"
                        className={`${
                          location.pathname === "/startups" && !menuActive
                            ? isWhiteHeader
                              ? "text-active-dark"
                              : "text-active-light"
                            : isWhiteHeader
                            ? "text-not-active"
                            : ""
                        }`}
                      >
                        Startups
                      </a>
                    </li> */}
                    <li className="menu-item-has-children">
                      <a
                        href="#"
                        className={`py-2 ${
                          [
                            '/manufacturing',
                            '/healthcare',
                            '/finance',
                            '/education',
                            '/retail',
                            '/on-demand',
                            '/restaurant',
                            '/entertainment',
                            '/travel',
                            '/events',
                            '/ecommerce',
                            '/saas',
                            '/games',
                            '/wellness',
                            '/social-networking',
                            '/banking',
                            '/insurance',
                            '/real-estate',
                            '/news',
                            '/logistics',
                          ].includes(location.pathname) && !menuActive
                            ? isWhiteHeader
                              ? 'text-active-dark custom-blog-cursor'
                              : 'text-active-light custom-blog-cursor-white'
                            : isWhiteHeader
                            ? 'text-not-active custom-blog-cursor'
                            : 'custom-blog-cursor-white'
                        }`}
                      >
                        IT Staffing
                        <br /> Services
                        <i>
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 20 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 1.15625L10.4862 9.67549L19 1.15625"
                              stroke="#000000"
                              strokeWidth="3"
                            ></path>
                          </svg>
                        </i>
                      </a>
                      {/* <div ref={subMenuRef}>
                        {subMenuActive && (
                          <div className="sub-menu mega-menu mega-menu-column-4 normal-link custom-blog-cursor">
                            <Industries />
                          </div>
                        )}
                      </div> */}
                    </li>
                    <li>
                      <a
                        href="#"
                        className={`py-2 ${
                          ['/achievements'].includes(location.pathname) &&
                          !menuActive
                            ? isWhiteHeader
                              ? 'text-active-dark custom-blog-cursor'
                              : 'text-active-light custom-blog-cursor-white'
                            : isWhiteHeader
                            ? 'text-not-active custom-blog-cursor'
                            : 'custom-blog-cursor-white'
                        }`}
                      >
                        IT Solutions <br />
                        Reseller
                      </a>
                    </li>
                    {/* <li className="menu-item-has-children">
                      <a
                        href="/case-studies"
                        className={`text-nowrap py-2 ${
                          [
                            '/case-studies',
                            '/aquinas-education',
                            '/utrade',
                            '/teach-kloud',
                            '/inpractice',
                            '/mosaic',
                            '/surewash',
                            '/ethicart',
                            '/siente',
                          ].includes(location.pathname) && !menuActive
                            ? isWhiteHeader
                              ? 'text-active-dark custom-blog-cursor'
                              : 'text-active-light custom-blog-cursor-white'
                            : isWhiteHeader
                            ? 'text-not-active custom-blog-cursor'
                            : 'custom-blog-cursor-white'
                        }`}
                      >
                        OUR WORK
                        <i>
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 20 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 1.15625L10.4862 9.67549L19 1.15625"
                              stroke="#000000"
                              strokeWidth="3"
                            ></path>
                          </svg>
                        </i>
                      </a>
                      <div ref={subMenuRef}>
                        {subMenuActive && (
                          <div className="sub-menu mega-menu mega-menu-column-4 normal-link custom-blog-cursor">
                            <OurWorks />
                          </div>
                        )}
                      </div>
                    </li> */}
                    {/* <li className="d-lg-none custom-cursor">
                      <a
                        href="/budget-calculator"
                        className="btn btn-primary text-white custom-cursor"
                      >
                        Get a Proposal
                      </a>
                    </li> */}
                    {/* {location.pathname !== "/budget-calculator" && ( */}
                    <li className="d-none d-lg-block custom-cursor">
                      <a
                        href="#"
                        className="btn no-hover text-white custom-cursor text-nowrap d-flex align-items-center justify-content-center fs-18 fw-600"
                        style={{
                          background: '#339ABC',
                          width: '146px',
                          height: '49px',
                        }}
                      >
                        Find Jobs
                      </a>
                    </li>
                    {/* )} */}
                  </ul>
                </nav>
              </div>
              <div className="header-item item-right d-block d-xl-none">
                {isWhiteHeader ? (
                  <div
                    className="mobile-menu-trigger"
                    onClick={toggleMenu}
                  >
                    <Image
                      className=""
                      width="230"
                      height="53"
                      src={IMAGES.blackMenu}
                      alt="logo"
                    />
                  </div>
                ) : (
                  <div
                    className="mobile-menu-trigger"
                    onClick={toggleMenu}
                  >
                    <span>
                      <img
                        src={IMAGES.HamburgerIcon}
                        alt="burger"
                      />
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;

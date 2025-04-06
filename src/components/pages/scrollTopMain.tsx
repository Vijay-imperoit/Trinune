import { useState, useEffect } from "react";
import "./scrollTop.css"; // Include custom styles for the button
import { IMAGES } from "../../utils/staticJSON";

const ScrollToTopMain = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show or hide the button based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {isVisible && (
        <div className="scroll-to-top custom-cursor" onClick={scrollToTop}>
          <img
            className="img-fluid"
            src={IMAGES.ArrowUp}
            width="25"
            height="40"
            alt="mobile group"
            loading="lazy"
          />
        </div>
      )}
    </div>
  );
};

export default ScrollToTopMain;

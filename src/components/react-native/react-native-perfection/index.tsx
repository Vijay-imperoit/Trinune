import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { useEffect, useState } from 'react';

const ReactNativePerfection = () => {
   const [apps, setApps] = useState(0);
    const [clients, setClients] = useState(0);
    const [projects, setProjects] = useState(0);
  
    useEffect(() => {
      const animateValue = (setState: any, endValue: any, duration: any) => {
        let startValue = 0;
        const increment = endValue / (duration / 50);
        const timer = setInterval(() => {
          startValue += increment;
          if (startValue >= endValue) {
            setState(Math.round(endValue));
            clearInterval(timer);
          } else {
            setState(Math.round(startValue));
          }
        }, 50);
      };
      animateValue(setApps, 50, 2000);
      animateValue(setClients, 300, 3000);
      animateValue(setProjects, 20, 2000);
    }, []);
  return (
    <section className="section bg-light-blue custom-blog-cursor">
      <Container>
        <div className="title-box mb-lg-5">
          <Row className="gy-3">
            <Col lg={12}>
              <h2 className="title-2">
                13+ Years of Crafting Perfection in React Native
              </h2>
              <p>
                With over 13 years of experience, we deliver tailored React
                Native solutions that help businesses of all sizes stand out and
                excel in the digital world.
              </p>
            </Col>
          </Row>
          <div className="separator-line my-4"></div>
          <Row className="gy-4 pt-4 native-services">
            <Col lg={4}>
              <h3 className="number mb-2">{apps}+</h3>
              <p className="pera mb-0">
                Innovative React Native apps expertly developed and deployed.
              </p>
            </Col>
            <Col lg={4}>
              <h3 className="number mb-2">{clients}+</h3>
              <p className="pera mb-0">
                Clients served and satisfied with innovative solutions tailored
                to exceed expectations.
              </p>
            </Col>
            <Col lg={4}>
              <h3 className="number mb-2">{projects}+</h3>
              <p className="pera mb-0">
                React Native experts Onboard that brings unparalleled skill and
                experience to every project.
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default ReactNativePerfection;
